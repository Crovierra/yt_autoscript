import express from "express"
import { changePassword, changeUserInfo } from "../controller/userController.js"
import verifyToken from "../middleware/authenticateUser.js"

const router = express.Router()

router.put("/reset_password", verifyToken, changePassword)
router.put("/update_user", verifyToken, changeUserInfo)

export default router