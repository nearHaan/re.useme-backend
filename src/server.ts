import express from "express";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome");
});

mongoose
  .connect("")
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
