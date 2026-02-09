import {Router} from "express"


const router = Router()


router.get("/test" , (req, res )=>{
    res.json ({response : true})
})

export default router;