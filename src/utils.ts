import ts, { NodeFlags, factory as tsf } from "typescript";
import fs from "fs";

// i.e., `let name = "test"`
export const makeVariableInitializer = (
  type: "let" | "const",
  name: string,
  to: ts.Expression,
): ts.VariableDeclarationList => {
  const flag = type == "let" ? NodeFlags.Let : NodeFlags.Const;

  const id = ts.factory.createIdentifier(name);
  const varDec = ts.factory.createVariableDeclaration(
    id,
    undefined,
    undefined,
    to,
  );
  const varDecList = ts.factory.createVariableDeclarationList([varDec], flag);
  return varDecList;
};

// createImportDeclaration
// createImportClause
// createNamedImports
// createImportSpecifier

// i.e, `import * as name from "moduleName"`
export const makeNamespaceImport = (
  name: string,
  moduleName: string,
): ts.ImportDeclaration => {
  // const isTrpc = tsf.createImportSpecifier(
  //   false,
  //   undefined,
  //   tsf.createIdentifier("trpc"),
  // );
  // const nbTrpc = tsf.createNamedImports([isTrpc]);

  const impNsp = tsf.createNamespaceImport(tsf.createIdentifier(name));
  const impCl = tsf.createImportClause(false, undefined, impNsp);
  const impDec = tsf.createImportDeclaration(
    undefined,
    impCl,
    tsf.createStringLiteral(moduleName),
    undefined,
  );

  return impDec;
};

// i.e., `import { name1, name2, ... } from "moduleName"
export const makeBindingListImport = (
  names: string[],
  moduleName: string,
): ts.ImportDeclaration => {
  const impSps: ts.ImportSpecifier[] = [];
  for (const name of names) {
    const impSp = tsf.createImportSpecifier(
      false,
      undefined,
      tsf.createIdentifier(name),
    );
    impSps.push(impSp);
  }
  const impNm = tsf.createNamedImports(impSps);
  const impCl = tsf.createImportClause(false, undefined, impNm);
  const impDec = tsf.createImportDeclaration(
    undefined,
    impCl,
    tsf.createStringLiteral(moduleName),
    undefined,
  );

  return impDec;
};

export const writeCodeToFile = (statements: ts.Statement[], file: string) => {
  fs.writeFileSync(file, "");

  const resultFile = ts.createSourceFile(
    "someFileName.ts",
    "",
    ts.ScriptTarget.Latest,
    /*setParentNodes*/ false,
    ts.ScriptKind.TS,
  );

  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.LineFeed,
  });

  for (const statement of statements) {
    let result = printer.printNode(
      ts.EmitHint.Unspecified,
      statement,
      resultFile,
    );
    result += "\n";
    fs.appendFileSync(file, result);
  }
};
