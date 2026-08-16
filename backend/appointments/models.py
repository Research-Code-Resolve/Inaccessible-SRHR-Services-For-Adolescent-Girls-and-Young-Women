from django.db import models

# Create your models here.
import uuid

def generate_reference_code():
    return f"APT-{uuid.uuid4().hex[:6].upper()}"

class Appointment(models.Model):
    STATUS_CHOICES = [
        ('requested', 'Requested'),
        ('confirmed', 'Confirmed'),
        ('cancelled', 'Cancelled'),
    ]

    # ForeignKey to UserProfile (accounts app) and Provider (providers app)
    user = models.ForeignKey('accounts.UserProfile', on_delete=models.CASCADE, related_name='appointments')
    provider = models.ForeignKey('providers.Provider', on_delete=models.CASCADE, related_name='appointments')
    requested_time = models.DateTimeField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='requested')
    reference_code = models.CharField(max_length=15, unique=True, default=generate_reference_code, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Appointment {self.reference_code} - {self.status}"