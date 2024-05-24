import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import projectDetailsRoute from "./routes/projectDetailsRoute.js";
import projectsRouter from "./routes/projects.js";
import freelanceInfoRoute from "./routes/freelanceInfoRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());

app.use("/recruite", projectDetailsRoute);
app.use("/freelancers", freelanceInfoRoute);
app.use("/projects", projectsRouter);

app.get("*", (req, res) => {
  console.log(req);
  res.send("page is not here dumbass");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
