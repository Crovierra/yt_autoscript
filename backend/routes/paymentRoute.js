import express from "express"
import createPaymentIntent from "../controller/paymentController.js"
import verifyToken from "../middleware/authenticateUser.js"
import {checkoutSubs, createCustomerAndSubscription} from "../controller/subscriptionController.js"

const router = express.Router()

router.post("/create_subscription", verifyToken, createPaymentIntent)
router.post("/subscription", verifyToken, createCustomerAndSubscription)
router.post("/pay", verifyToken, checkoutSubs)

export default router

