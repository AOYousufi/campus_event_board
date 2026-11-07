import pkg from "pg";
import dotenv from "dotenv";

const ENV = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${ENV}` });

const { Pool } = pkg;
const config = {};

if (process.env.DATABASE_URL) {
  config.connectionString = process.env.DATABASE_URL;
}

if (ENV === "production") {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL must be configured in production");
  }
  config.ssl = { rejectUnauthorized: false };
}

// In development, pg can also use PGHOST, PGUSER, PGPASSWORD and PGDATABASE.
const db = new Pool(config);

export default db;
