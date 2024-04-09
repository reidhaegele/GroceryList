from django.urls import path
from .views import GroceryListView, register, login, accountInfo

urlpatterns = [
    path('grocery/', GroceryListView.as_view(), name='grocery-list'),
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    path('accountInfo/',accountInfo,name='accountInfo')
]
