import ts, { factory as tsf, SyntaxKind } from "typescript";
import {
  makeBindingListImport,
  makeNamespaceImport,
  makeVariableInitializer,
  writeCodeToFile,
} from "./utils";
import {} from "kysely";

const main = async () => {
  // const d1 = tsf.createPropertyAssignment("test", tsf.createNumericLiteral(1));
  // const obj = tsf.createObjectLiteralExpression([d1], true);
  // const kVar = makeVariableInitializer("let", "kVar", obj);
  // const dImport = tsf.createImportDeclaration
  // const s = tsf.createVariableStatement(undefined, kVar);
  // const statements = [s];
  // writeCodeToFile(statements, "test.ts");
  // const values = Object.values;

  const trpcImport = makeNamespaceImport("trpc", "@trpc/server");
  const procs = makeBindingListImport(["publicProcedure", "router"], "./trpc");
  writeCodeToFile([trpcImport, procs], "./src/server/generated.ts");
};

interface EndpointConfig {
  type: string;
}

interface GenConfig {
  endpoints: {
    [key: string]: EndpointConfig;
  };
}

const config: GenConfig = {
  endpoints: {
    test: {
      type: "kysely",
    },
  },
};

main();
