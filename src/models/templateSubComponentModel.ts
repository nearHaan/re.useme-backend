import { Schema, Types } from "mongoose";
import type { ITemplateSubComponent } from "../interfaces/templateSubComponent.js";

const TemplateSubComponentSchema: Schema<ITemplateSubComponent> = new Schema({
  parentId: { type: Types.ObjectId, ref: "TemplateComponent", required: true },
  title: { type: String },
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
    required: true,
  },
  example: { type: String },
  rank: { type: Number, default: 0 },
});
