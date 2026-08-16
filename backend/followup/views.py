from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.models import UserProfile

from .models import FollowUpTask
from .serializers import DeviceTokenQuerySerializer, FollowUpTaskSerializer, UpdateTaskStatusSerializer


class TaskListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        serializer = DeviceTokenQuerySerializer(data=request.query_params)
        serializer.is_valid(raise_exception=True)
        profile = get_object_or_404(UserProfile, device_token=serializer.validated_data['device_token'])

        tasks = FollowUpTask.objects.filter(user=profile, status='pending').order_by('due_at')
        return Response(FollowUpTaskSerializer(tasks, many=True).data)


class TaskDetailView(APIView):
    permission_classes = [AllowAny]

    def patch(self, request, task_id):
        serializer = UpdateTaskStatusSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        profile = get_object_or_404(UserProfile, device_token=data['device_token'])
        task = get_object_or_404(FollowUpTask, pk=task_id, user=profile)

        task.status = data['status']
        task.save()
        return Response(FollowUpTaskSerializer(task).data)
