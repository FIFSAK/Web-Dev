from django.contrib import admin
from django.urls import path

from api.views import get_products, get_categories, get_categories_products

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/products', get_products),
    path('api/products/<int:id>', get_products),
    path('api/categories', get_categories),
    path('api/categories/<int:id>', get_categories),
    path('api/categories/<int:id>/products', get_categories_products),
]
# /api/products - List of all Products
# /api/products/<int:id>/ - Get one Product
# /api/categories/ - List of all Categories
# /api/categories/<int:id>/ - Get one Category
# /api/categories/<int:id>/products/ - List of Products by Category