import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'O nome é obrigatório.'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'O e-mail é obrigatório.'],
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'A senha é obrigatória.'],
        },
        idade: {
            type: Number,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true, // Cria automaticamente os campos createdAt e updatedAt
    }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;