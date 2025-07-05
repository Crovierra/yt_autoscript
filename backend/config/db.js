import mongoose from "mongoose"

export const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI) //URI
        console.log("Connected to Database")
    } catch (error) {
        console.log("Failed to connect to Database")
        process.exit(1) //Close connection to DB when error
    }
}