from django.http import HttpResponse
from django.shortcuts import render
from .models import Product
from django.core import serializers


def get_products(request):
    if request.method == 'GET':
        products = Product.objects.all()
        data = serializers.serialize("json", products)

        return HttpResponse(data, content_type='application/json')
    else:
        return render(request, "Error Pages/405.html", status=405)
