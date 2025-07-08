import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import User from "../model/userSchema.js"
import blacklistToken from "../model/blacklistTokenSchema.js"
import refreshToken from "../model/refreshTokenSchema.js"
import crypto from "crypto"
import nodemailer from "nodemailer"

export const login = async (req, res) => {
    try {
        const {email, password} = req.body
        if(!email || !password) return res.status(400).json({message: "Cannot leave the field empty"})
        const checkUser = await User.findOne({email})
        if(!checkUser) return res.status(404).json({message: "User not found"})
        const checkPassword = await bcrypt.compare(password, checkUser.password)
        if(!checkPassword) return res.status(401).json({message: "Wrong password"})
        const {password: pwd, ...safeUser} = checkUser.toObject()
        const token = jwt.sign({id: safeUser._id, email: safeUser.email}, process.env.SECRET_TOKEN, {expiresIn: '1h'})
        const refreshToken = crypto.randomBytes(64).toString("hex")
        checkUser.refreshToken = refreshToken
        await checkUser.save()

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: 'strict',
            maxAge: 3 * 24 * 60 * 60 * 1000
        })
        
        return res.status(200).json({message: "Login success", user: safeUser, token})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const register = async (req, res) => {
    try {
        const {name, email, password, member_type} = req.body
        if(!name || !email || !password){
            return res.status(409).json({message: "Cannot leave the field empty"})
        }
        const checkEmail = await User.findOne({email})
        if(checkEmail) return res.status(409).json({message: "Email already used"})
        const hashPassword = await bcrypt.hash(password, 10) //SaltRounds = 10
        const newUser = new User({name, email, password:hashPassword, member_type})
        await newUser.save()
        return res.status(201).json({message:"Register Success"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getUserInfo = async(req, res) => {
    try {
        const user = await User.findOne({email: req.user.email})
        if(!user) return res.status(404).json({message: "User didn't exist"})
        const {password: pwd, ...safeUser} = user.toObject()
        return res.status(200).json({message: "Fetch complete", user:safeUser})
    } catch (error) {
        return res.status(500).json({message: "Failed to get user info"})
    }
}

export const requestPasswordReset = async (req, res) => {
    try {
        const { email } = req.body
        if(!email){
            return res.status(401).json({message: "Email required, cannot leave this field empty"})
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        const token = crypto.randomBytes(64).toString("hex")

        user.resetToken = token
        user.resetTokenExpired = Date.now() + 1000 * 60 * 10 // 10 min for token expire time
        await user.save()

        const resetLink = `http://localhost:3000/reset-link/${token}`
        const transporter = nodemailer.transporter({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.EMAIL_PASS
            }
        })

        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: user.email,
            subject: "Reset Password Verification",
            html: `<p>Click <a href="${resetLink}">here</a> to reset your password. This link expire in 10 minutes</p>`
        })
        return res.status(200).json({message: "Password reset link sent to your email"})
    } catch (error) {
        return res.status(500).json({message: "Failed to send request password reset"})
    }
}

export const logout = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        if(!token) return res.status(401).json({message: "Token missing"})
        
        const findBlacklist = await blacklistToken.findOne({token})
        if(!findBlacklist){
            const blacklisted = new blacklistToken({
                token: token,
                expiresAt: new Date(Date.now() + 15 * 60 * 1000)
            })
            await blacklisted.save()
        } 

        return res.status(200).json({message: "Logged out successfully"})
    } catch (error) {
        return res.status(500).json({message: `Internal server error : ${error.message}`})
    }
}

export const checkRefreshToken = async (req, res) => {
    try {
        //Check if the refresh token exist in cookies
        const cookiesToken = req.cookies.refreshToken
        if(!cookiesToken) return res.status(401).json({message: "Missing refresh token"})
        
        //Check if the refresh token exist in user database
        const checkToken = await refreshToken.findOne({token: cookiesToken})
        if(!checkToken) return res.status(403).json({message: "Invalid refresh token"})

        //Get user id from token owner ( refresh token schema )
        const userId = checkToken.tokenOwner

        //Create new access token
        const newAccessToken = jwt.sign({userId}, process.env.SECRET_TOKEN, {expiresIn: "15m"})
    
        const newRefreshToken = crypto.randomBytes(64).toString("hex")
        const newTokenDoc = new refreshToken({
            tokenOwner: userId,
            token: newRefreshToken,
            expiresAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 Days
        })
        
        await newTokenDoc.save()

        //Send new refresh token in cookies
        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: true, // use HTTPS in production!
            sameSite: 'Strict',
            maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days
        });

        await refreshToken.deleteOne({ token: cookiesToken });
        return res.status(200).json({message: "Refresh token successfully created", accessToken: newAccessToken})
    } catch (error) {
        return res.status(500).json({message: `Failed to create refresh token : ${error.message}`})
    }
}
