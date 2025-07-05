import mongoose from "mongoose"

const blacklistTokenSchema = new mongoose.Schema({
    token : {
        type: String
    },
    expiresAt: {
        type: Date
    }
})

blacklistTokenSchema.index({expiresAt: "1"}, {expiresAfterSecond: "0"})

const blacklistToken = mongoose.models.blacklistToken || mongoose.model("blacklistToken", blacklistTokenSchema)

export default blacklistToken