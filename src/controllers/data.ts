import type { Response } from "express";
import type { AuthenticatedRequest } from "../lib/types.js";
import UserData from "../models/userDataModel.js";
import { getTemplate } from "./template-create.js";

export const getUserDetails = async (userId: string) => {
  return (await UserData.findOne({ userId: userId })) || { data: {} };
};

// TODO: Make this query efficient. Currently O(n)
export const getTemplateAndDetails = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const userId = req.user?.id;
  try {
    console.log("dataform...");

    const user = await getUserDetails(userId);
    const dataObj = await getTemplate();
    res.status(200).json({
      template: dataObj,
      userDetails: user?.data,
    });
  } catch (err: any) {
    res.status(500).json({ error: err });
  }
};
