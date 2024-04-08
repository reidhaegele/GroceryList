from rest_framework import generics
from .models import GroceryList
from .serializers import GroceryListSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token


class GroceryListView(generics.ListCreateAPIView):
    queryset = GroceryList.objects.all()
    serializer_class = GroceryListSerializer
    
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
            userToken = {'username': username, 'firstname': user.first_name, 'lastname': user.last_name, 'email': user.email}
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK, data=userToken)
        else:
            # Authentication failed
            return Response({'error': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        # Method not allowed
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)




@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        # Retrieve data from URL parameters
        username = request.GET.get('username')
        password = request.GET.get('password')
        first_name = request.GET.get('first_name')
        last_name = request.GET.get('last_name')
        email = request.GET.get('email')

        # If data not found in URL parameters, try retrieving from request body
        if username is None:
            data = request.data
            username = data.get('username')
            password = data.get('password')
            first_name = data.get('first_name')
            last_name = data.get('last_name')
            email = data.get('email')

        # Check if required data is provided
        if username is None or password is None:
            return Response({'error': 'Username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        # Proceed with registration logic...
        # (Here you can implement the user registration logic using the retrieved data)

        return Response({'success': 'User registered successfully.'}, status=status.HTTP_201_CREATED)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
