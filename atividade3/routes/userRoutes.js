import { Router } from 'express';
import UserController from '../controllers/userController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();

// Rotas Públicas
router.post('/users', UserController.createUser);
router.post('/login', UserController.login);

// Rotas Protegidas por JWT
router.get('/users', verifyToken, UserController.getAllUsers);
router.get('/users/:id', verifyToken, UserController.getUserById);
router.put('/users/:id', verifyToken, UserController.updateUser);
router.delete('/users/:id', verifyToken, UserController.deleteUser);

export default router;