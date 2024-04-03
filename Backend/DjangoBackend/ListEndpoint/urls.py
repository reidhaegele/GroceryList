from django.urls import path
from .views import createList 

urlpatterns = [
    path('createList/', createList, name='createList'),
]
