import mongoose, { Model, Schema, Types } from "mongoose";
import type { IUserData } from "../interfaces/userDataInterface.js";

const DataSchema = new Schema(
  {},
  {
    _id: false,
    strict: false,
  }
);

const UserDataSchema: Schema<IUserData> = new Schema({
  userId: { type: Types.ObjectId, ref: "User" },
  data: {
    type: Map,
    of: [DataSchema],
  },
});

const UserData: Model<IUserData> = mongoose.model("UserData", UserDataSchema);
export default UserData;
