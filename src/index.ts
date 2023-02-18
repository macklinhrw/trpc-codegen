import ts, {factory as tsf} from 'typescript';
import {makeVariableInitializer, writeCodeToFile} from './utils';
import fs from 'fs';
import z from 'zod';
import {Prisma} from '@prisma/client';

const main = async () => {
  const d1 = tsf.createPropertyAssignment('test', tsf.createNumericLiteral(1));
  const obj = tsf.createObjectLiteralExpression([d1], true);
  const kVar = makeVariableInitializer('kVar', obj, 'let');

  // const dImport = tsf.createImportDeclaration

  const s = tsf.createVariableStatement(undefined, kVar);

  const statements = [s];
  writeCodeToFile(statements, 'test.ts');
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
      type: 'kysely',
    },
  },
};

main();
