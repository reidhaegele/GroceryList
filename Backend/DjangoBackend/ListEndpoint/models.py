import random
import string
import uuid
from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.contrib.auth import get_user_model


# Create your models here.
class List(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, to_field="username"
    )
    listId = models.AutoField(primary_key=True)
    listName = models.CharField(max_length=50)
    items = models.JSONField(default=list)
