from django.urls import path
from .views import updateUser

urlpatterns = [
    path('updateUser/', updateUser, name='updateUser')
]
