import express from "express";

import {
  createrRsvp,
  deletersvp,
  getallresponse,
  getepcificRsvp,
} from "../../Controller/rspvController.js";

import {rsvpvalidation } from "../../helpers/validation/uservalidation"
const router = express.Router();

router.post("/creatersvp", rsvpvalidation, createrRsvp);

router.get("/Rsvp", getallresponse);

router.get("/Rsvp/:id", getepcificRsvp);

router.delete("/deletersvp/:id", deletersvp);

export default router;


    
 

