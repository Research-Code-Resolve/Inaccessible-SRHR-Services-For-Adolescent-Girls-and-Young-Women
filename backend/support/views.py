from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.models import UserProfile

from .models import CounselorChat, SafeContact
from .serializers import (
    CounselorChatSerializer,
    DeviceTokenQuerySerializer,
    OpenChatSerializer,
    UpdateChatStatusSerializer,
)


class ChatListCreateView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        serializer = DeviceTokenQuerySerializer(data=request.query_params)
        serializer.is_valid(raise_exception=True)
        profile = get_object_or_404(UserProfile, device_token=serializer.validated_data['device_token'])

        chats = CounselorChat.objects.filter(user=profile).order_by('-created_at')
        return Response(CounselorChatSerializer(chats, many=True).data)

    def post(self, request):
        serializer = OpenChatSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        profile = get_object_or_404(UserProfile, device_token=data['device_token'])
        safe_contact = get_object_or_404(SafeContact, pk=data['safe_contact_id'])

        chat = CounselorChat.objects.create(user=profile, safe_contact=safe_contact)
        return Response(CounselorChatSerializer(chat).data, status=status.HTTP_201_CREATED)


class ChatDetailView(APIView):
    permission_classes = [AllowAny]

    def patch(self, request, chat_id):
        serializer = UpdateChatStatusSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        profile = get_object_or_404(UserProfile, device_token=data['device_token'])
        chat = get_object_or_404(CounselorChat, pk=chat_id, user=profile)

        chat.status = data['status']
        chat.save()
        return Response(CounselorChatSerializer(chat).data)
