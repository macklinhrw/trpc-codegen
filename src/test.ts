import ts, { SyntaxKind } from "typescript";

// Getting 'let'
// createVariableDeclarationList
// pass the createVariableDeclaration in list
// use flag to apply let keyword

const test = async () => {
  let file = "src/server/_app.ts";
  let program = ts.createProgram([file], { allowJs: true });
  const sourceFile = program.getSourceFile(file);
  // console.log(sourceFile?.statements);
  const mappedKind: Map<number, string> = new Map();
  const kindKeys = Object.values(SyntaxKind);
  kindKeys.map((k) => {
    if (typeof k === "number") {
      mappedKind.set(k, SyntaxKind[k]);
    }
  });

  console.log(sourceFile?.statements);
  if (sourceFile) {
    ts.forEachChild(sourceFile, (node) => {
      console.log(mappedKind.get(node.kind), node.kind);
    });
  }
  // console.log(JSON.stringify(sourceFile, null, 2));
};
test();
