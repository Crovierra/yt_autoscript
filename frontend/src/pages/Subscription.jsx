import React from 'react'
import SubsCard from '../components/SubsCard'
import { useCurrentTheme } from '../context/themeContext'

const Subscription = () => {
  const { currentTheme } = useCurrentTheme()
  return (
    <div className={`flex flex-row justify-center items-center gap-6 pt-[100px] max-lg:flex-col pb-[30px] min-h-screen ${currentTheme === "dark" ? "bg-neutral-700" : "bg-white"} duration-300`}>
        <SubsCard price="5" priceId="price_1RjxmDP1seeTGwEg453D38UG"/>
        <SubsCard price="12" priceId="price_1RjxmWP1seeTGwEgcUnOQzkH"/>
        <SubsCard price="25" priceId="price_1RjxmuP1seeTGwEgZcXDaxt1"/>
    </div>
  )
}

export default Subscription
    