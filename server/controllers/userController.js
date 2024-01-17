// controllers/userController.js
import User from '../models/User.js';

export const registerUser = async (req, res) => {
    try {
        const { username, password, email, role } = req.body;

        // Create a new user
        const newUser = new User({ username, password, email, role });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
};
export const getAllUsers = async (req, res) => {
    try {
        const db = await connect();
        const users = await db.collection('users').find().toArray();

        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username, password });

        if (user) {
            res.json({ success: true, message: 'Login successful' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

