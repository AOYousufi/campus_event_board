import getEvents from "../models/getAllEvents.js";




function getAllEvents (req, res, next) {
getEvents().then((events)=>{
    res.status(200).send({events})

}


).catch((err)=>{
    res.status(500).send({error: "Failed to retrieve events"});
})
}



export default getAllEvents;