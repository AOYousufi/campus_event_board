import pkg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: ".env.production" });

const { Pool } = pkg;

const ENV = process.env.NODE_ENV || "development";

const config = {};

if (ENV === "production") {
  config.connectionString = process.env.DATABASE_URL;
  config.ssl = {
    rejectUnauthorized: false,
  };
} else {
  config.connectionString =
    "postgresql://sultandara:password123@localhost:5432/campus_event_board";
}

const db = new Pool(config);

export default db;