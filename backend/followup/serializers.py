from rest_framework import serializers

from .models import FollowUpTask


class DeviceTokenQuerySerializer(serializers.Serializer):
    device_token = serializers.CharField()


class UpdateTaskStatusSerializer(serializers.Serializer):
    device_token = serializers.CharField()
    status = serializers.ChoiceField(choices=FollowUpTask.STATUS_CHOICES)


class FollowUpTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = FollowUpTask
        fields = ['id', 'related_session', 'due_at', 'notification_text', 'status']
