import React from 'react'
import SubsCard from '../components/SubsCard'

const Subscription = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-6 pt-[5%]">
        <SubsCard price="5"/>
        <SubsCard price="12"/>
        <SubsCard price="25"/>
    </div>
  )
}

export default Subscription
    