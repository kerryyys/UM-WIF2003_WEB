const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");
const app = express();
const { MONGO_URL, PORT } = process.env;

// Middleware setup
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json());

// MongoDB connection
mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);  // Exit the process with a failure code
  });

// Start the server
const port = PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use(cookieParser());
app.use("/", authRoute);