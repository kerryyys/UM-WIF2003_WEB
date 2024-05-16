// freelanceInfoRoute.js

import express from "express";
import { FreelanceInfo } from "../models/freelanceInfo.js";

const router = express.Router();

// Route to fetch all freelance information
router.get("/", async (req, res) => {
  try {
    const freelancers = await FreelanceInfo.find();
    res.status(200).json(freelancers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
