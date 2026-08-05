from django.db import models

from accounts.models import UserProfile
from triage.models import TriageSession


class FollowUpTask(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('resolved', 'Resolved'),
        ('dismissed', 'Dismissed'),
    ]

    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='followup_tasks')
    related_session = models.ForeignKey(
        TriageSession, on_delete=models.SET_NULL, null=True, blank=True, related_name='followup_tasks',
    )
    due_at = models.DateTimeField()
    # Generic by default so a shared or family device doesn't reveal why the reminder exists.
    notification_text = models.CharField(max_length=255, default='You have a check-in')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')

    def __str__(self):
        return f'{self.notification_text} ({self.status})'
