<h1> CRUD :four: </h1>
<br>

<h2> Este foi o projeto que aprendi no YouTube do Quero Ser Dev </h2>
<p> CRUD é um acrônimo para Create, Read, Update e Delete (criação, consulta, atualização e remoção). São as 4 operações principais em um banco de dados. Ou seja, criação de uma API para integrar com o MongoDB. </p>

<h2> Introdução </h2>
O objetivo é criar um sistema para disponibilizar uma lista com as pessoas que usam a #techmaromba e incentivar outras pessoas da área de tecnologia a terem uma vida ativa e saudável.

## Tecnologias utilizadas
* VS Code
* Node.JS
* NPM
* Express
* Nodemon
* Mongoose
* Dotenv
* MongoDB
* Swagger

## Ferramentas
Na aplicação foi utilizado o <a href="https://nodejs.org/en/download" target="_blank" > Node.JS </a>  na versão 18.14.0 em LTS.


## Dependências 
Framework Express na versão 4.18.2 

Mecanismo Cors na versão 2.8.5

Biblioteca Dotenv na versão 16.3.1

Biblioteca Mongoose na versão 8.0.3

Biblioteca Nodemon na versão 3.0.2

Documentação Swagger-autogen na versão 2.23.7

Documentação Swagger-ui-express na versão 5.0.0


## Rodando o projeto
- Para rodar o repositório na sua máquina, é necessário clonar o mesmo.
  
- Pra rodar o servidor escreva no terminal:
```
npm start
```


## Endpoints
<p> Caminho da URL: http://localhost:3333/techmaromba </p>

| Método | URL             | Descrição                                                                                                                                                                                         |
| ------ | --------------  | ------------------------------------------------------------------------------------------------------                                                                                            |
| GET    | /all        | Encontra todas as Tech Marombas no banco de dados. E retorna um JSON da lista com todos os dados das Tech Marombas. |
| POST   | /add        | Adiciona uma nova Tech Maromba usando as informações enviadas dentro do arquivo `request.body`. |
| PATCH  | /update/:id | Atualiza algum dado específico da Tech Maromba a partir do `id` escrito e usando o arquivo `request.body`. |
| DELETE | /clear/:id  | Deleta alguma Tech Maromba a partir do `id` escrito. | 


## Controllers

##### Função findAll:

- Encontrando as Tech Marombas com _sucesso_:

  - Responde status HTTP com o código `200` (OK)
  - Retorna o JSON com uma lista

- Se _não encontrar_ a lista:

  - Responde status HTTP com o código `500` (Internal Server Error)
  - Retorna o(s) motivo(s) do(s) erro(s) no formato JSON: `{ message: error.message }`
  - Mostra o erro no console
     
~

##### Função addNew:

- Informações para o _request.body_:
  
  - Body: `{ name, description, urlProfile, urlImage }`

- Dados para o _banco de dados_:
  
  - `{ name, description, urlProfile, urlImage, createdAt: new Date() }`

- Adicionando uma nova Tech Maromba com _sucesso_:

  - Responde status HTTP com o código `201` (Created)
  - Retorna o seguinte JSON: `{ techmaromba: result }`

- Se _não adicionar_ a Tech Maromba:

  - Responde status HTTP com o código `500` (Internal Server Error)
  - Retorna o(s) motivo(s) do(s) erro(s) no formato JSON: `{ error.message }`
  - Mostra o erro no console
 
~

##### Função update:

- Encontra a Tech Maromba pelo _id_
 
- Atualizando informações da Tech Maromba _encontrada_:
  
  - Em request.body: `{ techmarombaFound.name = request.body.name }`
  - Em request.body: `{ techmarombaFound.description = request.body.description }`
  - Em request.body: `{ techmarombaFound.urlProfile = request.body.urlProfile }`
  - Em request.body: `{ techmarombaFound.urlImage = request.body.urlImage }`

- Mostrando a atualização com _sucesso_:

  - Responde status HTTP com o código `200` (OK)
  - Retorna o JSON com a Tech Maromba alterada
 
- Se _não atualizar_ a Tech Maromba:

  - Responde status HTTP com o código `500` (Internal Server Error)
  - Retorna a mensagem no formato JSON: `{ message: 'Não foi possível atualizar' }`
  - Mostra o erro no console
    
~

##### Função clear:

- Encontra a Tech Maromba pelo _id_ e deleta
  
- Deletando a Tech Maromba com _sucesso_:

  - Responde status HTTP com o código `200` (OK)
  - Retorna o seguinte JSON: `{ message: 'O id ${id} foi deletado' }`
 
- Se _não deletar_ a Tech Maromba:

  - Responde status HTTP com o código `500` (Internal Server Error)
  - Retorna o(s) motivo(s) do(s) erro(s) no formato JSON: `{ message: error.message }`
  - Mostra o erro no console


## Status do projeto
:construction: Aplicação em andamento.
