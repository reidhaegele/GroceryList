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
def addItem(request):
    if request.method == 'POST':
        user = request.user
        listId = request.data.get("listId")  

        if not user or not listId:
            return Response({'error': 'User and listId are required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            userList = List.objects.get(listId=listId, users=user)
        except List.DoesNotExist:
            return Response({'error': 'List does not exist or user does not have access.'}, status=status.HTTP_400_BAD_REQUEST)
        
        itemName = request.data.get("itemName")  # Assumes "item_name" in POST data
        itemCategory = request.data.get("itemCategory")
        itemQuantity = int(request.data.get("itemQuantity"))  # Convert to integer, default is 1
        itemPrice = float(request.data.get("itemPrice"))  # Convert to float, default is 0.0

        if not itemName:
            return Response({'error': 'Item name is required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        if not itemCategory:
            return Response({'error': 'Item category is required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        if not itemQuantity:
            return Response({'error': 'Item quantity is required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        if not itemPrice:
            return Response({'error': 'Item price is required.'}, status=status.HTTP_400_BAD_REQUEST)

        item = Item.objects.create(name=itemName, category=itemCategory, quantity=itemQuantity, price=itemPrice)
        userList.items.add(item)
        userList.save()

        if item and userList:
            return Response(
                {"success": "Item successfully added to list."}, status=status.HTTP_201_CREATED
            )
        else:
            return item(
                {"error": "Failed to add item to list."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
    
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
        listId = request.data.get('listId')  # Assuming 'listName' is passed as json

        if not listId:
            return Response({'error': 'List name is required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user_list = List.objects.get(users=user, listId=listId)
            items_data = user_list.items.all()  # Retrieve all item objects related to the list

            # Serialize each item into a dictionary
            serialized_items = [
                {
                    'name': item.name,
                    'category': item.category,
                    'quantity': item.quantity,
                    'price': item.price
                }
                for item in items_data
            ]

            # Prepare the serialized data for the list including items
            serialized_data = {
                'listId': user_list.listId,
                'listName': user_list.listName,
                'items': serialized_items  # Include serialized items
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


@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def removeItem(request):
    user = request.user
    list_id = request.data.get("listId")
    item_name = request.data.get("itemName")

    if not list_id or not item_name:
        return Response({'error': 'Both listId and itemName are required.'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user_list = List.objects.get(listId=list_id, users=user)
    except List.DoesNotExist:
        return Response({'error': 'List does not exist or you do not have access to this list.'}, status=status.HTTP_404_NOT_FOUND)

    try:
        item = Item.objects.get(name=item_name)
        user_list.items.remove(item)
        return Response({'success': 'Item removed successfully from the list.'}, status=status.HTTP_200_OK)
    except Item.DoesNotExist:
        return Response({'error': 'Item not found in the list.'}, status=status.HTTP_404_NOT_FOUND)