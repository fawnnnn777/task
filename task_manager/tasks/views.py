from django.shortcuts import render, HttpResponse

# Create your views here.

def index(request):
    return render(request, 'tasks/index.html')

def newTask(request):
    return render(request, 'tasks/index.html')