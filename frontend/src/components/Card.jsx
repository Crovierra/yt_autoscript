import React from 'react'
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useCurrentTheme } from '../context/themeContext'

const Card = ({icon, feature, description, className}) => {
  const { currentTheme } = useCurrentTheme()
    const cardDefault = `flex flex-col outline-1 gap-2 outline-gray-100 rounded-md justify-center p-[2%] max-lg:px-[5%] shadow-md ${currentTheme === "dark" ? "bg-neutral-900" : "bg-white"}`
  return (
    <div className={className ? `${cardDefault} + ${className}` : `${cardDefault}`}>
        <div className="text-2xl text-blue-400">{icon}</div>
        <p className="font-semibold text-lg">{feature}</p>
        <p className={`text-gray-600 w-auto h-[40px] ${currentTheme === "dark" ? "text-white" : ""}`}>{description}</p>
    </div>
  )
}

export default Card