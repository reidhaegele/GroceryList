from django.db import models
from django.contrib.auth.models import User

class GroceryList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    items = models.TextField()

class List(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    list_name = models.CharField(max_length=255)

    def __str__(self):
        return self.list_name

class Price(models.Model):
    product_id = models.IntegerField(primary_key=True) 
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Product ID: {self.product_id}, Price: {self.price}"

class UserGroup(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    group_id = models.IntegerField()

    def __str__(self):
        return f"User: {self.user}, Group ID: {self.group_id}"
