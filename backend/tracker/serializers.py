from rest_framework import serializers
from .models import CycleEntry, PregnancyEntry

class CycleEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = CycleEntry
        fields = ['id', 'user', 'start_date', 'end_date', 'flow_level', 'symptoms', 'mood', 'notes', 'created_at']
        read_only_fields = ['id', 'user', 'created_at']

class PregnancyEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = PregnancyEntry
        fields = ['id', 'user', 'start_date', 'due_date', 'week_number', 'journal_note', 'created_at']
        read_only_fields = ['id', 'user', 'due_date', 'week_number', 'created_at']