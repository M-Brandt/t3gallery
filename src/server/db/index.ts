import postgres from "postgres";

import { env } from "~/env";

import { neon } from "@neondatabase/serverless";

import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const conn = globalForDb.conn ?? postgres(env.POSTGRES_URL);
if (env.NODE_ENV !== "production") globalForDb.conn = conn;
const sql = neon(process.env.POSTGRES_URL!);

export const db = drizzle(sql, { schema });
