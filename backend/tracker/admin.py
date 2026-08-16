from django.contrib import admin
from .models import CycleEntry, PregnancyEntry

# Register your models here.


@admin.register(CycleEntry)
class CycleEntryAdmin(admin.ModelAdmin):
    list_display = ('user', 'start_date', 'end_date', 'flow_level', 'mood', 'created_at')
    list_filter = ('flow_level', 'start_date')
    search_fields = ('symptoms', 'notes')

@admin.register(PregnancyEntry)
class PregnancyEntryAdmin(admin.ModelAdmin):
    list_display = ('user', 'start_date', 'due_date', 'week_number', 'created_at')
    list_filter = ('start_date', 'due_date')
    readonly_fields = ('due_date', 'week_number', 'created_at')