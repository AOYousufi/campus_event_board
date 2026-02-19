import db  from '../db/index.js'


function getEventsById (id) {

    return db.query('SElect * from events where id = $1', [id]).then(({rows})=>{
        return rows;
    })  
}


export default getEventsById;