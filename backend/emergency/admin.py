from django.contrib import admin
from .models import EmergencyGuide

# Register your models here.
@admin.register(EmergencyGuide)
class EmergencyGuideAdmin(admin.ModelAdmin):
    list_display = ('title', 'condition_tag', 'severity_level', 'version', 'last_updated')
    list_filter = ('severity_level', 'version')
    search_fields = ('title', 'condition_tag', 'steps')
    readonly_fields = ('last_updated',)