// routes/userRoutes.js
import express from 'express';
import {
    registerUser, getAllUsers, login,
} from "../controllers/userController.js";

const router = express.Router();

router.post('/register', registerUser);
router.get('/users', getAllUsers);

router.post('/login', login);

export default router;
