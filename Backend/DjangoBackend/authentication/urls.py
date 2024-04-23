from django.urls import path
from .views import register, login, accountInfo

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    path('accountInfo/',accountInfo,name='accountInfo')
]
