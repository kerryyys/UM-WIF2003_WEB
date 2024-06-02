import express from "express";
import  User  from "../models/userModel.js";
import multer from "multer";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Add data
router.post("/", upload.single("profilePic"), async (req, res) => {
  try {
   
    const newUser = {
      profilePic: req.file
        ? { data: req.file.buffer, contentType: req.file.mimetype }
        : undefined,
    };
    const user = await User.create(newUser);
    return res.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Retrieve all data
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Retrieve by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (user && user.profilePic && user.profilePic.data) {
      user.profilePic.data = user.profilePic.data.toString("base64");
    }

    return res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Endpoint to fetch a specific experience by userId and experienceId
router.get("/:userId/experience/:experienceId", async (req, res) => {
  const { userId, experienceId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const experience = user.experience.id(experienceId);
    if (!experience) {
      return res.status(404).send("Experience not found");
    }

    res.status(200).json(experience);
  } catch (error) {
    console.error("Error fetching experience:", error);
    res.status(500).send("Internal server error");
  }
});

// Update user data
router.put("/:id", upload.single("profilePic"), async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      city: req.body.city,
      state: req.body.state,
      role: req.body.role,
    };

    console.log("updateData:", updateData);

    if (req.body.profilePic && req.body.profilePicContentType) {
      updateData.profilePic = {
        data: Buffer.from(req.body.profilePic, "base64"),
        contentType: req.body.profilePicContentType,
      };
    }

    const result = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .send({ message: "Information updated successfully", data: result });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Add experience to user
router.put("/:id/addExperience", async (req, res) => {
  const { id } = req.params;
  const newExperience = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    user.experience.push(newExperience);
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    console.error("Error adding new experience:", error);
    res.status(500).send("Internal server error");
  }
});

// Edit specific experience for user
router.put("/:userId/editExperience/:experienceId", async (req, res) => {
  const { userId, experienceId } = req.params;
  const updatedExperience = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const experienceIndex = user.experience.findIndex(
      (exp) => exp._id.toString() === experienceId
    );
    if (experienceIndex === -1) {
      return res.status(404).send("Experience not found");
    }

    user.experience[experienceIndex] = {
      ...user.experience[experienceIndex].toObject(),
      ...updatedExperience,
    };
    await user.save();

    res.status(200).send(user);
  } catch (error) {
    console.error("Error updating experience:", error);
    res.status(500).send("Internal server error");
  }
});

export default router;
