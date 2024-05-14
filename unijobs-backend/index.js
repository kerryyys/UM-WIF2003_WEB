import e from "express";
import { PORT, mongoDBConnection } from "./config.js";
import mongoose, { mongo } from "mongoose";
import { Project } from "./models/projectModel.js";
import cors from "cors";
import projectsRouter from "./routes/projects.js";

const app = e();
app.use(e.json());
app.use(cors());
app.use("/projects", projectsRouter);

app.get("*", (req, res) => {
  console.log(req);
  res.send("page is not here");
});
app.post("*", (req, res) => {
  console.log(req);
  res.send("page is not here");
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
