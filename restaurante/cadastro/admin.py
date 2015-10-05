from django.contrib import admin
from cadastro.models import *

class ItemAdmin(admin.ModelAdmin):
	fieldsets = [('Dados',{'classes': ('grp-collapse grp-open',),
                              'fields': [('nome','valor'),
                                    	('ingredientes'),
                              			('categoria','tempo'),
                              			],}),]
	
	list_display = ['nome','categoria','valor','tempo']
	list_filter = ['categoria','ingredientes']
	search_fields = ['nome','categoria__nome']
	filter_horizontal = ['ingredientes']

admin.site.register(Item, ItemAdmin)
admin.site.register(Ingrediente)
admin.site.register(Categoria)

