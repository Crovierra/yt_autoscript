import React from 'react'

const AboutUs = () => {
  return (
    <>
    <div className="flex items-center justify-center mt-[3%] mb-[1%] max-md:mb-[5%]">
        <p className="font-bold text-blue-400 text-4xl">About Us</p>
    </div>
    <div className="p-[5%]  flex flex-col gap-2 max-lg:w-[80%] w-[60%] h-auto rounded-xl justify-center m-auto shadow-md outline-gray-200 outline-[1px]">
        <h3 className="font-bold text-blue-400">Welcome to YT Autoscript</h3>
        <p>
            At <span className=" font-bold">YT Autoscript</span>, we are passionate about making YouTube content more accessible and easier to understand.
            Whether you're a content creator, a student, or someone who simply enjoys learning, our mission is to provide a seamless,
            accurate, and easy-to-use transcription service for all YouTube videos.
        </p>
        <h4 className="font-semibold ">Our Mission :</h4>
        <p>
            Our goal is to enhance the experience of YouTube viewers by offering high-quality, fast, and accurate transcriptions.
            We believe in the importance of accessibility in the digital age, and we aim to provide tools that empower users to consume
            content in new ways, whether by reading, searching, or translating.
        </p>
        <p className="font-semibold mt-[2%]">Why choose us ?</p>
        <ul className="flex flex-col gap-4">
            <li><span className="font-semibold">Fast and Accurate Transcriptions:</span> Our system generates reliable transcriptions with high accuracy, ensuring you don't miss a single word.</li>
            <li><span className="font-semibold">User-Friendly Interface:</span> No technical knowledge is needed to use our service. Upload a video link, and our system does the rest.</li>
            <li><span className="font-semibold">Time-Saving:</span> Get transcripts instantly or within a few minutes, so you can focus on the content rather than transcribing it manually.</li>
            <li><span className="font-semibold">Accessible to All:</span> We provide content in multiple languages to ensure people around the world can benefit from our service.</li>
            <li><span className="font-semibold">Privacy First:</span> We value your privacy. Your videos and data are processed with the utmost care and confidentiality.</li>
        </ul>
    </div>
    </>
  )
}

export default AboutUs
