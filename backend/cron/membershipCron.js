import cron from "node-cron"
import User from "../model/userSchema.js"

cron.schedule("0 0 * * *", async () => {
    //Running daily membership update
    //Automatically reduce the membership duration on 00:00 every day, month and year ( * * * stand for)
    try {
        //Reduce duration
         await User.findMany({
            member_type: "premium", duration: {$gt: 0}
        }, {$inc: {duration: -1}})

        //Change membership if duration reach 0
        await User.findMany({
            member_type: "premium", duration: {$lte: 0}
        }, {$set: {member_type: "free"}})

        console.log("Membership durations updated successfully")
    } catch (error) {
        console.log(`Cron failed to update data : ${error}`)
    }
})