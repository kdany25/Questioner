import express from "express";

import {
  createuser,
  getAlluser,
  login,
  deleteuser,
  getspecificuser
} from "../../Controller/USerController.js"

import  { addUserValidation } from "../../helpers/validation/uservalidation";

const router = express.Router();

router.post("/signup",addUserValidation, createuser);


router.post("/login", login);

router.get("/users", getAlluser);



router.delete("/user/:id", deleteuser);

router.get('specUser/:id',getspecificuser)





export default router;
