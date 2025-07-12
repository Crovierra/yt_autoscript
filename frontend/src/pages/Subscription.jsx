import React from 'react'
import SubsCard from '../components/SubsCard'
import { useCurrentTheme } from '../context/themeContext'

const Subscription = () => {
  const { currentTheme } = useCurrentTheme()
  return (
    <div className={`flex flex-row justify-center items-center gap-6 pt-[100px] max-lg:flex-col pb-[30px] min-h-screen ${currentTheme === "dark" ? "bg-neutral-700" : "bg-white"} duration-300`}>
        <SubsCard price="5"/>
        <SubsCard price="12"/>
        <SubsCard price="25"/>
    </div>
  )
}

export default Subscription
    