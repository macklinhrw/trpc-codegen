import dotenv from "dotenv";
import { Kysely, MysqlDialect, sql } from "kysely";
import { DB, User } from "./types";
import { createPool } from "mysql2";

dotenv.config();

const db = new Kysely<DB>({
  dialect: new MysqlDialect({
    pool: createPool({
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      ssl: { rejectUnauthorized: true },
    }),
  }),
});

const main = async () => {
  // const res = await db
  //   .selectFrom("Topic_Page")
  //   .innerJoin("Route as r", "r.id", "Topic_Page.routeId")
  //   .selectAll()
  //   .executeTakeFirst();

  db.destroy();
};

main();
