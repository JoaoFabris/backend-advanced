import userService from '../services/userService.js';

const UserController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.findAllUser();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro ao buscar usuários.', error: error.message });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ mensagem: 'E-mail e senha são obrigatórios.' });
            }

            const result = await userService.loginUser(email, password);

            if (!result) {
                return res.status(401).json({ mensagem: 'E-mail ou senha inválidos.' });
            }

            return res.status(200).json({
                mensagem: 'Login realizado com sucesso!',
                token: result.token,
                user: {
                    id: result.user._id,
                    name: result.user.name,
                    email: result.user.email
                }
            });
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro ao realizar login.', error: error.message });
        }
    },

    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await userService.findByIdUser(id);

            if (!user) {
                return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
            }

            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro ao buscar usuário.', error: error.message });
        }
    },

    createUser: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            if (!name || !email || !password) {
                return res.status(400).json({ mensagem: 'Campos "name", "email" e "password" são obrigatórios.' });
            }

            const newUser = await userService.createUser(req.body);
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro ao criar usuário.', error: error.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedUser = await userService.updateUser(id, req.body);

            if (!updatedUser) {
                return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
            }

            return res.status(200).json(updatedUser);
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro ao atualizar usuário.', error: error.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedUser = await userService.deleteUser(id);

            if (!deletedUser) {
                return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
            }

            return res.status(200).json({ mensagem: 'Usuário removido com sucesso.' });
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro ao deletar usuário.', error: error.message });
        }
    }
};

export default UserController;