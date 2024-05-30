import express from 'express';
import { SelectedWallet, SelectedBank, CreditOrDebitCard, Task } from '../models/payment.js';
import { Project } from '../models/projectModel.js';

const router = express.Router();

// E-Wallet
router.post('/submit', async (req, res) => {
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

router.get('/selectedWallets', async (req, res) => {
    try {
        const selectedWallets = await SelectedWallet.find();
        res.status(200).json(selectedWallets);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error.');
    }
});

// Bank
router.post('/submitBank', async (req, res) => {
    try {
        const { selectedBank } = req.body;

        if (!selectedBank) {
            return res.status(400).send('No bank selected');
        }

        const newSelectedBank = new SelectedBank({ selectedBank });
        await newSelectedBank.save();

        res.status(200).send('Data saved successfully.');
    } catch (error) {
        console.error('Error saving selected bank:', error);
        res.status(500).send('Internal server error.');
    }
});

router.get('/selectedBanks', async (req, res) => {
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
router.post('/submitCard', async (req, res) => {
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

router.get('/getCardNumbers', async (req, res) => {
    try {
        const cards = await CreditOrDebitCard.find({}, 'cardNumber -_id');
        res.status(200).json(cards);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error.');
    }
});

// Task
router.get('/task', async (req, res) => {
    try {
      const project = await Project.findOne({});
  
      if (!project) {
        return res.status(404).send('Project not found');
      }
  
      const { projectTitle, projectBudget } = project;
  
      res.status(200).json({ projectTitle, projectBudget });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error.');
    }
  });

export default router;