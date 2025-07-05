import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match:[/^\S+@\S+\.\S+$/, "Invalid email format"]
    },
    password: {
        type: String,
        required: true,
        minlength:6
    },
    member_type:{
        type: String,
        required: true
    },
    duration: {
        type: Number,
        default: 0
    },
    credit: {
        type: Number,
        default: 100
    },
    resetToken: {
        type: String
    },
    resetTokenExpired: {
        type: Date
    },
    preferredTheme : {
        type: Boolean,
        default: false
    }
})

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User