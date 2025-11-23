import type { Document, Types } from "mongoose";

export interface ITemplateComponent extends Document {
  componentId: Types.ObjectId;
  title: string;
  desc: string;
  type: "single" | "list";
  rank: number;
}
