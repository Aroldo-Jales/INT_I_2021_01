from django.urls import path, include

urlpatterns = [
    path('hello_world_app/', include('hello_world_app.urls'))
]
