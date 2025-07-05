import express from "express"
import { fetchTranscript } from "../controller/transcriptController.js"
import verifyToken from "../middleware/authenticateUser.js"
import { TranscriptLimiter } from "../middleware/rateLimiting.js"

const router = express.Router()

router.get("/get_transcript", TranscriptLimiter, verifyToken, fetchTranscript)

export default router