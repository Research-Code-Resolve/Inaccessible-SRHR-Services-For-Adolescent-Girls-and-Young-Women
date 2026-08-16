from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EmergencyGuideViewSet

router = DefaultRouter()
router.register(r'guides', EmergencyGuideViewSet, basename='emergency-guides')

urlpatterns = [
    path('', include(router.urls)),
]