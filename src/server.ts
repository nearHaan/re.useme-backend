import mongoose from "mongoose";
import app from "./app.js";
import { connectDB } from "./lib/db.js";

const PORT = process.env.PORT || 3000;

async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};

export default app;
