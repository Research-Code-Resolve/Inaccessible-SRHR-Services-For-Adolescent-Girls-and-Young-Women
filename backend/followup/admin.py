from django.contrib import admin

from .models import FollowUpTask


@admin.register(FollowUpTask)
class FollowUpTaskAdmin(admin.ModelAdmin):
    list_display = ('user', 'notification_text', 'due_at', 'status', 'related_session')
    list_filter = ('status',)
