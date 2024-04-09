from django.urls import path
from .views import createList, viewList

urlpatterns = [
    path('createList/', createList, name='createList'),
    path('viewList/',viewList, name='viewList'),
]
