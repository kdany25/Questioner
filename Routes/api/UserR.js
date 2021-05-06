import express from 'express'

import {createuser, getAlluser, login} from '../../Controller/USerController.js'

const router = express.Router();


router.post("/signup",createuser)

router.post("/login",login)

router.get("/users",getAlluser)

export default router;