import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useUser } from '../context/userContext.jsx'
import { useCurrentTheme } from '../context/themeContext.jsx'

const TranscriptSuccess = () => {
    const { userTranscript } = useUser()
    const { currentTheme } = useCurrentTheme()
    const navigate = useNavigate()
    
    useEffect(()=> {
        if(!userTranscript) {
            navigate("/")
        }
        console.log("User transcript :", userTranscript)
    }, [userTranscript])

  return (
    <div className={`flex flex-col w-auto h-[calc(100vh-80px)] px-[5%] py-[5%] items-center gap-2 overflow-y-auto mt-[80px] ${currentTheme === "dark" ? "bg-neutral-700" : ""}`}>
        {userTranscript?.transcript?.transcripts?.map((item, index) => {
            return (
            <div
                key={index}
                className={`flex flex-col outline outline-1 outline-blue-400 text-black w-[70%] max-sm:gap-1 h-auto rounded-lg p-[1%] max-sm:p-[3%] ${currentTheme === "dark" ? "text-white bg-neutral-900 outline-white" : ""}`}
            >
                <div className='flex flex-row gap-4'>
                <p><span className={`font-semibold ${currentTheme === "dark" ? "text-sky-300" : ""}`}>Start</span> : {item.start}</p>
                <p><span className={`font-semibold ${currentTheme === "dark" ? "text-sky-300" : ""}`}>Duration</span> : {item.duration}</p>
                </div>
                <p className='font-semibold'>{item.text}</p>
            </div>
            );
        })}
    </div>
  )
}

export default TranscriptSuccess
