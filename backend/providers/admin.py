from django.contrib import admin
from .models import Provider


@admin.register(Provider)
class ProviderAdmin(admin.ModelAdmin):

    list_display = ('name', 'gender', 'latitude', 'longitude', 'is_faith_sensitive', 'languages_spoken')

    # Optional: Add quick filter options on the right sidebar
    list_filter = ('gender', 'is_faith_sensitive')

    # Optional: Add a search bar for provider names
    search_fields = ('name',)
