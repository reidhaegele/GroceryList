from rest_framework import serializers
from .models import *

class GroceryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroceryList
        fields = ['user', 'items']

class GroupSerializer(serializers.ModelSerializer):
    class Meta: 
        model = UserGroup
        fields = ['user', 'group_id']