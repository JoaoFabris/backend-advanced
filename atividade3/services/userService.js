import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'; // Import adicionado

const findByIdUser = (id) => User.findById(id);

const findAllUser = () => User.find().select('-password');

const createUser = async (userData) => {
    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(userData.password, salt);
    return User.create(userData);
};

const updateUser = (id, userData) => {
    return User.findByIdAndUpdate(id, userData, { returnDocument: 'after' }).select('-password');
};

const deleteUser = (id) => User.findByIdAndDelete(id);

const loginUser = async (email, password) => {
    const user = await User.findOne({ email });

    // Comparação correta de senha hash com bcrypt.compare
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return null;
    }

    const secret = process.env.JWT_SECRET || 'sua_chave_secreta';
    const token = jwt.sign(
        { id: user._id, email: user.email },
        secret,
        { expiresIn: '1d' }
    );

    return { user, token };
};

export default {
    findByIdUser,
    findAllUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser
};