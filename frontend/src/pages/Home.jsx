import React from 'react'
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import Features from '../components/Features';
import { useCurrentTheme } from '../context/themeContext.jsx';
import { useTranscript } from '../hooks/useTranscript';

const Home = () => {
  const { currentTheme } = useCurrentTheme()
  const { submitLink, handleLink, loading, transcriptError } = useTranscript()
  const prime = [
    {description: "Lightning Fast", image: <BsFillLightningChargeFill />},
    {description: "100% Accurate", image: <FaCircleCheck />},
    {description: "Secure & Private", image: <FaLock />}
  ]
  return (
    <div className={`flex flex-col justify-center items-center h-screen pt-[6%] ${currentTheme === "dark" ? "bg-neutral-700 text-white" : ""} duration-300`}>
      <div className="flex flex-row items-center gap-3 ml-[-10px] max-sm:text-center">
      <FaPencilAlt className="text-2xl text-blue-400 max-sm:hidden"/>
      <h2 className={`text-4xl ${currentTheme === "dark" ? "text-sky-300" : "text-blue-400"} font-bold`}>YouTube Video to Text Converter</h2>   
      </div>
      <p className="w-[800px] h-[auto] text-center my-[1%] max-sm:w-[400px] max-md:w-[600px] max-sm:py-[2%] px-[2%]">Transform your YouTube videos into text transcripts instantly. Professional-grade conversion that's free, lightning-fast, and incredibly simple to use.</p>
      <div className="flex flex-row justify-center items-center gap-6 my-[2%] text-gray-600">
          {prime.map((item, index) => 
            (
              <div key={index} className="flex flex-col items-center">
                <div  className="flex bg-gray-200 rounded-full w-[50px] h-[50px] justify-center items-center text-blue-400 text-xl">
                  {item.image}
                </div>
                <p className={`text-sm text-gray-600 ${currentTheme === "dark" ? "text-white" : ""}`}>{item.description}</p>
              </div>
          )
          )}
            
      </div>
        <div className={`flex flex-col max-sm:flex-col rounded-2xl w-[800px] py-[2%] max-sm:py-[4%] h-auto max-md:w-[600px] gap-2 max-sm:w-[400px] max-lg:w-[700px] justify-center items-center shadow-md ${currentTheme === "dark" ? "bg-neutral-900" : ""}`}>
          <div className="flex flex-row gap-4">
            <input placeholder="Paste Youtube Video URL here" className={`bg-gray-100 w-[400px] max-sm:w-[350px] outline px-[10px] h-[40px] rounded-md outline-gray-300 active:outline-blue-400 ${currentTheme === "dark" ? "bg-white text-black" : ""}`} onChange={handleLink}></input>
            <button 
              className="bg-blue-400 rounded-md w-[150px] h-[40px] text-white shadow-md cursor-pointer hover:scale-105 hover:shadow-lg hover:translate-y-[-2px] transition-all ease-in-out transform duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={loading} onClick={submitLink}>
              {loading ? "Loading" : "Convert to Text"}
            </button>
          </div>
          {transcriptError ? <p className="text-red-500">{transcriptError}</p> : null }
        </div>
        <Features/>
    </div>
  )
}

export default Home
