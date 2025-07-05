import React from 'react'

const Icon = ({imageSrc, description}) => {
  return (
    <div>
        <img src={imageSrc}></img>
        <p>{description}</p>
    </div>
  )
}

export default Icon
