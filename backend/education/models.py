from django.db import models

class ContentItem(models.Model):
    CATEGORY_CHOICES = [
        ('srhr_basics', 'SRHR Basics'),
        ('myths_vs_facts', 'Myths vs Facts'),
        ('emergency_care', 'Emergency Care'),
        ('pregnancy', 'Pregnancy'),
        ('family_planning', 'Family Planning'),
    ]

    title = models.CharField(max_length=255)
    body = models.TextField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    language = models.CharField(max_length=10)
    is_verified = models.BooleanField(default=False)
    reviewed_by = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.title

class ContentTag(models.Model):
    name = models.CharField(max_length=100)
    content_items = models.ManyToManyField(ContentItem, related_name='tags')

    def __str__(self):
        return self.name

class Bookmark(models.Model):
    # Assuming 'accounts.UserProfile' is the model your collaborator is building
    user = models.ForeignKey('accounts.UserProfile', on_delete=models.CASCADE, related_name='bookmarks')
    content_item = models.ForeignKey(ContentItem, on_delete=models.CASCADE, related_name='bookmarked_by')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'content_item')

class ReadingProgress(models.Model):
    STATUS_CHOICES = [
        ('not_started', 'Not Started'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
    ]

    user = models.ForeignKey('accounts.UserProfile', on_delete=models.CASCADE, related_name='reading_progress')
    content_item = models.ForeignKey(ContentItem, on_delete=models.CASCADE, related_name='progress_trackers')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='not_started')
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('user', 'content_item')