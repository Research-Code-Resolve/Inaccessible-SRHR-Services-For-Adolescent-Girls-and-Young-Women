from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CycleEntryViewSet, PregnancyEntryViewSet

router = DefaultRouter()
router.register(r'cycles', CycleEntryViewSet, basename='tracker-cycles')
router.register(r'pregnancy', PregnancyEntryViewSet, basename='tracker-pregnancy')

urlpatterns = [
    path('', include(router.urls)),
]