import type { Types } from "mongoose";

export interface IUserData {
  dataId: Types.ObjectId;
  userId: Types.ObjectId;
  data: Object;
}
