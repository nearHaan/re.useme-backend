import mongoose, { Model, Schema, Types } from "mongoose";
import type { ITemplateSubComponent } from "../interfaces/templateSubComponent.js";

const TemplateSubComponentSchema: Schema<ITemplateSubComponent> = new Schema({
  parentId: {
    type: Types.ObjectId,
    ref: "TemplateComponent",
    required: true,
  },
  title: { type: String, required: true },
  type: {
    type: String,
    enum: [
      "text",
      "photo",
      "number",
      "email",
      "url",
      "text-area",
      "date",
      "skill",
    ],
    default: "text",
  },
  example: { type: String },
  rank: { type: Number, default: 0 },
});

const TemplateSubComponent: Model<ITemplateSubComponent> = mongoose.model(
  "TemplateSubComponent",
  TemplateSubComponentSchema
);
export default TemplateSubComponent;
