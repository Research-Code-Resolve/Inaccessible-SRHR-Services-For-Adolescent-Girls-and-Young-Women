from django.db import models
from datetime import timedelta, date

# Create your models here.

class CycleEntry(models.Model):
    FLOW_CHOICES = [
        ('light', 'Light'),
        ('medium', 'Medium'),
        ('heavy', 'Heavy'),
    ]

    user = models.ForeignKey('accounts.UserProfile', on_delete=models.CASCADE, related_name='cycle_entries')
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    flow_level = models.CharField(max_length=10, choices=FLOW_CHOICES)
    symptoms = models.CharField(max_length=255, blank=True, help_text="Comma separated tags")
    mood = models.CharField(max_length=50, blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-start_date']

    def __str__(self):
        return f"Cycle Entry ({self.start_date}) - {self.user}"


class PregnancyEntry(models.Model):
    user = models.ForeignKey('accounts.UserProfile', on_delete=models.CASCADE, related_name='pregnancy_entries')
    start_date = models.DateField()
    due_date = models.DateField(blank=True, null=True)
    week_number = models.IntegerField(blank=True, null=True)
    journal_note = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def save(self, *args, **kwargs):
        if self.start_date:
            # Auto-compute due date (280 days standard gestation)
            if not self.due_date:
                self.due_date = self.start_date + timedelta(days=280)
            # Auto-compute week number based on today's date
            days_diff = (date.today() - self.start_date).days
            self.week_number = max(1, (days_diff // 7) + 1)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Pregnancy Journal Week {self.week_number} - {self.user}"