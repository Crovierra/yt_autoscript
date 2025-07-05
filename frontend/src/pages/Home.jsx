import React from 'react'
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import Features from '../components/Features';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row items-center gap-3 ml-[-10px] max-sm:text-center">
      <FaPencilAlt className="text-2xl text-blue-400 max-sm:hidden"/>
      <h2 className="text-4xl text-blue-400 font-bold">YouTube Video to Text Converter</h2>   
      </div>
      <p className="w-[800px] h-[auto] text-center my-[1%] max-sm:w-[400px] max-md:w-[600px] max-sm:py-[2%] px-[2%]">Transform your YouTube videos into text transcripts instantly. Professional-grade conversion that's free, lightning-fast, and incredibly simple to use.</p>
      <div className="flex flex-row justify-center items-center gap-6 my-[2%] text-gray-600">
        <div className="flex flex-col items-center">
            <div className="flex bg-gray-200 rounded-full w-[50px] h-[50px] justify-center items-center">
                <BsFillLightningChargeFill className="text-blue-400 text-xl"/>
            </div>
            <p className="text-sm text-gray-600">Lightning Fast</p>
        </div>
        <div className="flex flex-col items-center">
            <div className="flex bg-gray-200 rounded-full w-[50px] h-[50px] justify-center items-center">
                <FaCircleCheck className="text-blue-400 text-xl"/>
            </div>
            <p className="text-sm text-gray-600">100% Accurate</p>
        </div>
        <div className="flex flex-col items-center">
            <div className="flex bg-gray-200 rounded-full w-[50px] h-[50px] justify-center items-center">
                <FaLock className="text-blue-400 text-xl"/>
            </div>
            <p className="text-sm text-gray-600">Secure & Private</p>
        </div>
      </div>
        <div className="flex flex-row max-sm:flex-col rounded-2xl w-[800px] py-[2%] max-sm:py-[4%] h-auto max-md:w-[600px] max-sm:w-[400px] max-lg:w-[700px] justify-center items-center shadow-md gap-4">
            <input placeholder="Paste Youtube Video URL here" className="bg-gray-100 w-[400px] max-sm:w-[350px] outline px-[10px] h-[40px] rounded-md outline-gray-300 active:outline-blue-400"></input>
            <button className="bg-blue-400 rounded-md w-[150px] h-[40px] text-white shadow-md cursor-pointer hover:scale-105 hover:shadow-lg hover:translate-y-[-2px] transition-all ease-in-out transform duration-300">Convert to Text</button>
        </div>
        <Features />
    </div>
  )
}

export default Home
