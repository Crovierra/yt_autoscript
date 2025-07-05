import express from "express"
import { changePremium } from "../controller/memberController.js"
import verifyToken from "../middleware/authenticateUser.js"

const router = express.Router()

router.put("/premium", verifyToken, changePremium)

export default router