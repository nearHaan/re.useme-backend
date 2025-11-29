import type { Response } from "express";
import type { AuthenticatedRequest } from "../lib/types.js";
import { getUserDetails } from "./data.js";
import { getTemplate } from "./template-create.js";

export const getResumeDetails = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const userId = req.user?.id;

  try {
    const dataObj = await getTemplate();
    const userDetails = await getUserDetails(userId);

    return res.status(200).json({
      success: true,
      template: dataObj,
      userDetails: userDetails.data ?? {},
    });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Error fetching details",
      error: err,
    });
  }
};
