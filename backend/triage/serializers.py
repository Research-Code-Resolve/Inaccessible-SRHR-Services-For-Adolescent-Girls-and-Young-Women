from rest_framework import serializers

from .models import SymptomEntry, TriageMessage, TriageSession


class DeviceTokenQuerySerializer(serializers.Serializer):
    device_token = serializers.CharField()


class OpenSessionSerializer(serializers.Serializer):
    device_token = serializers.CharField()


class PostMessageSerializer(serializers.Serializer):
    device_token = serializers.CharField()
    message = serializers.CharField()


class SymptomEntryInputSerializer(serializers.Serializer):
    device_token = serializers.CharField()
    plain_language_input = serializers.CharField()
    tags = serializers.ListField(child=serializers.CharField(max_length=100), required=False, default=list)


class TriageSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TriageSession
        fields = ['id', 'status', 'created_at', 'updated_at']


class TriageMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TriageMessage
        fields = ['id', 'sender', 'message', 'is_verified_source', 'created_at']


class SymptomEntryOutputSerializer(serializers.ModelSerializer):
    matched_symptom_tags = serializers.SlugRelatedField(slug_field='name', many=True, read_only=True)

    class Meta:
        model = SymptomEntry
        fields = ['id', 'plain_language_input', 'matched_symptom_tags', 'created_at']
