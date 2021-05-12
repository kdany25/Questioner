import express from "express";

import {
  createuser,
  getAlluser,
  login,
  deleteuser,
  getspecificuser
} from "../../Controller/USerController.js";

const router = express.Router();

router.post("/signup", createuser);

router.post("/login", login);

router.get("/users", getAlluser);

router.delete("/user/:id", deleteuser);

router.get('specUser/:id',getspecificuser)




export default router;
