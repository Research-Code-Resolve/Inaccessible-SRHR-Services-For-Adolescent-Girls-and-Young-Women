from django.db import models

from accounts.models import UserProfile


class SafeContact(models.Model):
    # Managed via Django admin only, by design: a small, moderator-curated
    # list of trusted adults, not a public directory to browse or filter.
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.name} ({self.role})'


class CounselorChat(models.Model):
    STATUS_CHOICES = [
        ('open', 'Open'),
        ('closed', 'Closed'),
    ]

    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='counselor_chats')
    safe_contact = models.ForeignKey(SafeContact, on_delete=models.PROTECT, related_name='chats')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Chat {self.pk} with {self.safe_contact.name} ({self.status})'
