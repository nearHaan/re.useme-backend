import type { Request, Response } from "express";
import TemplateComponent from "../models/templateComponentModel.js";

export const getDataTemplate = async (req: Request, res: Response) => {
  try {
    console.log("dataform...");
    const components = await TemplateComponent.find({}).sort({ rank: 1 });
    console.log(components);
    for (let key in components) {
      console.log(components[key]);
    }
    res.json(components);
  } catch (err: any) {
    res.json({ error: err });
  }
};
