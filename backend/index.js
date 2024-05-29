import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { User } from "./models/users.js";
import cors from "cors";
import usersRoutes from "./route/usersRoutes.js";

const app = express();

// Middleware setup
app.use(express.json({ limit: '10mb' })); // Increase limit as needed
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

// Root endpoint
app.get('/', (req, res) => {
    return res.status(200).send('Welcome');
});

// Users routes
app.use('/users', usersRoutes);

// Add new user
app.post('/users', async (req, res) => {
    try {
        const { firstName, lastName, city, state, role } = req.body;

        if (!firstName || !lastName || !city || !state || !role) {
            return res.status(400).send({ message: 'Send all required fields' });
        }

        const newUser = { firstName, lastName, city, state, role };
        const user = await User.create(newUser);

        return res.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Retrieve all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json({ count: users.length, data: users });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Retrieve user by ID
app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        return res.status(200).json({ data: user });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Update user by ID
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const profileData = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, profileData, { new: true });

        if (!user) {
            return res.status(404).send('User not found');
        }

        return res.status(200).send({ data: user });
    } catch (error) {
        console.error('Error updating profile data:', error);
        res.status(500).send('Internal server error');
    }
});

// Connect to the database and start the server
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
