import React from 'react'
import {useNavigate} from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
    const home = () => {
        navigate("/")
    }
  return (
    <div className="w-[screen] h-[screen] flex flex-col justify-center items-center mt-[6%]">
        <img src="../src/assets/image/404Fish.png" className="w-[400px] h-[400px] mt-[4%]"/>
        <button className="text-lg bg-blue-400 px-[25px] py-[10px] rounded-lg transition-all duration-300 ease-in-out hover:translate-y-[-2px] cursor-pointer text-white hover:bg-neutral-700 mt-[-3%] mb-[2%]" onClick={home}>Get back</button>
        <p className="font-light text-4xl">There's  <span className="font-bold text-6xl"> NOTHING </span>  here</p>
    </div>
  )
}

export default NotFound
