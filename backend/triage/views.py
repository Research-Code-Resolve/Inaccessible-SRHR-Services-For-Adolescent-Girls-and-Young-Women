from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.models import UserProfile

from .models import SymptomEntry, SymptomTag, TriageMessage, TriageSession
from .serializers import (
    DeviceTokenQuerySerializer,
    OpenSessionSerializer,
    PostMessageSerializer,
    SymptomEntryInputSerializer,
    SymptomEntryOutputSerializer,
    TriageMessageSerializer,
    TriageSessionSerializer,
)


def generate_assistant_reply(user_message):
    # Stub until this can draw from verified ContentItem records (education app,
    # not built yet). Always unverified so the frontend never mislabels a
    # placeholder reply as vetted guidance.
    reply = (
        "Thanks for sharing that. Verified guidance for this isn't available yet "
        "here — if you're concerned, please reach out to a provider."
    )
    return reply, False


class SessionOpenView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = OpenSessionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        profile = get_object_or_404(UserProfile, device_token=serializer.validated_data['device_token'])

        session = TriageSession.objects.create(user=profile)
        return Response(TriageSessionSerializer(session).data, status=status.HTTP_201_CREATED)


class SessionDetailView(APIView):
    permission_classes = [AllowAny]

    def delete(self, request, session_id):
        serializer = DeviceTokenQuerySerializer(data=request.query_params)
        serializer.is_valid(raise_exception=True)
        profile = get_object_or_404(UserProfile, device_token=serializer.validated_data['device_token'])
        session = get_object_or_404(TriageSession, pk=session_id, user=profile)

        session.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class SessionMessagesView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, session_id):
        serializer = DeviceTokenQuerySerializer(data=request.query_params)
        serializer.is_valid(raise_exception=True)
        profile = get_object_or_404(UserProfile, device_token=serializer.validated_data['device_token'])
        session = get_object_or_404(TriageSession, pk=session_id, user=profile)

        messages = session.messages.order_by('created_at')
        return Response(TriageMessageSerializer(messages, many=True).data)

    def post(self, request, session_id):
        serializer = PostMessageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        profile = get_object_or_404(UserProfile, device_token=data['device_token'])
        session = get_object_or_404(TriageSession, pk=session_id, user=profile)

        if session.status != 'open':
            return Response({'detail': 'This session is closed.'}, status=status.HTTP_400_BAD_REQUEST)

        user_message = TriageMessage.objects.create(
            session=session, sender='user', message=data['message'], is_verified_source=False,
        )
        reply_text, is_verified = generate_assistant_reply(data['message'])
        assistant_message = TriageMessage.objects.create(
            session=session, sender='assistant', message=reply_text, is_verified_source=is_verified,
        )
        session.save()  # bumps updated_at via auto_now

        return Response(
            TriageMessageSerializer([user_message, assistant_message], many=True).data,
            status=status.HTTP_201_CREATED,
        )


class SymptomEntryView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = SymptomEntryInputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        profile = get_object_or_404(UserProfile, device_token=data['device_token'])

        entry = SymptomEntry.objects.create(user=profile, plain_language_input=data['plain_language_input'])
        if data['tags']:
            tags = [SymptomTag.objects.get_or_create(name=name)[0] for name in data['tags']]
            entry.matched_symptom_tags.set(tags)

        return Response(SymptomEntryOutputSerializer(entry).data, status=status.HTTP_201_CREATED)
