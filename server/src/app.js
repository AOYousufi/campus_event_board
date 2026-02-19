import express from "express";

import getAllEvents from "./controllers/getAllEvents.js";
import getEvent from "./controllers/getEventsById.controller.js";
const app = express()

app.use(express.json())


app.get ("/api/events" ,getAllEvents )
app.get('/api/events/:id', getEvent)

export default app;
