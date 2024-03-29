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
        task = Task.objects.create(title=taskName, description=taskDes)
        response_data = {
            "id": task.id,
            "title": task.title,
            "description": task.description,
        }
        
        return JsonResponse(response_data)

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

@csrf_exempt
def doneTask(request, id):
    if request.method == "PUT":
        data = json.loads(request.body)
        if data == ['']:
            return JsonResponse({"error":"no task sent"})
        id = data.get("id")
        task = Task.objects.get(id=id)
        task.done = True
        task.save()
        return JsonResponse({"done":"perfect"})
    return HttpResponse("not good job")

def getTasks(request):
    tasks = Task.objects.all()
    serialized_tasks = [{'id': task.id, 'done': task.done} for task in tasks]
    return JsonResponse(serialized_tasks, safe=False)