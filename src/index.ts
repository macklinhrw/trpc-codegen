import { factory as tsf } from "typescript";
import {
  makeBindingListImport,
  makeNamespaceImport,
  makeVariableInitializer,
  writeCodeToFile,
} from "./utils/utils";
import {} from "kysely";
import { Router } from "@trpc/server/dist/deprecated/router";
import { GenConfig } from "./config/types";
import KyselyAdapter from "./adapters/kysely";
import { makeConfig } from "./config";

// useful:
// createArrowFunction

const main = async (config: GenConfig) => {
  // const d1 = tsf.createPropertyAssignment("test", tsf.createNumericLiteral(1));
  // const obj = tsf.createObjectLiteralExpression([d1], true);
  // const kVar = makeVariableInitializer("let", "kVar", obj);
  // const s = tsf.createVariableStatement(undefined, kVar);
  const endpointsList = Object.keys(config.endpoints);

  const trpcImport = makeNamespaceImport("trpc", "@trpc/server");
  const procs = makeBindingListImport(
    [...config.procedures, "router"],
    "./trpc",
  );
  writeCodeToFile([trpcImport, procs], "./src/server/generated.ts");
};

// Typescript 5.0 -> will no longer need `as const`
const config = makeConfig(["publicProcedure"] as const)((procedures) => ({
  endpoints: {
    procedure: { crud: true, procedure: procedures.publicProcedure },
  },
  adapter: KyselyAdapter,
}));
console.log(config);
// main(config);
