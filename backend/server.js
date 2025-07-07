import express from "express"
import cors from "cors"
import "dotenv/config"
import authRoutes from "./routes/authRoutes.js";
import memberRoutes from "./routes/memberRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import transcriptRoutes from "./routes/transcriptRoutes.js"
import paymentRoutes from "./routes/paymentRoute.js"
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser"
import "./cron/membershipCron.js"
import { loginLimiter } from "./middleware/rateLimiting.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))
app.use(cookieParser())

connectDB();

app.use("/api/auth", authRoutes)
app.use("/api/auth/login", loginLimiter)

app.use("/api/member", memberRoutes)
app.use("/api/user", userRoutes)
app.use("/api/link", transcriptRoutes)
app.use("/api/stripe/", paymentRoutes)

app.listen(PORT, ()=> console.log("Server is running"))