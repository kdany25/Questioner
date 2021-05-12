import express  from "express"

import { createmeeting ,getspecificmeeting , getallmeeting ,deleteMeeting} from "../../Controller/meetupController.js"

const router = express.Router();


router.post("/createmeeting",createmeeting)

router.get("/meetings",getallmeeting)

router.get ("/meetup/:id",getspecificmeeting)

router.delete("/meeting/:id", deleteMeeting)

export default router ;
