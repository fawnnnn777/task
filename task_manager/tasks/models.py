from django.db import models

class Task(models.Model):
    title = models.TextField()
    done = models.BooleanField(default=False)
    description = models.TextField()

# Create your models here.
