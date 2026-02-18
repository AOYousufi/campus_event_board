import app from "./app.js"
import db from "./db/index.js";



const port = 3000


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

db.query("SELECT NOW()")
  .then(res => console.log("DB connected:", res.rows[0]))
  .catch(err => console.error("DB error:", err));