from rest_framework import serializers
from .models import EmergencyGuide

class EmergencyGuideSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmergencyGuide
        fields = ['id', 'title', 'condition_tag', 'steps', 'severity_level', 'version', 'last_updated']