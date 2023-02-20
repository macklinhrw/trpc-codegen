import { GenConfig } from "./types";

// typescript 5.0 beta -> const ProcedureList
export const makeConfig = <ProcedureList extends readonly string[]>(
  pList: ProcedureList,
) => {
  type ProcedureItems = {
    [TItem in ProcedureList[number]]: TItem;
  };

  const transform: (pList: ProcedureList) => ProcedureItems = (pList) => {
    const pMap = pList.map((v) => ({
      [v]: v,
    }));

    const pItems: Record<string, string> = {};

    for (const i in Object.keys(pMap)) {
      const itemKey = Object.values(pMap[i])[0];
      pItems[itemKey] = itemKey;
    }

    return pItems as ProcedureItems;
  };

  const useConfig = (
    func: (procedures: ProcedureItems) => Omit<GenConfig, "procedures">,
  ) => {
    // TODO: get rid of this any type?
    const transformed: Record<string, any> = func(transform(pList));
    transformed.procedures = pList;
    return transformed as GenConfig;
  };

  return useConfig;
};
