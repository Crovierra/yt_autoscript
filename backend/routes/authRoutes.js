import express from "express"
import verifyToken from "../middleware/authenticateUser.js"
import {
    login,
    register,
    getUserInfo,
    requestPasswordReset,
    logout, 
    checkRefreshToken} from "../controller/authController.js"
import { loginLimiter, regisLimiter } from "../middleware/rateLimiting.js"

const router = express.Router()

router.post("/login", loginLimiter, login)
router.post("/register", regisLimiter, register)
router.get("/getUser", verifyToken, getUserInfo)
router.post("/forgot_password", verifyToken, requestPasswordReset)
router.post("/logout", logout)
router.post("/refresh", checkRefreshToken)

export default router