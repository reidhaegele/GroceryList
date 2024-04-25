import json
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .models import List, Item
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.
@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def createList(request):
    if request.method == 'POST':
        user = request.user
        listName = request.data.get("listName")

        if not listName:
            return Response({'error': 'List name is required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        Userlist = List.objects.create(listName=listName)
        Userlist.items.set([])
        Userlist.users.add(user)
        Userlist.save()
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

@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def viewList(request):
    if request.method == 'GET':
        user = request.user
        listName = request.data.get('listName')  # listName is passed as json
        if not listName:
            return Response({'error': 'List name is required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user_list = List.objects.get(users=user, listName=listName)
            serialized_data = {
                'listId': user_list.listId,
                'listName': user_list.listName,
                'items': user_list.items
            }
            return Response(data=serialized_data, status=status.HTTP_200_OK)
        except List.DoesNotExist:
            return Response({'error': 'List does not exist.'}, status=status.HTTP_404_NOT_FOUND)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def seeLists(request):
    if request.method == 'GET':
        user = request.user
        lists = List.objects.filter(users=user)
        serialized_lists = []

        for user_list in lists:
            serialized_list = {
                'listId':user_list.listId,
                'listName' : user_list.listName,
            }
            serialized_lists.append(serialized_list)
        
        return Response(serialized_lists, status=status.HTTP_200_OK)

    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def joinList(request):
    if request.method == 'POST':
        user = request.user
        listId = request.data.get("listID")  # Assuming the key is "listId" in the request data

        if not listId:
            return Response({'error': 'List ID is required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            list_to_join = List.objects.get(pk=listId)
        except List.DoesNotExist:
            return Response({'error': 'List does not exist.'}, status=status.HTTP_404_NOT_FOUND)
        
        # Add the user to the list
        list_to_join.users.add(user)
        
        return Response(
            {"success": "You have joined the list."},
            status=status.HTTP_200_OK
        )
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


