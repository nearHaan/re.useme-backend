import type { Types } from "mongoose";

export interface IDataObject {
  id: Types.ObjectId;
  value: string;
}

export interface IData {
  id: Types.ObjectId;
  dataObjects: IDataObject | IDataObject[];
}

export interface IUserData {
  dataId: Types.ObjectId;
  userId: Types.ObjectId;
  data: IData;
}
