from rest_framework import serializers

from .models import CounselorChat, SafeContact


class DeviceTokenQuerySerializer(serializers.Serializer):
    device_token = serializers.CharField()


class OpenChatSerializer(serializers.Serializer):
    device_token = serializers.CharField()
    safe_contact_id = serializers.IntegerField()


class UpdateChatStatusSerializer(serializers.Serializer):
    device_token = serializers.CharField()
    status = serializers.ChoiceField(choices=CounselorChat.STATUS_CHOICES)


class SafeContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = SafeContact
        fields = ['id', 'name', 'role', 'is_verified']


class CounselorChatSerializer(serializers.ModelSerializer):
    safe_contact = SafeContactSerializer(read_only=True)

    class Meta:
        model = CounselorChat
        fields = ['id', 'safe_contact', 'status', 'created_at']
