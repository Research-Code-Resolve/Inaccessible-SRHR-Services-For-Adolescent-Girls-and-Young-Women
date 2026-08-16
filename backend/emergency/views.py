from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import EmergencyGuide
from .serializers import EmergencyGuideSerializer

# Create your views here.

class EmergencyGuideViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Handles:
    GET /api/emergency/guides/ (List all guides)
    GET /api/emergency/guides/{id}/ (Retrieve single guide)
    GET /api/emergency/guides/sync/?since_version= (Bulk sync for offline caching)
    """
    queryset = EmergencyGuide.objects.all()
    serializer_class = EmergencyGuideSerializer
    permission_classes = [permissions.AllowAny]

    @action(detail=False, methods=['get'], url_path='sync')
    def sync(self, request):
        since_version = request.query_params.get('since_version')
        queryset = self.get_queryset()

        if since_version is not None:
            try:
                since_version = int(since_version)
                queryset = queryset.filter(version__gt=since_version)
            except ValueError:
                pass

        serializer = self.get_serializer(queryset, many=True)
        latest_version = EmergencyGuide.objects.order_by('-version').values_list('version', flat=True).first() or 0

        return Response({
            "latest_version": latest_version,
            "updated_guides": serializer.data
        })