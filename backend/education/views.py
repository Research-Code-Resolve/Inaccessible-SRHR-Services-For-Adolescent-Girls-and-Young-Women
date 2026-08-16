from rest_framework import viewsets, permissions
from .models import ContentItem, Bookmark, ReadingProgress
from .serializers import ContentItemSerializer, BookmarkSerializer, ReadingProgressSerializer

class ContentItemViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Handles:
    GET /api/education/content/?category=&language=
    GET /api/education/content/{id}/
    """
    queryset = ContentItem.objects.all()
    serializer_class = ContentItemSerializer
    permission_classes = [permissions.AllowAny] # No authentication required[cite: 1].

    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get('category')
        language = self.request.query_params.get('language')
        
        if category:
            queryset = queryset.filter(category=category)
        if language:
            queryset = queryset.filter(language=language)
            
        return queryset

class BookmarkViewSet(viewsets.ModelViewSet):
    """
    Handles:
    POST /api/education/bookmarks/
    GET /api/education/bookmarks/
    DELETE /api/education/bookmarks/{id}/
    """
    serializer_class = BookmarkSerializer
    permission_classes = [permissions.IsAuthenticated] # Requires a registered account[cite: 1].

    def get_queryset(self):
        # Only return bookmarks for the current user
        return Bookmark.objects.filter(user=self.request.user.userprofile)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user.userprofile)

class ReadingProgressViewSet(viewsets.ModelViewSet):
    """
    Handles:
    POST /api/education/progress/
    GET /api/education/progress/
    """
    serializer_class = ReadingProgressSerializer
    permission_classes = [permissions.IsAuthenticated] # Requires a registered account[cite: 1].

    def get_queryset(self):
        # Only return reading progress for the current user
        return ReadingProgress.objects.filter(user=self.request.user.userprofile)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user.userprofile)