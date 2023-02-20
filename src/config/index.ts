import { GenConfig } from "./types";

// typescript 5.0 beta -> const ProcedureList
export const makeConfig = <ProcedureList extends readonly string[]>(
  args: ProcedureList,
) => {
  type ProcedureItems = {
    [TItem in ProcedureList[number]]: TItem;
  };

  const transform: (args: ProcedureList) => ProcedureItems = (args) => {
    const ret = args.map((v) => ({
      [v]: v,
    }));

    const ret2: Record<string, string> = {};

    for (const i in Object.keys(ret)) {
      const itemKey = Object.values(ret[i])[0];
      ret2[itemKey] = itemKey;
    }

    return ret2 as ProcedureItems;
  };

  const useConfig = (
    func: (theme: ProcedureItems) => Omit<GenConfig, "procedures">,
  ) => {
    // TODO: get rid of this any type?
    const transformed: Record<string, any> = func(transform(args));
    transformed.procedures = args;
    return transformed as GenConfig;
  };

  return useConfig;
};
