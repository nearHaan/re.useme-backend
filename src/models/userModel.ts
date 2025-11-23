import mongoose, { Model, Schema } from "mongoose";
import type { IUser } from "../interfaces/userInterface.js";

const userSchema: Schema<IUser> = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const User: Model<IUser> = mongoose.model("User", userSchema);
export default User;
