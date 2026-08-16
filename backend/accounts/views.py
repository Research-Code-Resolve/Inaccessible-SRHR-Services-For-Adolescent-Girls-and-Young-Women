import secrets

from django.contrib.auth.hashers import check_password, make_password
from django.core import signing
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import UserProfile
from .serializers import (
    DeleteRequestSerializer,
    LoginSerializer,
    ProfileUpdateSerializer,
    RecoverSerializer,
    SessionSerializer,
    SignupSerializer,
)

# Account deletion is confirmed with a signed, self-expiring token instead of
# a stored field, so no extra column is needed beyond what the spec lists.
DELETE_CONFIRMATION_SALT = 'accounts.delete-confirmation'
DELETE_CONFIRMATION_MAX_AGE = 300  # 5 minutes

RECOVERY_CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'  # no ambiguous chars


def generate_device_token():
    return secrets.token_hex(32)


def generate_recovery_code():
    return ''.join(secrets.choice(RECOVERY_CODE_ALPHABET) for _ in range(10))


class SessionView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = SessionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        device_token = data.get('device_token')

        if device_token:
            profile, _ = UserProfile.objects.get_or_create(
                device_token=device_token,
                defaults={'preferred_language': data.get('preferred_language', 'en')},
            )
        else:
            profile = UserProfile.objects.create(
                device_token=generate_device_token(),
                preferred_language=data.get('preferred_language', 'en'),
            )

        return Response({
            'device_token': profile.device_token,
            'account_type': profile.account_type,
            'preferred_language': profile.preferred_language,
        })


class SignupView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = SignupSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data

        try:
            profile = UserProfile.objects.get(device_token=data['device_token'])
        except UserProfile.DoesNotExist:
            return Response(
                {'detail': 'Unknown device_token. Call /api/accounts/session/ first.'},
                status=status.HTTP_404_NOT_FOUND,
            )

        if profile.account_type == 'registered':
            return Response(
                {'detail': 'This device is already linked to a registered account.'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if UserProfile.objects.filter(username=data['username']).exists():
            return Response({'detail': 'Username is already taken.'}, status=status.HTTP_400_BAD_REQUEST)

        recovery_code = generate_recovery_code()
        profile.username = data['username']
        profile.passphrase_hash = make_password(data['passphrase'])
        profile.recovery_code_hash = make_password(recovery_code)
        profile.account_type = 'registered'
        profile.save()

        return Response({
            'username': profile.username,
            'account_type': profile.account_type,
            # Shown once: neither this nor the passphrase can be recovered later, only reset.
            'recovery_code': recovery_code,
        }, status=status.HTTP_201_CREATED)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data

        try:
            account = UserProfile.objects.get(username=data['username'], account_type='registered')
        except UserProfile.DoesNotExist:
            return Response({'detail': 'Invalid username or passphrase.'}, status=status.HTTP_401_UNAUTHORIZED)

        if not check_password(data['passphrase'], account.passphrase_hash):
            return Response({'detail': 'Invalid username or passphrase.'}, status=status.HTTP_401_UNAUTHORIZED)

        new_device_token = data['device_token']
        if new_device_token != account.device_token:
            # Re-point the account at this device. Any stray guest profile already
            # sitting on this device's token is discarded per-spec (a guest token
            # that never signs up has nothing worth preserving beyond its session).
            UserProfile.objects.filter(device_token=new_device_token).exclude(pk=account.pk).delete()
            account.device_token = new_device_token
            account.save()

        return Response({
            'device_token': account.device_token,
            'username': account.username,
            'account_type': account.account_type,
            'preferred_language': account.preferred_language,
        })


class RecoverView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RecoverSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data

        try:
            account = UserProfile.objects.get(username=data['username'], account_type='registered')
        except UserProfile.DoesNotExist:
            return Response({'detail': 'Invalid username or recovery code.'}, status=status.HTTP_401_UNAUTHORIZED)

        if not account.recovery_code_hash or not check_password(data['recovery_code'], account.recovery_code_hash):
            return Response({'detail': 'Invalid username or recovery code.'}, status=status.HTTP_401_UNAUTHORIZED)

        new_recovery_code = generate_recovery_code()
        account.passphrase_hash = make_password(data['new_passphrase'])
        account.recovery_code_hash = make_password(new_recovery_code)
        account.save()

        return Response({
            'username': account.username,
            'recovery_code': new_recovery_code,
        })


class ProfileView(APIView):
    permission_classes = [AllowAny]

    def patch(self, request):
        serializer = ProfileUpdateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data

        try:
            profile = UserProfile.objects.get(device_token=data['device_token'])
        except UserProfile.DoesNotExist:
            return Response({'detail': 'Unknown device_token.'}, status=status.HTTP_404_NOT_FOUND)

        if 'preferred_language' in data:
            profile.preferred_language = data['preferred_language']

        if 'username' in data:
            if UserProfile.objects.filter(username=data['username']).exclude(pk=profile.pk).exists():
                return Response({'detail': 'Username is already taken.'}, status=status.HTTP_400_BAD_REQUEST)
            profile.username = data['username']

        if 'passphrase' in data:
            if profile.account_type != 'registered':
                return Response(
                    {'detail': 'Only registered accounts have a passphrase.'},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            profile.passphrase_hash = make_password(data['passphrase'])

        profile.save()

        return Response({
            'device_token': profile.device_token,
            'username': profile.username,
            'account_type': profile.account_type,
            'preferred_language': profile.preferred_language,
        })

    def delete(self, request):
        confirmation_token = request.query_params.get('confirmation_token')
        if not confirmation_token:
            return Response({'detail': 'confirmation_token is required.'}, status=status.HTTP_400_BAD_REQUEST)

        signer = signing.TimestampSigner(salt=DELETE_CONFIRMATION_SALT)
        try:
            profile_id = signer.unsign(confirmation_token, max_age=DELETE_CONFIRMATION_MAX_AGE)
        except signing.SignatureExpired:
            return Response({'detail': 'Confirmation token has expired.'}, status=status.HTTP_400_BAD_REQUEST)
        except signing.BadSignature:
            return Response({'detail': 'Invalid confirmation token.'}, status=status.HTTP_400_BAD_REQUEST)

        deleted, _ = UserProfile.objects.filter(pk=profile_id).delete()
        if not deleted:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_204_NO_CONTENT)


class DeleteRequestView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = DeleteRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data

        try:
            profile = UserProfile.objects.get(device_token=data['device_token'], account_type='registered')
        except UserProfile.DoesNotExist:
            return Response({'detail': 'No registered account on this device.'}, status=status.HTTP_404_NOT_FOUND)

        if not check_password(data['passphrase'], profile.passphrase_hash):
            return Response({'detail': 'Invalid passphrase.'}, status=status.HTTP_401_UNAUTHORIZED)

        signer = signing.TimestampSigner(salt=DELETE_CONFIRMATION_SALT)
        confirmation_token = signer.sign(str(profile.pk))

        return Response({'confirmation_token': confirmation_token})
