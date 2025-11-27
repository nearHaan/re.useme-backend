import type { Request, Response } from "express";
import TemplateComponent from "../models/templateComponentModel.js";
import TemplateSubComponent from "../models/templateSubComponentModel.js";

interface SubComp {
  title: string;
  type: string;
  example: string;
}

interface TemplateEntry {
  title: string;
  meta: {
    desc?: string;
    type: string;
  };
  subComponents: Record<string, SubComp>;
}

// TODO: Make this query efficient. Currently O(n)
export const getDataTemplate = async (req: Request, res: Response) => {
  let dataObj: Record<string, TemplateEntry> = {};
  try {
    console.log("dataform...");
    const components = await TemplateComponent.find({}).sort({
      rank: 1,
      title: 1,
    });
    for (const component of components) {
      const compId = component._id.toString();

      dataObj[compId] = {
        title: component.title,
        meta: {
          desc: component.desc,
          type: component.type,
        },
        subComponents: {},
      };
      const subComponents = await TemplateSubComponent.find({
        parentId: component._id,
      }).sort({
        rank: 1,
        title: 1,
      });
      console.log(subComponents);
      for (const subComp of subComponents) {
        const subId = subComp._id.toString();
        dataObj[compId]!.subComponents[subId] = {
          title: subComp.title,
          type: subComp.type,
          example: subComp.example,
        };
      }
    }
    res.status(200).json({
      template: dataObj,
      userDetails: {
        "692740f422209091d5df45be": {
          "6927513e731ac7ff646b3ce0":
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
          "692750c0731ac7ff646b3cd5": "Farhaan",
          "692750ce731ac7ff646b3cd8": "Nizam",
          "69275125731ac7ff646b3cdd": "buhahahahah",
        },
        "6927415d22209091d5df45c3": [],
        "6927417d22209091d5df45c5": [],
      },
    });
  } catch (err: any) {
    res.status(500).json({ error: err });
  }
};
