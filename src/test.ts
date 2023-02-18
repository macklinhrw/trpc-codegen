import ts from "typescript";

// Getting 'let'
// createVariableDeclarationList
// pass the createVariableDeclaration in list
// use flag to apply let keyword

const test = async () => {
  let file = "src/server/_app.ts";
  let program = ts.createProgram([file], { allowJs: true });
  const sourceFile = program.getSourceFile(file);
  console.log(sourceFile);
  // console.log(JSON.stringify(sourceFile, null, 2));
};
test();
