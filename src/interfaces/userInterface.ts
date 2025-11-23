import type { Document, Types } from "mongoose";

export interface IUser extends Document {
  userId: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

/*
data: {
  '1234:PersonalInfo': {
    '1234:name': 'Farhaan',
    '1234:age': 20,
  },
  '5677:Experience': [
    {
      '1234:title': 'CEO',
      '567':company' : 'Facebook',
    },
    {
      '1234:title': 'CEO',
      '567':company' : 'Facebook',
    }
  ]
}
*/
