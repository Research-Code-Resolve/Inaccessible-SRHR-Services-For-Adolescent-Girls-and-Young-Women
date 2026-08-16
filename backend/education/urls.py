from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContentItemViewSet, BookmarkViewSet, ReadingProgressViewSet

router = DefaultRouter()
router.register(r'content', ContentItemViewSet, basename='content')
router.register(r'bookmarks', BookmarkViewSet, basename='bookmarks')
router.register(r'progress', ReadingProgressViewSet, basename='progress')

urlpatterns = [
    path('', include(router.urls)),
]