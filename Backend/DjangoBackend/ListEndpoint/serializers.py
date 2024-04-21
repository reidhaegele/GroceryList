from rest_framework import serializers
from .models import List

class ListSerializer(serializers.ModelSerializer):
    users = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all())  # Include users field

    class Meta:
        model = List
        fields = ["users", "listId", "listName", "items"]  # Include users field in fields attribute
