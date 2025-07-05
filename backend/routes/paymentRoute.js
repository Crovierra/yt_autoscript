import express from "express"
import createPaymentIntent from "../controller/paymentController.js"
import verifyToken from "../middleware/authenticateUser.js"
import createCustomerAndSubscription from "../controller/subscriptionController.js"

const router = express.Router()

router.post("/create_subscription", verifyToken, createPaymentIntent)
router.post("/subscription", createCustomerAndSubscription)

export default router

