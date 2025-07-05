import mongoose from "mongoose"

const refreshTokenSchema = new mongoose.Schema({
    tokenOwner: {
        type: String
    },
    refreshToken: {
        type: String
    },
    expiresAt: {
        type: Date
    }
})

refreshTokenSchema.index({expiresAt: "1"}, {expiresAfterSecond: "0"})

const refreshToken = mongoose.models.refreshTokenSchema || mongoose.model("refreshToken", refreshTokenSchema)

export default refreshToken