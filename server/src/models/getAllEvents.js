import db from '../db/index.js'


function getEvents () {

       return db.query("SELECT * FROM events").then(({rows})=>{
        return rows;
       })
}

export default getEvents;