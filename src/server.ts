import mongoose from "mongoose";
import app from "./app.js";
import { connectDB } from "./lib/db.js";

const PORT = process.env.PORT || 3000;

const startup = async () => {
  await connectDB();

  if (!process.env.PRODUCTION) {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  }
};
startup();
export default app;
