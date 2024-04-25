import random
import string
import uuid
from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.contrib.auth import get_user_model

class Item(models.Model):
    name = models.CharField(primary_key=True, max_length=100)
    category = models.CharField(max_length=100)
    quantity = models.IntegerField()
    price = models.FloatField()
    #id need to decide on implmentation 
    #Location need to decide on implmentation 

# Create your models here.
class List(models.Model):
    users = models.ManyToManyField(settings.AUTH_USER_MODEL)
    listId = models.AutoField(primary_key=True)
    listName = models.CharField(max_length=50)
    items = models.ManyToManyField(Item, blank=True)
    



