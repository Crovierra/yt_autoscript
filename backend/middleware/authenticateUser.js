import jwt from "jsonwebtoken"
import blacklistToken from "../model/blacklistTokenSchema.js";

const verifyToken = async(req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    
    if(!token) return res.status(401).json({message: "Access Denied"})
    try {
        const isBlacklisted = await blacklistToken.findOne({token})
        if(isBlacklisted) return res.status(403).json({message: "Token has been revoked"})
        const verified = jwt.verify(token, process.env.SECRET_TOKEN)
        req.user = verified
        next();
    } catch (error) {
        return res.status(403).json({message: `Invalid Token`})
    }
}

export default verifyToken