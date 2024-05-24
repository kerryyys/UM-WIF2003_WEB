import express from 'express';
import { ProjectDetails } from '../models/projectDetails.js';

const router = express.Router();

// Route to fetch projects based on status (in progress or completed)
router.get('/recruite', async (req, res) => {
  try {
    const { status } = req.query;
    let projects;

    if (status === "posted"){
      projects = await ProjectDetails.find({ taken: false, complete: false });
    } else if(status === 'in-progress') {
      projects = await ProjectDetails.find({ taken: true, complete: false });
    } else if (status === 'completed') {
      projects = await ProjectDetails.find({ complete: true });
    } else {
      return res.status(400).json({ message: 'Invalid status parameter' });
    }

    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
