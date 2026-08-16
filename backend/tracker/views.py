from django.shortcuts import render
from datetime import timedelta
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import CycleEntry, PregnancyEntry
from .serializers import CycleEntrySerializer, PregnancyEntrySerializer

# Create your views here.

class CycleEntryViewSet(viewsets.ModelViewSet):
    """
    Handles:
    POST /api/tracker/cycles/
    GET /api/tracker/cycles/
    DELETE /api/tracker/cycles/{id}/
    GET /api/tracker/cycles/predictions/
    """
    serializer_class = CycleEntrySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return CycleEntry.objects.filter(user=self.request.user.userprofile)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user.userprofile)

    @action(detail=False, methods=['get'], url_path='predictions')
    def predictions(self, request):
        entries = self.get_queryset().order_by('start_date')
        if not entries.exists():
            return Response(
                {"detail": "No cycle data logged to calculate predictions."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Calculate average cycle length from logged historical entries
        cycle_lengths = []
        for i in range(1, len(entries)):
            diff = (entries[i].start_date - entries[i-1].start_date).days
            if 21 <= diff <= 35:  # Standard realistic cycle bounds
                cycle_lengths.append(diff)

        avg_length = sum(cycle_lengths) // len(cycle_lengths) if cycle_lengths else 28

        last_start = entries.last().start_date
        next_period_start = last_start + timedelta(days=avg_length)

        # Estimate ovulation (~14 days before next predicted period)
        estimated_ovulation = next_period_start - timedelta(days=14)
        fertile_window_start = estimated_ovulation - timedelta(days=5)
        fertile_window_end = estimated_ovulation + timedelta(days=1)

        return Response({
            "average_cycle_length_days": avg_length,
            "last_period_start": last_start,
            "next_estimated_period_start": next_period_start,
            "estimated_fertile_window": {
                "start": fertile_window_start,
                "end": fertile_window_end,
                "ovulation_day": estimated_ovulation
            }
        })


class PregnancyEntryViewSet(viewsets.ModelViewSet):
    """
    Handles:
    POST /api/tracker/pregnancy/
    GET /api/tracker/pregnancy/
    """
    serializer_class = PregnancyEntrySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return PregnancyEntry.objects.filter(user=self.request.user.userprofile)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user.userprofile)