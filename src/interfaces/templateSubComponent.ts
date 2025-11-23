import type { Document, Types } from "mongoose";

export interface ITemplateSubComponent extends Document {
  componentId: Types.ObjectId;
  parentId: Types.ObjectId;
  title: string;
  type:
    | "text"
    | "photo"
    | "number"
    | "email"
    | "url"
    | "text-area"
    | "date"
    | "skill";
  example: string;
  rank: number;
}
