from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from .models import UserProfile
from .serializers import UserSerializer, UserProfileSerializer

    
@api_view(['GET'])
def login(request):
    if request.method == 'GET':
        # Retrieve data from URL parameters
        username = request.GET.get('username')
        password = request.GET.get('password')

        # If data not found in URL parameters, try retrieving from request body
        if username is None:
            try:
                data = request.data
                username = data.get('username')
                password = data.get('password')
            except AttributeError:
                pass

        if username is None or password is None:
            return Response({'error': 'Username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        # Authenticate user
        user = authenticate(username=username, password=password)
        if user:
            # User authenticated, return success message or token
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            # Authentication failed
            return Response({'error': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        # Method not allowed
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        user_serializer = UserSerializer(data=request.data)
        profile_serializer = UserProfileSerializer(data=request.data)
        if user_serializer.is_valid() and profile_serializer.is_valid():
            user_instance = user_serializer.save()
            profile_instance = profile_serializer.save(user=user_instance)
            return Response({
                "user": user_serializer.data,
                "profile": profile_serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response({
            "user_errors": user_serializer.errors,
            "profile_errors": profile_serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
