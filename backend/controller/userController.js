import User from "../model/userSchema.js";
import bcrypt from "bcrypt"

const findUser = async (email) => {
    const user = await User.find({email})
    if(!user){
            return res.status(404).json({message: "User not found"})
    }
    return user
}

export const changePassword = async(req, res) => {
    try {
        const {oldPassword, newPassword} = req.body
        const email = req.user.email
        if(!email){
            return res.status(409).json({message: "Cannot continue this action, no user active"})
        }

        const user = await findUser(email)

        const checkPassword = await bcrypt.compare(oldPassword, user.password)
        if(!checkPassword){
            return res.status(403).json({message: "Wrong password"})
        }
        const hashNewPassword = await bcrypt.hash(newPassword, 10) //10 Salt Rounds
        user.password = hashNewPassword
        await user.save()
        
        return res.status(200).json({message: "Success updating password"})
    } catch (error) {
        return res.status(500).json({message: `Failed to reset password : ${error.message}`})
    }
}

export const changeUserInfo = async (req, res) => {
    try {
        const {name, email} = req.body
        const user = await findUser(email)
        if(name) user.name = name //Change name if the field is provided
        if(email && user.email !== email) user.email = email //Change email if email are different and provided
        await user.save();
        return res.status(200).json({message: "Profile updated"})
    } catch (error) {
        return res.status(500).json({message: `Internal server error, failed to update profile : ${error.message}`})
    }
}