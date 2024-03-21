from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('newtask', views.newTask, name="newTask"),
    path('removeTask/<int:id>', views.removeTask, name="removeTask"),
    path('doneTask/<int:id>', views.doneTask, name="doneTask"),
    path('getTasks', views.getTasks, name="getTasks")
]
