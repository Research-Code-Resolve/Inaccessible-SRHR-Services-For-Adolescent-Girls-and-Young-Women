from django.contrib import admin
from .models import ContentItem, ContentTag, Bookmark, ReadingProgress
# Register your models here.

@admin.register(ContentItem)
class ContentItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'language', 'is_verified', 'reviewed_by')
    list_filter = ('category', 'language', 'is_verified')
    search_fields = ('title', 'body')

@admin.register(ContentTag)
class ContentTagAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(Bookmark)
class BookmarkAdmin(admin.ModelAdmin):
    list_display = ('user', 'content_item', 'created_at')
    list_filter = ('created_at',)

@admin.register(ReadingProgress)
class ReadingProgressAdmin(admin.ModelAdmin):
    list_display = ('user', 'content_item', 'status', 'updated_at')
    list_filter = ('status', 'updated_at')