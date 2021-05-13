import express from "express";

import {
  createquestion,
  deletequestion,
  getallquestion,
  getspecificquestion,
  upvote,
  downvote,
} from "../../Controller/QuestionerController.js";
import { questionvalidation} from "../../helpers/validation/uservalidation"

const router = express.Router();

router.post("/createquestion",questionvalidation, createquestion);

router.get("/questioners", getallquestion);

router.get("/questioners/:id", getspecificquestion);

router.delete("/questioner/:id", deletequestion);

router.patch("/questUpvote/:id", upvote);

router.patch("/questdownvote/:id", downvote);

export default router;
