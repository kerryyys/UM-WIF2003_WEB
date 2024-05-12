import e from "express";
import { PORT, mongoDBConnection } from "./config.js";
import mongoose, { mongo } from "mongoose";
import { Project } from "./models/projectModel.js";
import cors from "cors";
const app = e();

// IN CASE ANYONE IS HERE, IGNORE THESE, THESE ARE JUST CODE FOR MY LEARNING
app.use(e.json());
app.use(cors());

// POST /projects - zhengyu
// A dummy endpoint to save a project to MongoDB - zhengyu
app.post("/projects", async (req, res) => {
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

// GET /projects - zhengyu
// Retreives a list of projects from MongoDB - zhengyu
app.get("/projects", async (req, res) => {
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
app.get("/projects/:projectId", async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const project = await Project.findById(projectId);
    return res.status(200).json(project);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
app.get("*", (req, res) => {
  console.log(req);
  res.send("page is not here dumbass");
});
app.post("*", (req, res) => {
  console.log(req);
  res.send("page is not here dumbass");
});

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});

//Connect the application to MongoDB using Mongoose
mongoose
  .connect(mongoDBConnection)
  .then(() => {
    console.log("App connected to the database");
  })
  .catch((error) => {
    console.log(error);
  });
