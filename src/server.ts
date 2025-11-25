import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserData from "./models/userDataModel.js";
import User from "./models/userModel.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome");
});

mongoose
  .connect(process.env.DB_URL as string)
  .then(async () => {
    console.log("Connected to database successfully");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
