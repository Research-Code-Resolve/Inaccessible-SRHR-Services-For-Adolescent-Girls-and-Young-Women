from django.contrib import admin

from .models import SymptomEntry, SymptomTag, TriageMessage, TriageSession


@admin.register(SymptomTag)
class SymptomTagAdmin(admin.ModelAdmin):
    search_fields = ('name',)


@admin.register(SymptomEntry)
class SymptomEntryAdmin(admin.ModelAdmin):
    list_display = ('user', 'plain_language_input', 'created_at')
    search_fields = ('plain_language_input',)


class TriageMessageInline(admin.TabularInline):
    model = TriageMessage
    extra = 0
    readonly_fields = ('sender', 'message', 'is_verified_source', 'created_at')


@admin.register(TriageSession)
class TriageSessionAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'status', 'created_at', 'updated_at')
    list_filter = ('status',)
    inlines = [TriageMessageInline]
