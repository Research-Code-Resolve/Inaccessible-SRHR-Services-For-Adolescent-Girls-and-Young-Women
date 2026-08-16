from django.db import models

# Create your models here.

class EmergencyGuide(models.Model):
    SEVERITY_CHOICES = [
        ('seek_immediate_care', 'Seek Immediate Care'),
        ('self_care_ok', 'Self Care OK'),
    ]

    title = models.CharField(max_length=255)
    condition_tag = models.CharField(max_length=100, help_text="e.g., fgm_complication, severe_bleeding")
    steps = models.TextField(help_text="Step-by-step guidance for emergency scenarios")
    severity_level = models.CharField(max_length=30, choices=SEVERITY_CHOICES)
    version = models.IntegerField(default=1)
    last_updated = models.DateTimeField(auto_now=True)

class Meta:
    ordering = ['-version', 'title']

def __str__(self):
    return f"{self.title} (v{self.version})"