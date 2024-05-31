import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import projectDetailsRoute from "./routes/projectDetailsRoute.js";
import projectsRouter from "./routes/projects.js";
import freelanceInfoRoute from "./routes/freelanceInfoRoute.js";
import reviewProjectRoute from "./routes/reviewProjectRoute.js";
import postRoute from "./routes/postRoute.js";
import usersRoute from "./routes/usersRoute.js";
import paymentRoute from "./routes/paymentRoute.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Middleware for parsing request body
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Middleware for handling CORS POLICY
app.use(cors());

// Use body-parser
app.use(bodyParser.json());

app.use("/recruite", projectDetailsRoute);
app.use("/recruite", reviewProjectRoute);
app.use("/freelancers", freelanceInfoRoute);
app.use("/projects", projectsRouter);
app.use("/community", postRoute);
app.use("/users", usersRoute);
app.use("/payment", paymentRoute);

app.use("/auth", authRoute);

app.get("*", (req, res) => {
  console.log(req);
  res.send("page is not here");
});

// Log every incoming request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.post("/users", (req, res) => {});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

// Start the server
app.listen(PORT || 5050, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(cookieParser());
