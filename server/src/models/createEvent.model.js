import db from '../db/index.js'


const createEvent = async (body) => {
  const {
    title,
    description = null,
    category = null,
    location_text = null,
    location_url = null,
    is_online = false,
    online_url = null,
    starts_at,
    ends_at = null,
    timezone = "Europe/London",
    status = "published",
    visibility = "public",
    capacity = null,
    is_recurring = false,
    recurrence_rule = null,
    recurrence_until = null,
  } = body;


  if (!title) {
    return Promise.reject({ status: 400, msg: "title is required" });
  }

  if (!starts_at) {
    return Promise.reject({ status: 400, msg: "starts_at is required" });
  }

  const query = `
    INSERT INTO events
      (title, description, category, location_text, location_url,
       is_online, online_url, starts_at, ends_at, timezone,
       status, visibility, capacity,
       is_recurring, recurrence_rule, recurrence_until)
    VALUES
      ($1,$2,$3,$4,$5,
       $6,$7,$8,$9,$10,
       $11,$12,$13,
       $14,$15,$16)
    RETURNING *;
  `;

  const values = [
    title,
    description,
    category,
    location_text,
    location_url,
    is_online,
    online_url,
    starts_at,
    ends_at,
    timezone,
    status,
    visibility,
    capacity,
    is_recurring,
    recurrence_rule,
    recurrence_until,
  ];

  const result = await db.query(query, values);
  return result.rows[0];
};

export default createEvent;