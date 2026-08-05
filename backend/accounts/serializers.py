from rest_framework import serializers


class SessionSerializer(serializers.Serializer):
    device_token = serializers.CharField(required=False, allow_blank=False)
    preferred_language = serializers.CharField(required=False, default='en')


class SignupSerializer(serializers.Serializer):
    device_token = serializers.CharField()
    username = serializers.CharField(max_length=150)
    passphrase = serializers.CharField(min_length=8)


class LoginSerializer(serializers.Serializer):
    device_token = serializers.CharField()
    username = serializers.CharField()
    passphrase = serializers.CharField()


class RecoverSerializer(serializers.Serializer):
    username = serializers.CharField()
    recovery_code = serializers.CharField()
    new_passphrase = serializers.CharField(min_length=8)


class ProfileUpdateSerializer(serializers.Serializer):
    device_token = serializers.CharField()
    preferred_language = serializers.CharField(required=False)
    username = serializers.CharField(max_length=150, required=False)
    passphrase = serializers.CharField(min_length=8, required=False)


class DeleteRequestSerializer(serializers.Serializer):
    device_token = serializers.CharField()
    passphrase = serializers.CharField()
