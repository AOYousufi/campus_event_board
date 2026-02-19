import pkg from "pg"

const {Pool} =pkg;


const db = new Pool({
    connectionString : "postgresql://sultandara:password123@localhost:5432/campus_event_board"
})

export default db;