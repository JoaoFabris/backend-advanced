import UserModel from '../models/userModel.js'; // Lembre-se da extensão .js e do nome correto da pasta

const UserController = {
  // GET /users
  getAllUsers: (req, res) => {
    const users = UserModel.findAll();
    return res.status(200).json(users);
  },

  // GET /users/:id
  getUserById: (req, res) => {
    const { id } = req.params;
    const user = UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ mensagem: 'User not found!.' });
    }

    return res.status(200).json(user);
  },

  // POST /users
  createUser: (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ mensagem: 'Fields "name" and "email" are required.' });
    }

    const newUser = UserModel.create({ name, email });
    return res.status(201).json(newUser);
  },

  // PUT /users/:id
  updateUser: (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const updatedUser = UserModel.update(id, { name, email });

    if (!updatedUser) {
      return res.status(404).json({ mensagem: 'User not found.' });
    }

    return res.status(200).json(updatedUser);
  },

  // DELETE /users/:id
  deleteUser: (req, res) => {
    const { id } = req.params;
    const isDeleted = UserModel.delete(id);

    if (!isDeleted) {
      return res.status(404).json({ mensagem: 'User not found.' });
    }

    return res.status(200).json({ mensagem: 'User successfully deleted.' });
  }
};

export default UserController;
