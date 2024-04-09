from rest_framework import generics
from .models import GroceryList
from .serializers import GroceryListSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
import json

class GroceryListView(generics.ListCreateAPIView):
    queryset = GroceryList.objects.all()
    serializer_class = GroceryListSerializer


@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        if not username or not password:
            return Response({'error': 'Username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists.'}, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(username=username, password=password)
        if user:
            return Response({'success': 'User registered successfully.'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'error': 'Failed to register user.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['GET'])
def accountInfo(request):
    if request.method == 'GET':
        username = request.data.get('username')
        if not username:
            return Response({'error': 'Username are required.'}, status=status.HTTP_400_BAD_REQUEST)
        if not User.objects.get(username=username):
            return Response({'error': 'User doesnt exists.'}, status=status.HTTP_400_BAD_REQUEST)
        
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