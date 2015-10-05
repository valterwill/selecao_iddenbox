# selecao_iddenbox

A aplicação do cardapio online é referida através da aplicação restaurante. Para o deploy é necessario seguir as rotinas abaixo:

1 - python manage.py syncdb

2 - python runserver

3 - Acesso a area administrativa http://localhost:8000/admin/

4 - Acesso a aplicação web http://localhost:8000

5 - Acesso a api através as urls

    5.1 - Para acessar a lista de itens do cardapio, http://localhost:8000/api/v1/items
      5.1.1 - Para ordenar de forma ascedente ou descendente,  http://localhost:8000/api/v1/items?order=asc|desc
    5.2 - Para acessar a lista de itens filtradas por uma categoria, http://localhost:8000/api/v1/items/:id_categoria/
      5.2.1 - Para ordenar de forma ascedente ou descendente,  http://localhost:8000/api/v1/items/:id_categoria/?order=asc|desc
    5.3 - Para acessar a lista de categorias, http://localhost:8000/api/v1/items/categories/
    
