import createEvent from "../models/createEvent.model";


const postEvent = (req, res, next) => {
  createEvent(req.body)
    .then((event) => {
      res.status(201).send({ event });
    })
    .catch((err)=>{
    res.status(500).send({error: "Failed to retrieve events"});
})
}

export default postEvent;