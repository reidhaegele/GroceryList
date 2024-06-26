from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializers import UserUpdateSerializer

@api_view(['POST'])
@authentication_classes([TokenAuthentication]) # Uses the token authentication to verify the user's identity
@permission_classes([IsAuthenticated]) # Requires the user to be authenticated using a token 
def updateUser(request):
    if request.method == 'POST':
        serializer = UserUpdateSerializer(data=request.data)
        if serializer.is_valid():
            # Get the authenticated user
            user = request.user
            
            # Update user's information if present in request data
            if 'username' in serializer.validated_data:
                user.username = serializer.validated_data.get('username')
            if 'password' in serializer.validated_data:
                user.set_password(serializer.validated_data.get('password'))
            if 'email' in serializer.validated_data:
                user.email = serializer.validated_data.get('email')
            if 'zipcode' in serializer.validated_data:
                user.zipcode = serializer.validated_data.get('zipcode')
            user.save()
            
            return Response({'message': 'User information updated successfully'})
        return Response(serializer.errors, status=400)