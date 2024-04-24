from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from .models import UserProfile
from .serializers import UserSerializer, UserProfileSerializer
from django.contrib.auth.hashers import make_password
import json

    
@api_view(['POST'])
def login(request):
    if request.method == 'POST':
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

        if username is None or password is None or username == '' or password == '':
            return Response({'error': 'Username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        # Authenticate user
        user = authenticate(username=username, password=password)
        if user:
            # User authenticated, return success message and token
            token, created = Token.objects.get_or_create(user=user)
            return Response({'message': 'Login successful', 'token': token.key}, status=status.HTTP_200_OK)
        else:
            # Authentication failed
            return Response({'error': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        # Method not allowed
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        user_data = request.data.copy()  # Make a copy of the data to avoid modifying the original
        password = user_data.pop('password', None)  # Remove the password from the data

        # Check if password is provided
        if not password:
            return Response({'error': 'Password is required.'}, status=status.HTTP_400_BAD_REQUEST)

        # Hash the password
        hashed_password = make_password(password)
        user_data['password'] = hashed_password  # Replace the plain password with the hashed one

        user_serializer = UserSerializer(data=user_data)
        profile_serializer = UserProfileSerializer(data=user_data)

        user_serializer_is_valid = user_serializer.is_valid()
        profile_serializer_is_valid = profile_serializer.is_valid()

        if user_serializer_is_valid and profile_serializer_is_valid:
            user_instance = user_serializer.save()
            profile_instance = profile_serializer.save(user=user_instance)
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        else:
            errors = {}
            if not user_serializer_is_valid:
                errors['user_errors'] = user_serializer.errors
            if not profile_serializer_is_valid:
                errors['profile_errors'] = profile_serializer.errors
            return Response({"message": "User creation failed", "error": errors}, status=status.HTTP_400_BAD_REQUEST)




@api_view(['GET'])
def accountInfo(request):
    if request.method == 'GET':
        token = request.headers.get('Authorization')
        if token: 
            token = token.split(' ')[1]
        else: 
            return Response({'error': 'Authorization token not found.'}, status=status.HTTP_400_BAD_REQUEST)
        username = Token.objects.get(key=token).user.username
        user = (
        User.objects.filter(username=username)
        .values(
            "username",
            "email",
            "first_name",
            "last_name",
            "id",
        )
        .first()
        )
        data = json.dumps(user)
        if user:
            return Response(data=data, status=status.HTTP_201_CREATED)
        else:
            return Response({'error': 'Failed to register user.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)        