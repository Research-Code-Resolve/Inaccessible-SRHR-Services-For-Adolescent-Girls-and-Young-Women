from django.db import models


class UserProfile(models.Model):
    ACCOUNT_TYPE_CHOICES = [
        ('guest', 'Guest'),
        ('registered', 'Registered'),
    ]

    device_token = models.CharField(max_length=64, unique=True, db_index=True)
    account_type = models.CharField(max_length=20, choices=ACCOUNT_TYPE_CHOICES, default='guest')
    username = models.CharField(max_length=150, unique=True, null=True, blank=True)
    passphrase_hash = models.CharField(max_length=255, null=True, blank=True)
    recovery_code_hash = models.CharField(max_length=255, null=True, blank=True)
    preferred_language = models.CharField(max_length=10, default='en')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username or self.device_token
