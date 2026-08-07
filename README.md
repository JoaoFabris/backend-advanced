# backend-advanced


# Atividade 2 - CRUD de Usuários em Memória (Express + MVC)

Aplicação desenvolvida para a disciplina de Backend com Node.js e Express, utilizando o padrão arquitetural MVC (Model-View-Controller) e armazenamento de dados em memória.

##  Tecnologias Utilizadas
- **Node.js** (ES Modules)
- **Express**
- **Postman** (Testes das rotas)

> **Nota sobre os testes:** Por limitação de uso gratuito da extensão Thunder Client no editor Cursor IDE, as validações e capturas de tela das rotas foram realizadas via **Postman**.

---

##  Estrutura de Arquivos

```text
atividade2/
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── docs/
│   ├── 01-get-all.png
│   ├── 02-post-user.png
│   ├── 03-get-by-id.png
│   ├── 04-put-user.png
│   ├── 05-delete-user.png
│   └── 06-get-404-error.png
├── app.js
├── package.json
└── README.md


##  Evidências de Funcionamento (Postman)

1. Listar todos os usuários (GET /users)
2. Cadastrar usuário (POST /users)
3. Buscar por ID (GET /users/:id)
4. Atualizar usuário (PUT /users/:id)
5. Deletar usuário (DELETE /users/:id)
6. Tratamento de Erro (404 Not Found)