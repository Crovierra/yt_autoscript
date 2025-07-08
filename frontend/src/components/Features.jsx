import React from 'react'
import Card from './Card'
import { MdGTranslate } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from "react"

const Features = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [sliderRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 2,
      spacing: 4,
    },
    breakpoints: {
      '(max-width: 640px)': {
        slides: { perView: 1, spacing: 0 },
      },
      '(min-width: 840px)': {
        slides: { perView: 3, spacing: 0 },
      }
    },
  })

  useEffect(()=>{
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024) // Tailwind's lg breakpoint
    }
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  },[])

  const cards = [
    {
      icon: <MdGTranslate />,
      feature: 'Multiple Languages',
      description: 'Support for over 100+ languages.',
    },
    {
      icon: <IoDocumentTextOutline />,
      feature: 'Multiple Formats',
      description: 'Export in TXT, SRT, and VTT.',
    },
    {
      icon: <FaShieldAlt />,
      feature: 'Secure & Private',
      description: 'Your data is encrypted and never stored.',
    },
  ]
  return (
    <div className="w-full overflow-hidden px-4">
      <div className="flex flex-col justify-center items-center my-[4%] gap-4 keen-slider">
        <h3 className="font-bold text-2xl">Why Choose YT Autoscript ?</h3>
        <p className='max-sm:w-[400px] max-md:w-[600px] h-auto'>Experience the most reliable YouTube transcript generator with advanced features designed for your needs.</p>
      {isMobile ? (
        <div ref={sliderRef} className="keen-slider">
          {cards.map((card, idx) => (
            <div key={idx} className="keen-slider__slide px-2 flex py-2 justify-center">
              <Card
                icon={card.icon}
                feature={card.feature}
                description={card.description}
                className="w-[400px] h-[180px] max-lg:w-[350px]"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-row justify-center py-1 gap-6">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              icon={card.icon}
              feature={card.feature}
              description={card.description}
              className="w-[400px] h-[180px] max-xl:w-[300px]"
            />
          ))}
        </div>
      )}
      </div>
    </div>
  )
}
export default Features

