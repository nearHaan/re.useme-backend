import express, { type Express } from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import indexRoutes from "./routes/index.js";
import cors from "cors";

dotenv.config();

const app = express() as Express;

const allowedOrgins = ["http://localhost:5173", "https://reuseme.vercel.app"];
const corsOptions = {
  origin: (orgin: string | undefined, callback: Function) => {
    if (!orgin) return callback(null, true);
    if (allowedOrgins.includes(orgin)) return callback(null, true);
    return callback(new Error("Invalid orgin"));
  },
  credentials: true,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
  ],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api", indexRoutes);

export default app;
