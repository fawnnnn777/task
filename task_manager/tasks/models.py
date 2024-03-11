from django.db import models

class Task(models.Model):
    title = models.TextField()
    done = models.BooleanField()
    description = models.TextField()

# Create your models here.
