from django.contrib import admin

from .models import CounselorChat, SafeContact


@admin.register(SafeContact)
class SafeContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'is_verified')
    list_filter = ('is_verified',)
    search_fields = ('name', 'role')


@admin.register(CounselorChat)
class CounselorChatAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'safe_contact', 'status', 'created_at')
    list_filter = ('status',)
