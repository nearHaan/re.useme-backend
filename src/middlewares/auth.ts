import type { NextFunction, Response } from "express";
import type { AuthenticatedRequest } from "../lib/types.js";
import { verifyToken } from "../utils/jwt.js";
import User from "../models/userModel.js";

export const authenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Autherization Failed",
      error: "Missing or invalid autherization header",
    });
  }

  const accessToken = authHeader.split(" ")[1];
  if (!accessToken) {
    return res.status(401).json({
      success: false,
      message: "Autherization Failed",
      error: "Missing access ",
    });
  }

  try {
    const payload = await verifyToken(accessToken);
    if (!payload) {
      return res.status(401).json({
        success: false,
        message: "Autherization Failed",
        error: "Invalid or expired token",
      });
    }

    const user = await User.findById(payload.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Autherization failed",
        error: "User not found",
      });
    }
    req.user = user;
    return next();
  } catch (err: any) {
    console.error("Autherization error: ", err);
    return res.status(500).json({
      success: false,
      message: "Autherization failed",
      error: "Internal server error",
    });
  }
};
