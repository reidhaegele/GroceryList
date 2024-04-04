from rest_framework import serializers
from .models import GroceryList


class GroceryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroceryList
        fields = ["user", "items"]
