import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    idade: { type: Number },
    isActive: { type: Boolean, default: true },
    token: { type: String, required: true }
});

const User = mongoose.models.User || mongoose.model('users', UserSchema);

export default User;