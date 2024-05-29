import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

// Import models from the combined models file
import { SelectedWallet, SelectedBank, CreditOrDebitCard, Task } from '../models/payment.js';

const app = express();
const PORT = 6006;

app.use(cors());

mongoose.connect('mongodb://localhost:27017/payment', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());

// E-Wallet
app.post('/submit', async (req, res) => {
    try {
        const newSelectedWallet = new SelectedWallet({
            selectedWallet: req.body.selectedWallet
        });

        await newSelectedWallet.save();

        res.status(200).send('Data saved successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error.');
    }
});

app.get('/selectedWallets', async (req, res) => {
    try {
        const selectedWallets = await SelectedWallet.find();
        res.status(200).json(selectedWallets);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error.');
    }
});

// Bank
app.post('/submitBank', async (req, res) => {
    try {
        const newSelectedBank = new SelectedBank({
            selectedBank: req.body.selectedBank
        });

        await newSelectedBank.save();

        res.status(200).send('Data saved successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error.');
    }
});

app.get('/selectedBanks', async (req, res) => {
    try {
        const selectedBanks = await SelectedBank.find();
        const selectedBankNames = selectedBanks.map(selectedBank => selectedBank.selectedBank);
        res.status(200).json(selectedBankNames);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error.');
    }
});

// Card
app.post('/submitCard', async (req, res) => {
    try {
        const cardData = req.body;
        const newCard = new CreditOrDebitCard(cardData);
        await newCard.save();
        res.status(200).send('Data saved successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error.');
    }
});

// Task
app.post('/task', async (req, res) => {
    try {
        const { taskName, taskPrice } = req.body;
        const newTask = new Task({ taskName, taskPrice });
        await newTask.save();
        res.status(200).send('Task added successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error.');
    }
});

app.get('/task', async (req, res) => {
    try {
        const task = await Task.findOne({});
        if (!task) {
            return res.status(404).send('Task not found');
        }
        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
