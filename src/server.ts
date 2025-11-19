import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
