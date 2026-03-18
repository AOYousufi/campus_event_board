import express from "express";

import getAllEvents from "./controllers/getAllEvents.js";
import getEvent from "./controllers/getEventsById.controller.js";
import postEvent from "./controllers/createEvents.controller.js";
const app = express()

app.use(express.json())

app.get("/" , (req, res) => {
    res.send("Hello World")
})
app.get ("/api/events" ,getAllEvents )
app.get('/api/events/:id', getEvent)

app.post ('/api/events' , postEvent)
export default app;
