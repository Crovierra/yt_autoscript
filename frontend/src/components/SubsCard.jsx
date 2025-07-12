import React from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { useSubscription } from '../hooks/useSubscription.js';
import { useCurrentTheme } from '../context/themeContext.jsx';

const SubsCard = ({price}) => {
  const {paymentIntent} = useSubscription()
  const { currentTheme } = useCurrentTheme()
  const defaultPClass = "text-md flex flex-row items-center gap-2 max-xl:text-sm"
  return (
    <div className={`flex flex-col w-[350px] h-[400px] max-xl:w-[300px] rounded-lg outline-1 outline-neutral-300 items-center transition-all transform duration-600 ease-in-out hover:translate-y-[-15px] ${currentTheme === "dark" ? "bg-neutral-900 text-white" : "bg-white"}`}>
        <div className={`flex bg-blue-400 w-[350px] h-[100px] max-xl:w-[300px] items-center justify-center transition-all ease-in-out duration-300 ${currentTheme === "dark" ? "hover:text-black hover:bg-white" : "hover:text-white hover:bg-neutral-700"} rounded-t-lg`}>
        <p><span className="text-3xl font-semibold">{price}$</span> / Month</p>
        </div>
        <div className="flex flex-col pt-[5%] px-[10px]">
        <p className={defaultPClass}><IoCheckmarkCircleSharp className="text-blue-400"/>Transcript up to <span className="font-bold">{price === "5" ? "10 videos" : 12 > price < 5 ? "25 videos" : "60 videos"} / Month</span></p>
        <p className={defaultPClass}><IoCheckmarkCircleSharp className="text-blue-400"/>Up to <span className="font-bold">{price === "5" ? "15 minutes" : 12 > price < 5 ? "25 minutes" : "60 minutes"} per video</span></p>
        <p className={defaultPClass}><IoCheckmarkCircleSharp className="text-blue-400"/>Download transcript as {price === "5" ? "plain text" : "TXT, PDF, DOCX"}</p>
        <p className={defaultPClass}><IoCheckmarkCircleSharp className="text-blue-400"/>{price === "5" ? "Basic" : 12 > price < 5 ? "Priority" : "Dedicated"} Support</p>
        <p className={defaultPClass}><IoCheckmarkCircleSharp className={price < 12 ? "text-gray-400" : "text-blue-400"}/>Higher processing speed</p>
        <p className={defaultPClass}><IoCheckmarkCircleSharp className={price < 13 ? "text-gray-400" : "text-blue-400"}/>Integration with <span className="font-bold">AI tools</span></p>
        <p className={defaultPClass}><IoCheckmarkCircleSharp className={price < 13 ? "text-gray-400" : "text-blue-400"}/>Support more than <span className="font-bold">10+ languages</span></p>
        </div>
        <button className={`bg-blue-400 rounded-md px-[12px] py-[2px] mt-[15%] max-lg:mt-[80px] cursor-pointer duration-400 ${currentTheme === "dark" ? "hover:bg-white hover:text-black" : "hover:bg-neutral-700 text-white"}`} onClick={paymentIntent(Number(price))}>Subscribe</button>
    </div>
  )
}

export default SubsCard
