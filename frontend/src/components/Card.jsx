import React from 'react'

const Card = ({icon, feature, description, className}) => {
    const cardDefault = "flex flex-col outline-1 gap-2 outline-gray-100 rounded-md bg-white justify-center p-[2%] shadow-md"
  return (
    <div className={className ? `${cardDefault} + ${className}` : `${cardDefault}`}>
        <div className="text-2xl text-blue-400">{icon}</div>
        <p className="font-semibold text-lg">{feature}</p>
        <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default Card