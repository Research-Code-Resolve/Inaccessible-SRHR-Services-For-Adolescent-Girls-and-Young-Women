from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, permissions
from rest_framework.authentication import BasicAuthentication
from .models import Providers
from .serializers import ProviderSerializer

class providerViewSet(viewsets.ModelViewSet): #Gives you full CRUD endpoints
    queryset = Providers.objects.all() #Tells the viewset to pull all records from the Providers database
    serializer_class = ProviderSerializer
    authentication_classes = [BasicAuthentication] # configures the viewset to use HTTP Basic Authentication for identifying users making request

    def get_permissions(self):
        if self.action in ['list', 'retrieve']: #checks if the incoming request is a read-only operation
            return [permissions.AllowAny()] # acess is allowed for everyone
        return [permissions.IsAdminUser()] #any other action is restricted only alowed to admin

    def get_queryset(self):
        queryset = Providers.objects.all() #initilalizes a local variable with all Providers object
        gender = self.request.query_params.get('gender') # extract the gender value from the URL query parameters
        faith_sensitive = self.request.query_params.get('faith_sensitive')

        if gender:
            queryset = queryset.filter(gender__iexact=gender) # Checks whether a gender query was passed then filters the query results where the gender field matches the query parameter, ignores the case

        if faith_sensitive:
            is_sensitive = faith_sensitive.lower() == 'true' #converts the incoming string query parameter to lowercase and check if it equals 'true'
            queryset = queryset.filter(faith_sensitive=is_sensitive)

        return queryset # returns the final filtered dataset to Django Rest Framework, which serializes it into JSON and returns it to the client