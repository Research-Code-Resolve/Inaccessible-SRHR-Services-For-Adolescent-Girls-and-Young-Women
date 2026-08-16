from django.urls import path

from . import views

urlpatterns = [
    path('sessions/', views.SessionOpenView.as_view(), name='triage-session-open'),
    path('sessions/<int:session_id>/', views.SessionDetailView.as_view(), name='triage-session-detail'),
    path('sessions/<int:session_id>/messages/', views.SessionMessagesView.as_view(), name='triage-session-messages'),
    path('symptoms/', views.SymptomEntryView.as_view(), name='triage-symptoms'),
]
