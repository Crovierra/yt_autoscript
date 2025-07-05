import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function useTranscript(){
    const navigate = useNavigate()
    const [link, setLink] = useState("")
    const [transcriptData, getTranscriptData] = useState(null)

    function handleLink(e){
        const value = e.target.value
        setLink(value)
    }

    const submitLink = async() =>{
        try {
            const token = sessionStorage.getItem("token")
            const response = await fetch("http://localhost:3000/api/link/get_transcript",
                {
                    method: "POST",
                    headers: {
                        "Content-type" : "application/json",
                        "Authorization" : `Bearer ${token}`
                    },
                    body: JSON.stringify({transcriptLink: link})
                }
            )
            const data = await response.json()
            if(!response.ok) throw new Error(data.message)
            sessionStorage.setItem("transcript", JSON.stringify(data))
            console.log("Transcript :", data)
            
            await navigate('/transcript_success')
        } catch (error) {
            console.log("Failed to get data :", error.message)
        }
    }

    return {handleLink, submitLink}
}