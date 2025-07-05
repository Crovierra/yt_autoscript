import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useUser } from '../context/userContext.jsx'

const TranscriptSuccess = () => {
    const { userTranscript } = useUser()
    const navigate = useNavigate()

    useEffect(()=> {
        if(!userTranscript) {
            navigate("/")
        }
        console.log("User transcript :", userTranscript)
    }, [userTranscript])

  return (
    <div className='flex flex-col w-auto h-auto px-[5%] py-[5%] items-center gap-2'>
            {userTranscript?.transcript.transcripts?.map((item, index) => {
                return (
                <div className='flex flex-col outline-1 outline-blue-400 text-black w-[1000px] h-auto rounded-lg p-[1%]'>
                    <div className='flex flex-row gap-4' key={index}>
                        <p><span className='font-semibold'>Start</span> : {item.start}</p>
                        <p><span className='font-semibold'>Duration</span> : {item.duration}</p>
                    </div>
                    <p className='font-semibold'>{item.text}</p>
                </div>
                )
            })}
    </div>
  )
}

export default TranscriptSuccess
