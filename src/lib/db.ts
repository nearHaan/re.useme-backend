import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(process.env.DB_URL as string);
    isConnected = db.connections[0]?.readyState === 1;
    console.log("Connected to database successfully");
  } catch (err: any) {
    console.error("DB Connection error: ", err);
  }
}
