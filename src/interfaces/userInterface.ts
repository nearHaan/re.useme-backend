import type { Document, Types } from "mongoose";

export interface IUser extends Document {
  userId: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

/*
{
userid: 12345
data: {
  '5677': [
    {
      '1234': 'CEO',
      '567hghg ' : 'Facebook',
    },
    {
      '1234:title': 'CEO',
      '567':company' : 'Facebook',
    }
  ],
  '5677': [
    {
      '1234': 'CEO',
      '567hghg ' : 'Facebook',
    },
    {
      '1234:title': 'CEO',
      '567':company' : 'Facebook',
    }
  ],
}
  }
*/
