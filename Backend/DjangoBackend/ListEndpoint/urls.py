from django.urls import path
from .views import addItem, createList, viewList, seeLists, joinList, removeItem, removeUserFromList

urlpatterns = [
    path('addItem/', addItem, name='addItem' ),
    path('createList/', createList, name='createList'),
    path('viewList/',viewList, name='viewList'),
    path('seeLists/', seeLists, name='seeLists'),
    path('joinList/', joinList, name = 'joinList'),
    path('removeItem/', removeItem, name = "removeItem"),
    path('removeUserFromList', removeUserFromList, name='removeUserFromList'),
]
