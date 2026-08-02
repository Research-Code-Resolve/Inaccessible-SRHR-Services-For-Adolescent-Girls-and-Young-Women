from rest_framework import serializers
from .models import Provider


class ProviderSerializer(serializers.ModelSerializer):
    # Populated per-request when the caller passes lat/lng; None otherwise,
    # since distance is relative to the searcher, not a stored attribute.
    distance_km = serializers.SerializerMethodField()

    class Meta:
        model = Provider
        fields = [
            'id',
            'name',
            'gender',
            'latitude',
            'longitude',
            'is_faith_sensitive',
            'languages_spoken',
            'distance_km',
        ]

    def get_distance_km(self, obj):
        distance = getattr(obj, 'distance_km', None)
        return round(distance, 2) if distance is not None else None
