import express from 'express';
import { signup, login, logout, getUser, getAllUsers } from '../controllers/user.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.delete('/logout', logout);

router.get('/user/:id', getUser);

router.get('/users', getAllUsers);

export default router;
