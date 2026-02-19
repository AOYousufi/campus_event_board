


import getEventsById from "../models/getEventsById.model.js";



function getEvent ( req, res, next) {
    const id = req.params.id;
    getEventsById(id).then((event)=>{
        if (!event || event.length === 0) {
            res.status(404).send({error: "Event not found"});
        } else {
            res.status(200).send({event: event[0]});
        }
    }).catch((err)=>{
        res.status(500).send({error: "Failed to retrieve event"});
    })
}   

export default getEvent;