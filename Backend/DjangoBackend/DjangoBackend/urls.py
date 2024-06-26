"""
URL configuration for DjangoBackend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from EditAccEndpoint.views import updateUser
from ListEndpoint.views import createList, viewList, seeLists, joinList, addItem, removeItem, removeUserFromList
from authentication.views import register, login, accountInfo

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('authentication.urls')),
    path('addItem/', addItem, name='addItem'),
    path('removeItem/', removeItem, name='removeItem'),
    path('removeUserFromList', removeUserFromList, name='removeUserFromList'),
    path('createList/',createList,name='createList'),
    path('viewList/',viewList, name='viewList'),
    path('seeLists/', seeLists, name='seeLists'),
    path('joinList/', joinList, name = 'joinList'),
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    path('accountInfo/',accountInfo,name='accountInfo'),
    path('updateUser/',updateUser,name='updateUser')
]
