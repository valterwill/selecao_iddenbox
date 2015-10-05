from django.db import models



class Categoria(models.Model):
    nome = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return '{0}'.format(self.nome)

class Ingrediente(models.Model):
    nome = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return '{0}'.format(self.nome)
        
class Item(models.Model):
    nome = models.CharField(max_length=100)
    valor = models.DecimalField(decimal_places = 2, max_digits = 10)
    ingredientes = models.ManyToManyField(Ingrediente)
    tempo = models.IntegerField()

    categoria = models.ForeignKey(Categoria)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return '{0}'.format(self.nome)
