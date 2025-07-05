import React from 'react'
import Card from './Card'
import { MdGTranslate } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center my-[4%] gap-4">
        <h3 className="font-bold text-2xl">Why Choose YT Autoscript ?</h3>
        <p>Experience the most reliable YouTube transcript generator with advanced features designed for your needs.</p>
        <div className="flex flex-row gap-6 mt-[2%]">
        <Card
        icon={<MdGTranslate/>}
        feature="Multiple Languages" 
        description="Support for over 100+ languages with accurate translation capabilities."
        className="w-[400px] h-[180px]"/>
        <Card
        icon={<IoDocumentTextOutline/>} 
        feature="Multiple Formats" 
        description="Export your transcripts in various formats including TXT, SRT, and VTT."
        className="w-[400px] h-[180px]"/>
        <Card
        icon={<FaShieldAlt/>} 
        feature="Secure & Private" 
        description="Your data is encrypted and never stored on our servers."
        className="w-[400px] h-[180px]"/>
        </div>
    </div>
  )
}

export default Features
