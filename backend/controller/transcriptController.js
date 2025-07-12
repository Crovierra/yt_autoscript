import User from "../model/userSchema.js"

function isValidYoutubeLink (url){
    try {
        const parsed = new URL(url)
        const host = parsed.hostname
        const videoIdRegex = /^[a-zA-Z0-9_-]{11}$/

        //Check if the hostname is youtube domain
        if(
            host === "www.youtube.com"||
            host === "youtube.com" ||
            host === "m.youtube.com"
        ){
            const params = parsed.searchParams
            const id = params.get("v")
            return videoIdRegex.test(id) ? id : null
        }

        //Check youtube short link
        if(host === "youtu.be"){
            const id = parsed.pathname.slice(1)
            return videoIdRegex.test(id) ? id : null
        }
        
        return null
    } catch (error) {
        return null
    }
}

export const fetchTranscript = async(req, res) => {
    try {
        const {transcriptLink} = req.body
        if(!transcriptLink) return res.status(400).json({message: "Field cannot be empty"})

        const user = req.user
        
        //Check if the user already logged in
        if(!user) return res.status(403).json({message: "Please login to access this feature"})
        
        //Check if the user is valid
        const creditAmount = await User.findOne({email: user.email}, 'credit')
        if(!creditAmount) return res.status(404).json({message: "User didn't exist"})
        
        //Check the user's credit
        if(creditAmount.credit <= 0) return res.status(403).json({message: "Out of credit to use this feature"})
        

        //Check if the transcript link is from youtube
        const videoId = isValidYoutubeLink(transcriptLink)
        
        if(!videoId) return res.status(409).json({message: "Cannot get transcript from this source"})
        
        const response = await fetch(`https://www.searchapi.io/api/v1/search?api_key=${process.env.TRANSCRIPT_API_KEY}&engine=youtube_transcripts&video_id=${videoId}`)
        const transcript = await response.json()

        //Reduce creditAmount after successfully get transcript
        await User.findOneAndUpdate({email: user.email}, {$inc: {credit: -1}})
        
        return res.status(200).json({message: "Fetch transcript success", transcript })
    } catch (error) {
        return res.status(500).json({message: `Failed to fetch transcript, error : ${error.message}`})
    }
}