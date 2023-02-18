import ts, {NodeFlags} from 'typescript';
import fs from 'fs';

export const makeVariableInitializer = (
  name: string,
  to: ts.Expression,
  type: 'let' | 'const',
): ts.VariableDeclarationList => {
  const flag = type == 'let' ? NodeFlags.Let : NodeFlags.Const;

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

export const writeCodeToFile = (statements: ts.Statement[], file: string) => {
  fs.writeFileSync('test.ts', '');

  const resultFile = ts.createSourceFile(
    'someFileName.ts',
    '',
    ts.ScriptTarget.Latest,
    /*setParentNodes*/ false,
    ts.ScriptKind.TS,
  );

  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.LineFeed,
  });

  for (let statement of statements) {
    let result = printer.printNode(
      ts.EmitHint.Unspecified,
      statement,
      resultFile,
    );
    result += '\n';
    fs.appendFileSync(file, result);
  }
};
