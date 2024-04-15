from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    userID = models.AutoField(primary_key=True)
    zipcode = models.CharField(max_length=10, null=True)

    def __str__(self):
        return self.user.username

