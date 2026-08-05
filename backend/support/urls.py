from django.urls import path

from . import views

urlpatterns = [
    path('chats/', views.ChatListCreateView.as_view(), name='support-chats'),
    path('chats/<int:chat_id>/', views.ChatDetailView.as_view(), name='support-chat-detail'),
]
