
import express from 'express';
import { Project } from '../models/projectModel.js';


const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const {
      companyLogo,
      companyName,
      projectTitle,
      projectDescription,
      location,
      projectCategory,
      projectDuration,
      filter,
      requiredSkills,
      projectBudget,
      deadline,
      contactInformation,
      additionalNotes,
      agreedToTerms,
      posted,
      taken,
      completed,
      applicants,
      serviceProvider,
      review,
      uploadedFiles
    } = req.body;

    // Create a new project details document
    //NOT SURE HAVE TO RETRIEVE THE LOGO HERE OR NOT
    const project = new Project({
      companyLogo,
      companyName,
      projectTitle,
      projectDescription,
      location,
      projectCategory,
      projectDuration,
      filter,
      requiredSkills,
      deadline,
      projectBudget,
      contactInformation,
      additionalNotes,
      agreedToTerms,
      posted,
      taken,
      completed,
      applicants,
      serviceProvider,
      review,
      uploadedFiles
    });

    // Save the project details to MongoDB
    const savedProject = await project.save();
    console.log("Project details uploaded:", savedProject);

    return res.status(201).json(savedProject);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const project = await Project.find();
    res.json(project);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
