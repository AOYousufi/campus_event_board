import pkg from "pg"

const {Pool} =pkg;


const pool = new Pool({
    connectionString : "postgresql://admin_1:password123@localhost:5432/campus_event_board"
})

export default pool;