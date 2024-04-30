from rest_framework import serializers
from .models import Item, List, User

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['name', 'category', 'quantity', 'price']

class ListSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True, read_only=True)  # Nested serialization for items
    users = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all())

    class Meta:
        model = List
        fields = ["users", "listId", "listName", "items"]
