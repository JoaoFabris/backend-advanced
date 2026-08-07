import express from 'express';
import userRoutes from './routes/userRouter.js';

const app = express();
const PORT = 3000;

// Middleware para converter JSON
app.use(express.json());

// Rotas da aplicação
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});