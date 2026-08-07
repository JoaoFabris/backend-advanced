# Backend Advanced

# Atividade 2 — CRUD de Usuários em Memória (Express + MVC)

Aplicação desenvolvida para a disciplina de **Backend com Node.js e Express**, implementando um **CRUD de usuários** utilizando o padrão arquitetural **MVC (Model-View-Controller)** e armazenamento de dados **em memória**, sem utilização de banco de dados.

---

# Tecnologias Utilizadas

* Node.js (ES Modules)
* Express
* Postman (testes da API)

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

* **Models:** responsáveis pelo armazenamento e manipulação dos dados em memória.
* **Controllers:** contêm a lógica de negócio e processam as requisições.
* **Routes:** definem os endpoints da API e direcionam as requisições para os controllers.

Essa separação facilita a organização, manutenção e escalabilidade da aplicação.
