import mongoose from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

async () => {
  await mongoose
    .connect(process.env.DB_URL as string)
    .then(async () => {
      console.log("Connected to database successfully");
      if (!process.env.PRODUCTION) {
        app.listen(PORT, () => {
          console.log(`Server running on http://localhost:${PORT}`);
        });
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

export default app;
