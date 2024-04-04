from rest_framework import serializers
from .models import List


class List(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = ["user", "listId", "listName", "items"]
