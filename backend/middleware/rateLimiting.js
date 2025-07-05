import {rateLimit} from "express-rate-limit"

export const loginLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    limit: 5,
    standardHeaders: "draft-8",
    legacyHeaders: false
})

export const regisLimiter = rateLimit({
    windowMs: 3 * 60 * 1000,
    limit: 1,
    standardHeaders: "draft-8",
    legacyHeaders: false
})

export const TranscriptLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    limit: 10,
    standardHeaders: "draft-8",
    legacyHeaders: false
})

