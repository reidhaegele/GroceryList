from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import List
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from django.shortcuts import render
from django.contrib.auth.models import User


# Create your views here.
@api_view(["GET"])
def createList(request):
    if request.method == "GET":
        username = request.data.get("user")
        # Used for Testing
        # user = User.objects.create_user(username="name", email="email@mail.com", password="Pass12345")
        user = User.objects.get(username=username)
        listName = request.data.get("listName")
        print(user, listName)
        if not user or not listName:
            return Response(
                {"error": "User and listName are required."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        Userlist = List(user=user, listName=listName, items=[])
        if Userlist:
            return Response(
                {"success": "List successfully made."}, status=status.HTTP_201_CREATED
            )
        else:
            return Response(
                {"error": "Failed to make List."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
