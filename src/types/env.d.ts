declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PS_DATABASE_URL: string;
      DATABASE_URL: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_HOST: string;
      DB_NAME: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
