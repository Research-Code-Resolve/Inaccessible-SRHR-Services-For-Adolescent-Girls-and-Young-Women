import math

from rest_framework import viewsets, permissions
from rest_framework.authentication import BasicAuthentication
from rest_framework.response import Response

from .models import Provider
from .serializers import ProviderSerializer

EARTH_RADIUS_KM = 6371.0


def haversine_km(lat1, lng1, lat2, lng2):
    lat1, lng1, lat2, lng2 = map(math.radians, [lat1, lng1, lat2, lng2])
    dlat = lat2 - lat1
    dlng = lng2 - lng1
    a = math.sin(dlat / 2) ** 2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlng / 2) ** 2
    return 2 * EARTH_RADIUS_KM * math.asin(math.sqrt(a))


class ProviderViewSet(viewsets.ModelViewSet):  # Gives you full CRUD endpoints
    queryset = Provider.objects.all()
    serializer_class = ProviderSerializer
    authentication_classes = [BasicAuthentication]  # HTTP Basic Auth for identifying request-makers

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:  # read-only operations
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]  # writes restricted to admins

    def get_queryset(self):
        queryset = Provider.objects.all()
        gender = self.request.query_params.get('gender')
        faith_sensitive = self.request.query_params.get('faith_sensitive')

        if gender:
            queryset = queryset.filter(gender__iexact=gender)

        if faith_sensitive:
            is_sensitive = faith_sensitive.lower() == 'true'
            queryset = queryset.filter(is_faith_sensitive=is_sensitive)

        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        providers = list(queryset)

        lat = request.query_params.get('lat')
        lng = request.query_params.get('lng')
        max_distance_km = request.query_params.get('max_distance_km')

        if lat is not None and lng is not None:
            try:
                lat, lng = float(lat), float(lng)
            except ValueError:
                return Response({'detail': 'lat and lng must be numbers.'}, status=400)

            for provider in providers:
                provider.distance_km = haversine_km(lat, lng, provider.latitude, provider.longitude)

            if max_distance_km is not None:
                try:
                    max_distance_km = float(max_distance_km)
                except ValueError:
                    return Response({'detail': 'max_distance_km must be a number.'}, status=400)
                providers = [p for p in providers if p.distance_km <= max_distance_km]

            providers.sort(key=lambda p: p.distance_km)

        page = self.paginate_queryset(providers)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(providers, many=True)
        return Response(serializer.data)
