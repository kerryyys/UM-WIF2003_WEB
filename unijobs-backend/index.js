import e from "express";
import { PORT, mongoDBConnection } from "./config.js";
import mongoose, { mongo } from "mongoose";
import { Job } from "./models/jobsModel.js";
const app = e();

// IN CASE ANYONE IS HERE, IGNORE THESE, THESE ARE JUST CODE FOR MY LEARNING
app.use(e.json());

app.post("/jobs", async (req, res) => {
  try {
    console.log(req.body);
    const newJob = {
      requester: req.body.requester,
      name: req.body.name,
      deadline: new Date(req.body.deadline),
      requiredSkills: req.body.requiredSkills,
    };
    const job = await Job.create(newJob).then((job) =>
      console.log("Job created: ", job)
    );
    return res.status(201).send(job);
  } catch (error) {
    console.log(error.message);
    //When send is used with object, we are returning a JSON
    res.status(500).send({ message: error.message });
  }
});
app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find({});
    return res.status(200).json({
      count: jobs.length,
      data: jobs,
    });
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
