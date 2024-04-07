from django.http import HttpResponse
from django.core import serializers

from .models import Company, Vacancy


# Create your views here.

def get_companies(request, pk=None):
    if request.method == 'GET':
        if pk:
            companies = Company.objects.filter(id=pk)
        else:
            companies = Company.objects.all()
        data = serializers.serialize("json", companies)

        return HttpResponse(data, content_type='application/json', status=200)


def get_vacancies(request, pk_c=None, pk=None):
    if request.method == 'GET':
        if pk_c:
            vacancies = Vacancy.objects.filter(company=pk_c)
        elif pk:
            vacancies = Vacancy.objects.filter(id=pk)
        else:
            vacancies = Vacancy.objects.all()
        data = serializers.serialize("json", vacancies)

        return HttpResponse(data, content_type='application/json', status=200)


def get_top_ten_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        data = serializers.serialize("json", vacancies)

        return HttpResponse(data, content_type='application/json', status=200)
