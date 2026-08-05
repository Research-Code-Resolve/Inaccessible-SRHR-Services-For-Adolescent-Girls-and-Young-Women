from django.urls import path

from . import views

urlpatterns = [
    path('session/', views.SessionView.as_view(), name='accounts-session'),
    path('signup/', views.SignupView.as_view(), name='accounts-signup'),
    path('login/', views.LoginView.as_view(), name='accounts-login'),
    path('recover/', views.RecoverView.as_view(), name='accounts-recover'),
    path('profile/', views.ProfileView.as_view(), name='accounts-profile'),
    path('delete-request/', views.DeleteRequestView.as_view(), name='accounts-delete-request'),
]
