import mongoose, { Model, Schema, Types } from "mongoose";
import type { ITemplate } from "../interfaces/templateInterface.js";

const TemplateSchema: Schema<ITemplate> = new Schema({
  title: { type: String },
  author: { type: Types.ObjectId, ref: "User", required: true },
  thumbnail: { type: String, default: "" },
  ref: { type: String, required: true },
});

const Template: Model<ITemplate> = mongoose.model("Template", TemplateSchema);
export default Template;
