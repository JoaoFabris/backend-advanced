# Backend Advanced

# Atividade 2 — CRUD de Usuários em Memória (Express + MVC)

Aplicação desenvolvida para a disciplina de **Backend com Node.js e Express**, implementando um **CRUD de usuários** utilizando o padrão arquitetural **MVC (Model-View-Controller)** e armazenamento de dados **em memória**, sem utilização de banco de dados.

---

# Tecnologias Utilizadas

- Node.js (ES Modules)
- Express
- Postman (testes da API)

> **Observação:** Os testes e as capturas de tela foram realizados utilizando o **Postman**, devido às limitações da versão gratuita da extensão **Thunder Client** na IDE Cursor.

---

# Estrutura do Projeto

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
```

---

# Como Executar o Projeto

### 1. Acesse o diretório da aplicação

```bash
cd atividade2
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor

```bash
npm run dev
```

Após iniciar a aplicação, a API estará disponível em:

```text
http://localhost:3000
```

---

# Rotas Disponíveis

| Método | Endpoint     | Descrição                     |
| ------ | ------------ | ----------------------------- |
| GET    | `/users`     | Lista todos os usuários       |
| GET    | `/users/:id` | Busca um usuário pelo ID      |
| POST   | `/users`     | Cadastra um novo usuário      |
| PUT    | `/users/:id` | Atualiza um usuário existente |
| DELETE | `/users/:id` | Remove um usuário             |

---

# Evidências de Funcionamento

As imagens abaixo demonstram o funcionamento da API por meio do **Postman**.

1. ✅ Listagem de usuários (`GET /users`)
2. ✅ Cadastro de usuário (`POST /users`)
3. ✅ Busca de usuário por ID (`GET /users/:id`)
4. ✅ Atualização de usuário (`PUT /users/:id`)
5. ✅ Remoção de usuário (`DELETE /users/:id`)
6. ✅ Tratamento de erro (`404 Not Found`)

As capturas de tela estão disponíveis na pasta:

```text
docs/
```

---

# Arquitetura

O projeto foi organizado seguindo o padrão **MVC (Model-View-Controller)**:

- **Models:** responsáveis pelo armazenamento e manipulação dos dados em memória.
- **Controllers:** contêm a lógica de negócio e processam as requisições.
- **Routes:** definem os endpoints da API e direcionam as requisições para os controllers.

Essa separação facilita a organização, manutenção e escalabilidade da aplicação.

Repositório destinado às atividades da disciplina de **Backend Avançado (Node.js & Express)**.

---

## Atividade 3 — API RESTful com MongoDB, Mongoose, JWT e MVC + Services

Aplicação desenvolvida para gerenciar o **CRUD de usuários** com persistência no **MongoDB**, autenticação segura via **JWT (JSON Web Token)**, criptografia de senhas com **bcryptjs** e organização arquitetural em camadas (**MVC + Services**).

### Tecnologias Utilizadas

- **Node.js** (ES Modules)
- **Express**
- **MongoDB** & **Mongoose**
- **jsonwebtoken (JWT)**
- **dotenv**
- **Thunder Client** (testes da API)

### Estrutura da Atividade 3

```text
atividade3/
├── controllers/
│   └── userController.js
├── database/
│   └── database.js
├── middlewares/
│   └── authMiddleware.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── services/
│   └── userService.js
├── docs/
│   ├── 01-post-user.png
│   ├── 02-post-login.png
│   ├── 03-get-users.png
│   ├── 04-get-user-by-id.png
│   ├── 05-put-user.png
│   ├── 06-delete-user.png
│   └── 07-unauthorized.png
├── .env
├── app.js
├── package.json
└── README.md

```

Rotas Disponíveis
Método Endpoint Acesso Descrição
POST /users Público Cadastra um novo usuário no banco
POST /login Público Autentica o usuário e gera o token JWT
GET /users Protegido Lista todos os usuários cadastrados
GET /users/:id Protegido Busca um usuário pelo seu ID
PUT /users/:id Protegido Atualiza os dados de um usuário pelo ID
DELETE /users/:id Protegido Remove um usuário pelo ID
