import express from "express";
import { ProjectDetails } from "../models/projectDetails.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const {
      companyLog,
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
      PIC,
      review,
    } = req.body;

    // Create a new project details document
    //NOT SURE HAVE TO RETRIEVE THE LOGO HERE OR NOT
    const newProjectDetails = new ProjectDetails({
      companyLog,
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
      PIC,
      review,
    });

    // Save the project details to MongoDB
    const savedProjectDetails = await newProjectDetails.save();
    console.log("Project details uploaded:", savedProjectDetails);

    return res.status(201).json(savedProjectDetails);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const projectDetails = await ProjectDetails.find();
    res.json(projectDetails);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
