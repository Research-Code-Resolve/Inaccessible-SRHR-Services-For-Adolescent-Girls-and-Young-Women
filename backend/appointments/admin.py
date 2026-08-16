from django.contrib import admin
from .models import Appointment
# Register your models here.

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('reference_code', 'user', 'provider', 'requested_time', 'status', 'created_at')
    list_filter = ('status', 'requested_time')
    search_fields = ('reference_code',)
    readonly_fields = ('reference_code', 'created_at')