from django.conf.urls import include, patterns, url

from rest_framework_nested import routers

from cadastro.views import ItemViewSet, ItemFilterViewSet, CategoriesViewSet
from restaurante.views import IndexView
from django.contrib import admin
admin.autodiscover()

router = routers.SimpleRouter()
router.register(r'items/categories', CategoriesViewSet)
router.register(r'items/(?P<id>[0-9]+)', ItemFilterViewSet)
router.register(r'items', ItemViewSet)



urlpatterns = patterns(
    '',

    url(r'^api/v1/', include(router.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^.*$', IndexView.as_view(), name='index'),
)
