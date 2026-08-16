from django.db import models

from accounts.models import UserProfile


class SymptomTag(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class SymptomEntry(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='symptom_entries')
    plain_language_input = models.TextField()
    matched_symptom_tags = models.ManyToManyField(SymptomTag, blank=True, related_name='symptom_entries')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.plain_language_input[:50]


class TriageSession(models.Model):
    STATUS_CHOICES = [
        ('open', 'Open'),
        ('resolved', 'Resolved'),
    ]

    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='triage_sessions')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Session {self.pk} ({self.status})'


class TriageMessage(models.Model):
    SENDER_CHOICES = [
        ('user', 'User'),
        ('assistant', 'Assistant'),
    ]

    session = models.ForeignKey(TriageSession, on_delete=models.CASCADE, related_name='messages')
    sender = models.CharField(max_length=20, choices=SENDER_CHOICES)
    message = models.TextField()
    is_verified_source = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.sender}: {self.message[:50]}'
