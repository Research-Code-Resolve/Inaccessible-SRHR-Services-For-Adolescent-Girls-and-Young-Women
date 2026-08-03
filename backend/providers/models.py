from django.db import models


class Provider(models.Model):
    GENDER_CHOICES = [
        ('female', 'Female'),
        ('male', 'Male'),
        ('prefer_not_to_say', 'Prefer not to say'),
    ]
    name = models.CharField(max_length=255)
    gender = models.CharField(max_length=20, choices=GENDER_CHOICES)
    latitude = models.FloatField()
    longitude = models.FloatField()
    is_faith_sensitive = models.BooleanField(default=False)
    languages_spoken = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name
