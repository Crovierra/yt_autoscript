import React from 'react'
import { useCurrentTheme } from '../context/themeContext'
import { useUser } from '../context/userContext'

const Instruction = () => {
  const {currentTheme} = useCurrentTheme()
  const {currentUser} = useUser()
  return (
  <div className={`pt-[120px] min-h-screen pb-[40px]  ${currentTheme === "dark" ? "bg-neutral-700" : "bg-white"} duration-300`}>
    <div className={`flex flex-col gap-2 justify-center w-[50%] h-auto py-[2%] max-sm:py-[5%] max-lg:w-[80%] outline-[1px] outline-gray-200 m-auto px-[2%] max-md:px-[5%] rounded-lg shadow-md ${currentTheme === "dark" ? "bg-neutral-900 text-white" : ""} duration-300`}>
        <h3 className="text-lg font-bold">How <span className={`${currentTheme === "dark" ? "text-sky-300" : "text-blue-400"} font-bold`}>YT Autoscript</span> Works</h3>
        <p className="w-[100%]">
            Using our website to get accurate transcriptions of YouTube videos is simple, fast, and user-friendly.
             Below, we'll walk you through the steps on how you can use our platform to generate transcripts from your favorite YouTube videos.
        </p>
        <ul className="flex flex-col gap-1 mt-[20px]">
            <p className="font-semibold">Step 1 : Copy the YouTube Video Link</p>
            <li>Find the video you want to transcribe on YouTube</li>
            <li>Copy the URL from the address bar or use the "Share" button under the video to get the link.</li>
            <p className="font-semibold">Step 2 : Paste the Link on Our Website</p>
            <li>Go to our homepage and paste the copied YouTube URL into the provided input field.</li>
            <li>Click on the "Generate Transcript" button.</li>
            <p className="font-semibold">Step 3: Wait for the Transcript to Generate</p>
            <li>Our system will process the video and start generating a transcript.</li>
            <li>This usually takes just a few seconds to a few minutes, depending on the length of the video.</li>
            <p className="font-semibold">Step 4: Review and Download the Transcript</p>
            <li>Once the transcript is ready, you can review it for accuracy.</li>
            <li>If you're happy with the result, you can download the transcript in various formats, including text (.txt), Word (.docx), and PDF.</li>
            <p className="font-semibold">Step 5: Enjoy Your Transcript!</p>
            <li>You can now use the transcript to enhance your understanding of the video, reference key points, or even share it with others.</li>
            <li>If you need a translation or subtitles, we offer services to make your content more versatile.</li>
        </ul>
        <div className="flex flex-col items-end">
        <button className="bg-blue-400 text-white w-[100px] h-[30px] rounded-lg mt-[20px] transform ease-in-out duration-300 hover:translate-y-[-4px] hover:shadow-lg cursor-pointer"><a href={currentUser ? "/" : "/login"}>Try it now</a></button>
        </div>
    </div>
    </div>
  )
}
    
export default Instruction
