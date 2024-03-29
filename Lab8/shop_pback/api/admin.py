from django.contrib import admin
from django.apps import apps
from .models import Category, Product

api_models = apps.get_app_config('api').get_models()

for model in api_models:
    try:
        admin.site.register(model)
    except admin.sites.AlreadyRegistered:
        pass

