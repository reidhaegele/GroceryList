from django.urls import path
from .views import GroceryListView, register, login

urlpatterns = [
    path('creategroup/', CreateGroup, name="create-group"),
    path('grocery/', GroceryListView.as_view(), name='grocery-list'),
    path('register/', register, name='register'),
    path('login/', login, name='login'),
]
