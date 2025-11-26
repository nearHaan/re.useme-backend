import type { Request, Response } from "express";
import TemplateComponent from "../models/templateComponentModel.js";

export const addComponent = async (req: Request, res: Response) => {
  const { title, desc, type, rank } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Component addition failed",
      error: "Title of the component required",
    });
  }
  try {
    const newComponent = new TemplateComponent({
      title,
      desc,
      type,
      rank,
    });
    const savedComp = await newComponent.save();
    res.status(201).json(savedComp);
  } catch (err: any) {
    console.log("Error Code: ", err.code);
    if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Component addition failed",
        error: "Title name already used",
      });
    }
    return res.status(500).json({
      success: false,
      message: "Component addition failed",
      error: err.message,
    });
  }
};
