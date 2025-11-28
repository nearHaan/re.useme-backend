import type { Response } from "express";
import type { AuthenticatedRequest } from "../lib/types.js";
import UserData from "../models/userDataModel.js";

export const updateUserDetails = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const key = req.body.key;
  const data = req.body.data;
  const userId = req.user?.id;

  try {
    const update = await UserData.findOneAndUpdate(
      { userId: userId },
      { $set: { [`data.${key}`]: data } },
      { upsert: true, new: true }
    );
    return res.status(200).json({
      success: true,
      data: update,
    });
  } catch (err: any) {
    console.error("Error: ", err);
    return res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
};
