import type { Request, Response } from "express";
import TemplateComponent from "../models/templateComponentModel.js";
import TemplateSubComponent from "../models/templateSubComponentModel.js";
import mongoose from "mongoose";

export const addSubComponent = async (req: Request, res: Response) => {
  const { parentId, title, type, example, rank } = req.body;

  if (!parentId || !title) {
    return res.status(400).json({
      success: false,
      message: "Sub Component addition failed",
      error: "Parent ID and Title of the component is required",
    });
  }
  try {
    if (!mongoose.Types.ObjectId.isValid(parentId)) {
      return res.status(400).json({
        success: false,
        message: "Sub Component addition failed",
        error: "Parent ID invalid",
      });
    }
    const parent = await TemplateComponent.findById(parentId);
    console.log("parent: ", parent);
    if (!parent) {
      return res.status(400).json({
        success: false,
        message: "Sub Component addition failed",
        error: "Parent ID invalid or does not exist",
      });
    }

    const newComponent = new TemplateSubComponent({
      parentId,
      title,
      type,
      example,
      rank,
    });
    const savedComp = await newComponent.save();
    res.status(201).json(savedComp);
  } catch (err: any) {
    console.log("Error Code: ", err.code);
    return res.status(500).json({
      success: false,
      message: "Sub Component addition failed",
      error: err.message,
    });
  }
};
