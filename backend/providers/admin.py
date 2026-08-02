from django.contrib import admin
from .models import Providers
# Register your models here.

@admin.register(Providers)
class ProvidersAdmin(admin.ModelAdmin):
    
    list_display = ('name', 'gender', 'location', 'distance_km', 'faith_sensitive', 'rating')
    
    # Optional: Add quick filter options on the right sidebar
    list_filter = ('gender', 'faith_sensitive')
    
    # Optional: Add a search bar for provider names and locations
    search_fields = ('name', 'location')