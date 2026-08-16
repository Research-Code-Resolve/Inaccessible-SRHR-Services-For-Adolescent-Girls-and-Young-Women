from django.contrib import admin
from .models import UserProfile


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('username', 'account_type', 'device_token', 'preferred_language', 'created_at')
    list_filter = ('account_type',)
    search_fields = ('username', 'device_token')
    readonly_fields = ('passphrase_hash', 'recovery_code_hash', 'created_at')
