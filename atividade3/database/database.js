import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        // Passe apenas a URI de conexão (sem { useNewUrlParser: true, useUnifiedTopology: true })
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/atividade3_db');
        console.log('MongoDB conectado com sucesso!');
    } catch (error) {
        console.error('Erro na conexão com o banco de dados:', error.message);
    }
};

export default connectToDatabase;