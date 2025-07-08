import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function useTranscript(){
    const navigate = useNavigate()
    const [link, setLink] = useState("")
    const [transcriptData, getTranscriptData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [transcriptError, setError] = useState("")

    function handleLink(e){
        const value = e.target.value
        setLink(value)
    }
    
    const submitLink = async() =>{
        try {
            setLoading(true)
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
            setError(error.message)
            console.log("Failed to get data :", error.message)
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }
    }

    return {handleLink, submitLink, loading, transcriptError}
}