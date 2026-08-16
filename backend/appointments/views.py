from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Appointment
from .serializers import AppointmentSerializer

# Create your views here.

class AppointmentViewSet(viewsets.ModelViewSet):
    """
    Handles:
    POST /api/appointments/ (Create booking request)
    GET /api/appointments/ (List user's appointments)
    PATCH /api/appointments/{id}/ (Update status, e.g., cancel)
    """
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Restrict appointments to only those belonging to the logged-in user
        return Appointment.objects.filter(user=self.request.user.userprofile)

    def perform_create(self, serializer):
        # Automatically attach the user's UserProfile during creation
        serializer.save(user=self.request.user.userprofile)