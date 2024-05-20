// Keeping all the logic part of projects.js here
// For better code separation
import e, { json } from "express";
import { Project } from "../models/projectModel.js";
import { FakeUser } from "../models/fakeUserModel.js";

export const getAllProjects = async (req, res) => {
  try {
    let query = {};
    if (req.query.q) {
      const searchQuery = req.query.q;
      const regex = new RegExp(searchQuery, "i");
      query = { projectTitle: regex };
    }
    const projects = await Project.find(query);
    // console.log("Backend - projects: " + projects);
    return res.status(200).json({
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const postNewProject = async (req, res) => {
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
};

export const getProjectDetails = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const project = await Project.findById(projectId);
    return res.status(200).json(project);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const saveFavoriteProject = async (req, res) => {
  console.log(req.body);
  const { userId, projectId } = req.body;
  try {
    const user = await FakeUser.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    if (!user.favoriteProjects.includes(projectId)) {
      user.favoriteProjects.push(projectId);
      await user.save();
    }

    res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({
      error: "Inside POST /favorite-project endpoint " + error.message,
    });
  }
};

export const removeFavoriteProject = async (req, res) => {
  const { userId, projectId } = req.body;
  try {
    const user = await FakeUser.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.favoriteProjects = user.favoriteProjects.filter(
      (id) => id.toString() !== projectId
    );
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      error: "Inside POST /remove-favorite-project endpoint " + error.message,
    });
  }
};

export const saveTakenProject = async (req, res) => {
  console.log(req.body);
  const { userId, projectId } = req.body;
  try {
    const user = await FakeUser.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    if (!user.takenProjects.includes(projectId)) {
      user.takenProjects.push(projectId);
      await user.save();
    }
    res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({
      error: "Inside POST /taken-project endpoint " + error.message,
    });
  }
};

export const getTakenProjects = async (req, res) => {
  console.log("getTakenProjects: ", req.params.userId);
  const userId = req.params.userId;
  try {
    const user = await FakeUser.findById(userId).populate("takenProjects");
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({
      error: "Inside GET /taken-project endpoint " + error.message,
    });
  }
};

export const saveCompletedProject = async (req, res) => {
  const { userId, projectId } = req.body;
  try {
    const user = await FakeUser.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    if (!user.completedProjects.includes(projectId)) {
      user.completedProjects.push(projectId);
      await user.save();
    }
    res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({
      error: "Inside POST /completed-project endpoint " + error.message,
    });
  }
};

export const getCompletedProjects = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await FakeUser.findById(userId).populate("completedProjects");
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({
      error: "Inside GET /completed-project endpoint " + error.message,
    });
  }
};
