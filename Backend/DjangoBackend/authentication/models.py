from django.db import models
from django.contrib.auth.models import User

class GroceryList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    items = models.TextField()

