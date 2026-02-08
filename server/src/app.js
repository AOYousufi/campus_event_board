import express from "express";
import router from "./routes/event.routes.js"
const app = express()

app.use(express.json())

app.get("/api/check", (req,res)=>{
    res.json ({ ok:true})
})




app.use ("/api/events" , router)


export default app;
