from django.urls import path
from .views import createList, viewList, seeLists

urlpatterns = [
    path('createList/', createList, name='createList'),
    path('viewList/',viewList, name='viewList'),
    path('seeLists/', seeLists, name='seeLists'),
]
