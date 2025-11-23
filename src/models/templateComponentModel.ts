import mongoose, { Model, Schema } from "mongoose";
import type { ITemplateComponent } from "../interfaces/templateComponent.js";

const templateComponentSchema: Schema<ITemplateComponent> = new Schema({
  title: { type: String },
  desc: { type: String },
  type: { type: String, enum: ["single", "list"], default: "single" },
  rank: { type: Number, default: 0 },
});

const TemplateComponent: Model<ITemplateComponent> = mongoose.model(
  "TemplateComponent",
  templateComponentSchema
);
export default TemplateComponent;
