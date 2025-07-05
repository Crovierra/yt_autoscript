import jwt from "jsonwebtoken"
import User from "../model/userSchema.js"

export const changePremium = async (req, res) => {
    try {
        if(!req.user){
            res.status(409).json({message: "Please login first to become premium member"})
        }
        const user = await User.findByIdAndUpdate(req.user.id, ({member_type: "premium", duration: "30"}))
        if(!user){
            res.status(404).json({message: "User didn't exist"})
        }
        return res.status(200).json({message: "Successfully become premium member"})
    } catch (error) {
        return res.status(500).json({message: `Failed to change membership status : ${error}`})
    }
}