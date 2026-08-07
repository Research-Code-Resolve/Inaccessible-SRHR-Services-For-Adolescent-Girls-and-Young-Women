from rest_framework import serializers
from .models import ContentItem, ContentTag, Bookmark, ReadingProgress

class ContentTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentTag
        fields = ['id', 'name']

class ContentItemSerializer(serializers.ModelSerializer):
    tags = ContentTagSerializer(many=True, read_only=True)

    class Meta:
        model = ContentItem
        fields = ['id', 'title', 'body', 'category', 'language', 'is_verified', 'reviewed_by', 'tags']

class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = ['id', 'user', 'content_item', 'created_at']
        read_only_fields = ['user', 'created_at']

class ReadingProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReadingProgress
        fields = ['id', 'user', 'content_item', 'status', 'updated_at']
        read_only_fields = ['user', 'updated_at']