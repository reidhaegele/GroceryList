from django.urls import path
from .views import createList
from .views import getUserLists

urlpatterns = [
    path("createList/", createList, name="createList"),
    path("getUserLists/", getUserLists, name="getUserLists" ),
]
