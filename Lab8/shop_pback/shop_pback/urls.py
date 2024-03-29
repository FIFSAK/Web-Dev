from django.contrib import admin
from django.urls import path

from api.views import get_products

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/products', get_products),
]
