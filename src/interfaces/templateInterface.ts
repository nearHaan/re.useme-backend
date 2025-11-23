import type { Document, Types } from "mongoose";

export interface ITemplate extends Document {
  templateId: Types.ObjectId;
  title: string;
  author: Types.ObjectId;
  thumbnail: string;
  ref: string;
}
