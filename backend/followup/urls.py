from django.urls import path

from . import views

urlpatterns = [
    path('tasks/', views.TaskListView.as_view(), name='followup-tasks'),
    path('tasks/<int:task_id>/', views.TaskDetailView.as_view(), name='followup-task-detail'),
]
