from django.contrib import admin
from django.urls import path
from api.views import get_companies, get_vacancies, get_top_ten_vacancies

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/companies/', get_companies),
    path('api/companies/<int:pk>/', get_companies),
    path('api/companies/<int:pk_c>/vacancies/', get_vacancies),
    path('api/vacancies/', get_vacancies),
    path('api/vacancies/<int:pk>', get_vacancies),
    path('api/vacancies/top_ten/', get_top_ten_vacancies),
]

