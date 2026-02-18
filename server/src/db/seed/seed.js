import format from "pg-format";
import db from "../index.js";

const seed = ( data ) => {
  return db
    .query(`CREATE EXTENSION IF NOT EXISTS pgcrypto;`)
    .then(() => db.query(`DROP TABLE IF EXISTS events;`))
    .then(() => db.query(`DROP TABLE IF EXISTS users;`))
    .then(() => {
      const usersTablePromise = db.query(`
        CREATE TABLE users (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          display_name TEXT,
          email TEXT,
          password_hash TEXT,
          role TEXT,
          created_at TIMESTAMPTZ DEFAULT NOW()
        );
      `);

      const eventsTablePromise = db.query(`
        CREATE TABLE events (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

          title TEXT NOT NULL,
          description TEXT,
          category TEXT,

          location_text TEXT,
          location_url TEXT,

          is_online BOOLEAN DEFAULT false,
          online_url TEXT,

          starts_at TIMESTAMPTZ NOT NULL,
          ends_at TIMESTAMPTZ,
          timezone TEXT DEFAULT 'Europe/London',

          created_by UUID REFERENCES users(id),

          status TEXT DEFAULT 'published',
          visibility TEXT DEFAULT 'public',

          capacity INT,

          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW(),
          deleted_at TIMESTAMPTZ,

          is_recurring BOOLEAN DEFAULT false,
          recurrence_rule TEXT,
          recurrence_until TIMESTAMPTZ
        );
      `);
      

      return Promise.all([usersTablePromise, eventsTablePromise]);
      
    })
    
    .then(() => {
      const insertEventsQueryStr = format(
        `
        INSERT INTO events
          (title, description, category, location_text, location_url, is_online,
           online_url, starts_at, ends_at, timezone, status, visibility,
           capacity, is_recurring, recurrence_rule, recurrence_until)
        VALUES %L
        RETURNING *;
        `,
        data.map((e) => [
          e.title,
          e.description || null,
          e.category || null,
          e.location_text || null,
          e.location_url || null,
          e.is_online ?? false,
          e.online_url || null,
          e.starts_at,
          e.ends_at || null,
          e.timezone || "Europe/London",
          e.status || "published",
          e.visibility || "public",
          e.capacity ?? null,
          e.is_recurring ?? false,
          e.recurrence_rule || null,
          e.recurrence_until || null,
        ])
      );

      return db.query(insertEventsQueryStr);
    });
};

export default seed;
