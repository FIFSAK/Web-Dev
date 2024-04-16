from django.http import HttpResponse
from django.core import serializers
from django.views import View
from rest_framework.viewsets import ModelViewSet

from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


class CompaniesView(View):
    def get(self, request, pk=None):
        if pk:
            companies = Company.objects.filter(id=pk)
        else:
            companies = Company.objects.all()

        data = CompanySerializer(companies, many=True).data
        return HttpResponse(data, content_type='application/json', status=200)


class VacanciesView(View):
    def get(self, request, pk=None):
        if pk:
            vacancies = Vacancy.objects.filter(id=pk)
        else:
            vacancies = Vacancy.objects.all()

        data = VacancySerializer(vacancies, many=True).data
        return HttpResponse(data, content_type='application/json', status=200)


class VacanciesCompanyView(View):
    def get(self, request, pk_c):
        vacancies = Vacancy.objects.filter(company_id=pk_c)
        data = VacancySerializer(vacancies, many=True).data
        return HttpResponse(data, content_type='application/json', status=200)


def get_top_ten_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        data = serializers.serialize("json", vacancies)

        return HttpResponse(data, content_type='application/json', status=200)
