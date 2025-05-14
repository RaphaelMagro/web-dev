import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "~/env";
import * as schema from "./schema";

// Fix for Neon connection pooling
const connectionString = env.DATABASE_URL;
const client = postgres(connectionString, { 
  prepare: false,
  ssl: true,
});

export const db = drizzle(client, { schema });
