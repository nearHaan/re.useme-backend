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

export const getTemplate = async () => {
  let dataObj: Record<string, TemplateEntry> = {};
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

  return dataObj || {};
};
