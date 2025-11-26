import express, { type Express } from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import indexRoutes from "./routes/index.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express() as Express;

const allowedOrgins = ["http://localhost:5173", "https://reuseme.vercel.app"];
const corsOptions = {
  origin: (orgin: string | undefined, callback: Function) => {
    if (!orgin) return callback(null, true);
    if (allowedOrgins.includes(orgin)) return callback(null, true);
    return callback(new Error("Invalid orgin"));
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api", indexRoutes);
mongoose
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

export default app;
