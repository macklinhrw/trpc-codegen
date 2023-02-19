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
  //const res = await db.selectFrom('Book').innerJoin((eb) => eb.selectFrom('_BookToModule').whereRef('A', '=', 'B').selectAll().executeTakeFirst(), (join) => join.onTrue()).selectAll().executeTakeFirst()
  // const res = await db
  //   .selectFrom("Book")
  //   .innerJoin("Route as r", "r.id", "Book.routeId")
  //   .selectAll()
  //   .execute();

  // db.selectFrom("Book").innerJoin(
  //   (eb) => eb.selectFrom("Route as r").whereRef("", "=", ""),
  //   (j) => j.onTrue(),
  // );

  db.destroy();
};

main();
