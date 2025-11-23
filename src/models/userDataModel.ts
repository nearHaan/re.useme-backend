import mongoose, { Model, Schema, Types } from "mongoose";
import type {
  IData,
  IDataObject,
  IUserData,
} from "../interfaces/userDataInterface.js";

const DataObjectSchema: Schema<IDataObject> = new Schema({
  id: { type: Types.ObjectId, ref: "TemplateSubComponent" },
  value: { type: String, default: "" },
});

const DataSchema: Schema<IData> = new Schema({
  id: { type: Types.ObjectId, ref: "TemplateComponent" },
  dataObjects: [DataObjectSchema],
});

const UserDataSchema: Schema<IUserData> = new Schema({
  userId: { type: Types.ObjectId, ref: "User" },
  data: [DataSchema],
});

const UserData: Model<IUserData> = mongoose.model("UserData", UserDataSchema);
export default UserData;
