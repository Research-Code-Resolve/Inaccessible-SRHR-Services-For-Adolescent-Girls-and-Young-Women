from rest_framework import serializers
from .models import Appointment

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['id', 'user', 'provider', 'requested_time', 'status', 'reference_code', 'created_at']
        read_only_fields = ['id', 'user', 'reference_code', 'created_at']