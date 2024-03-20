from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from .models import Task


# Create your views here.

def index(request):
    allTasks = Task.objects.all()
    return render(request, 'tasks/index.html',{
        "tasks": allTasks
    })

@csrf_exempt
def newTask(request):
    if request.method == "POST":
        data = json.loads(request.body)
        if data == [""]:
            return JsonResponse({"error": "NO TASK NAME"}, status=400)
        taskName = data.get('taskName')
        taskDes = data.get('taskDes')
        task = Task.objects.get_or_create(title=taskName, description=taskDes)
        return HttpResponse(status=204)

@csrf_exempt    
def removeTask(request, id):
    if request.method == "PUT":
        data = json.loads(request.body)
        if data == ['']:
            return JsonResponse({"error": "no task found"})
        id = data.get('id')
        task = Task.objects.get(id=id)
        task.delete()
        return JsonResponse({"done":"worked fine"})
    return HttpResponse("good job")