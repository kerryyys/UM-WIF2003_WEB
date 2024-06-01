import express from "express";
import { Project } from "../models/projectModel.js";
import { FakeUser } from "../models/fakeUserModel.js";

const router = express.Router();

// Route to fetch projects based on status (posted, in progress or completed)
router.get("/:status", async (req, res) => {
  try {
    const { status } = req.params;
    let projects;

    if (status === "posted") {
      projects = await Project.find({ taken: false, completed: false });
    } else if (status === "in-progress") {
      projects = await Project.find({ taken: true, completed: false }).populate(
        "serviceProvider"
      );
    } else if (status === "completed") {
      projects = await Project.find({ completed: true }).populate(
        "serviceProvider"
      );
    } else {
      return res.status(400).json({ message: "Invalid status parameter" });
    }

    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to fetch applicants for a specific project
router.get("/posted/:projectId/applicants", async (req, res) => {
  const { projectId } = req.params;

  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    console.log("Project ID: ", projectId);
    console.log("Project: ", project);
    res.json(project.applicants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to confirm applicant of a project
router.put("/posted/:projectId/confirm", async (req, res) => {
  const { projectId } = req.params;
  const { userID } = req.body;
  console.log("userID in backend: ", userID);
  try {
    const user = await FakeUser.findById(userID);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!user.takenProjects.includes(projectId)) {
      user.takenProjects.push(projectId);
      user.applyingProjects.pull(projectId);
      await user.save();
    }

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Confirm the applicant by removing others and updating the project document
    project.applicants = [];
    project.serviceProvider = userID;
    project.taken = true;
    await project.save();

    res.json({ project, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Remove applicant route
router.put("/posted/:projectId/remove", async (req, res) => {
  const { projectId } = req.params;
  const { userID } = req.body;
  console.log(projectId + "   " + userID);

  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    console.log("applicants: " + project.applicants);
    // Remove the applicant from the applicants array
    // project.applicants = project.applicants.filter((id) => id !== userID);
    project.applicants.pull(userID);
    console.log(project.applicants);
    await project.save();

    const user = await FakeUser.findById(userID);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.applyingProjects.includes(projectId)) {
      //remove projectId from applyingProjects
      user.applyingProjects.pull(projectId);
      await user.save();
    }
    res.json({ project, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/posted/:projectId", async (req, res) => {
  const { projectId } = req.params;

  try {
    const project = await Project.findByIdAndDelete(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// Route to accept the file for a project
router.post("/:projectId/accept-file", async (req, res) => {
  const { projectId } = req.params;
  const { userId } = req.body;
  console.log(userId);
  console.log("Accept file request received for project ID:", projectId); // Debug statement
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      console.log("Project not found for ID:", projectId); // Debug statement
      return res.status(404).json({ message: "Project not found" });
    }
    project.completed = true;
    project.fileAccepted = true;
    await project.save();
    const user = await FakeUser.findById(userId);
    user.takenProjects.pull(projectId);
    user.completedProjects.push(projectId);
    await user.save();
    console.log("File accepted for project ID:", projectId); // Debug statement
    res.json({ message: "File accepted" });
  } catch (error) {
    console.error("Error accepting file:", error);
    res.status(500).json({ message: error.message });
  }
});

// Route to reject all files for a project
router.post("/:projectId/reject-file", async (req, res) => {
  const { projectId } = req.params;
  const { userId } = req.body;
  console.log(userId);
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    project.uploadedFiles = [];
    project.completed = false;
    await project.save();

    // const user = await FakeUser.findById(userId);
    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // }
    // user.completedProjects.pull(projectId);
    // user.takenProjects.push(projectId);
    // await user.save();
    res.json({ project });
  } catch (error) {
    console.error("Error rejecting files:", error);
    res.status(500).json({ message: error.message });
  }
});

router.post("/:projectId/saveReview", async (req, res) => {
  try {
    const { projectId } = req.params;

    // Extract review data from the request body
    const {
      satisfactionRating,
      projectRating,
      projectFeedback,
      collaboratorRating,
      collaboratorFeedback,
    } = req.body;

    // Find the project by its ID
    const project = await Project.findById(projectId);

    // If the project is not found, return an error
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Update the project's review data
    project.review = {
      satisfactionRating,
      projectRating,
      projectFeedback,
      collaboratorRating,
      collaboratorFeedback,
    };

    // Save the updated project
    const updatedProject = await project.save();
    console.log("review saved");

    // Return the updated project with the review data
    res.json(updatedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
