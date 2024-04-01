from django.urls import path
from .views import GroceryListView, register, login, makeUserGroup, AddUserToGroup

urlpatterns = [
    path('grocery/', GroceryListView.as_view(), name='grocery-list'),
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    path('makeUserGroup/',makeUserGroup, name='makeUserGroup'),
    path('AddToUserGroup/', AddUserToGroup, name='AddUsertoGroup')
]
