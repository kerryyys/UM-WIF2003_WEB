import e from "express";
import { Project } from "../models/projectModel.js";
import mongoose, { mongo } from "mongoose";
const router = e.Router();

// Router for '/projects' endpoints
// POST /projects - Dummy endpoint to save new projects to mongodb
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const newProject = {
      companyName: req.body.companyName,
      projectTitle: req.body.projectTitle,
      projectDesc: req.body.projectDesc,
      category: req.body.category,
      duration: req.body.duration,
      filters: req.body.filters,
      contactInfo: req.body.contactInfo,
      additionalInfo: req.body.additionalInfo,
      deadline: new Date(req.body.deadline),
      budget: req.body.budget,
      requiredSkills: req.body.requiredSkills,
    };
    const project = await Project.create(newProject).then((project) =>
      console.log("project created: ", project)
    );
    return res.status(201).send(project);
  } catch (error) {
    console.log(error.message);
    //When send is used with object, we are returning a JSON
    res.status(500).send({ message: error.message });
  }
});

// GET /projects - Retrieves all projects from mongodb
router.get("/", async (req, res) => {
  try {
    let query = {};
    if (req.query.q) {
      const searchQuery = req.query.q;
      const regex = new RegExp(searchQuery, "i");
      query = { projectTitle: regex };
    }
    const projects = await Project.find(query);
    return res.status(200).json({
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// GET /projects/:projectId - Retrieves project details of projectId
router.get("/:projectId", async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const project = await Project.findById(projectId);
    return res.status(200).json(project);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
