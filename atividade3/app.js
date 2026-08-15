import 'dotenv/config'; // Importa e carrega as variáveis de ambiente imediatamente
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import connectToDatabase from './database/database.js';

const app = express();
const PORT = process.env.PORT || 3000;

connectToDatabase();

app.use(express.json());
app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});