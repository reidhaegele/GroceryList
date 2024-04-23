from django.urls import path
from .views import createList, viewList, seeLists, joinList

urlpatterns = [
    path('createList/', createList, name='createList'),
    path('viewList/',viewList, name='viewList'),
    path('seeLists/', seeLists, name='seeLists'),
    path('joinList/', joinList, name = 'joinList'),
]
