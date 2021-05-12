import express from "express";

import {
  createrRsvp,
  deletersvp,
  getallresponse,
  getepcificRsvp,
} from "../../Controller/rspvController.js";
const router = express.Router();

router.post("/creatersvp", createrRsvp);

router.get("/Rsvp", getallresponse);

router.get("/Rsvp/:id", getepcificRsvp);

router.delete("/deletersvp/:id", deletersvp);

export default router;


    
 