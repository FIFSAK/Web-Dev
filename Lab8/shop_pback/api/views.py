from django.http import HttpResponse
from django.shortcuts import render
from .models import Product, Category
from django.core import serializers


def get_products(request, id=None):
    if request.method == 'GET':
        products = Product.objects.all()
        if id:
            products = products.filter(id=id)
        data = serializers.serialize("json", products)

        return HttpResponse(data, content_type='application/json', status=200)
    else:
        return HttpResponse(status=405, reason='Method Not Allowed')


def get_categories(request, id=None):
    if request.method == 'GET':
        categories = Category.objects.all()
        if id:
            categories = categories.filter(id=id)
        data = serializers.serialize("json", categories)

        return HttpResponse(data, content_type='application/json', status=200)
    else:
        return HttpResponse(status=405, reason='Method Not Allowed')

def get_categories_products(request, id):
    if request.method == 'GET':
        products = Product.objects.filter(category_id=id)
        data = serializers.serialize("json", products)

        return HttpResponse(data, content_type='application/json', status=200)
    else:
        return HttpResponse(status=405, reason='Method Not Allowed')