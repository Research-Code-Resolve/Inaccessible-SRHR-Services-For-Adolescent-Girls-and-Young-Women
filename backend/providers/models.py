from django.db import models

# Create your models here.
class Providers(models.Model):
    GENDER_CHOICES = [
        ('Female','Female'),
        ('Male','Male'),
        ('Other', 'Other'),
    ]
    name = models.CharField(max_length=255)
    gender = models.CharField(max_length=20, choices=GENDER_CHOICES)
    location = models.CharField(max_length=255)
    distance_km = models.FloatField(default=0.0)
    faith_sensitive = models.BooleanField(default=False)
    rating = models.FloatField(default=0.0)

    def __str__(self):
        return self.name

