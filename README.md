O projeto consiste em simular um sistema de banco de dados da chevrollet, onde ele armazena os modelos, preços e promoções dos carros.

A aplicação já roda automaticamente, qualquer informação que for alterada no código, o servidor irá se atualizar automaticamente, basta 
utilizar npm start para executar o servidor.

São 5 rotas disponíveis: Uma para ler um modelo, para ler todos os modelos, para atualizar um modelo, para criar um modelo e para deletar
um modelo. Alguns exemplos de requisições utilizadas são o GET, o POST, o PUT e o DELETE.

Exemplos:
Caso deseja ler todos os modelos, basta colocar a url(http://localhost:3224/carros) e ir em GET no Insomnia, se deseja ler 
algum modelo em específico digitar (http://localhost:3224/carros/:id), esse id é o identificador do produto desejado. 


Ou caso deseja adicionar outro modelo, basta ir em POST no Insomnia, colocar a url (http://localhost:3224/carros) e inserir no body com o 
texto do tipo JSON, um novo modelo, como por exemplo:
{
"modelo": "S10",
"preco": 14000,
"promocao": "não" 
}


