import React from 'react'

function Skillcionparts({img,text}) {
  return (
    <li>
        <img src={`/image/skill/${img}`} alt={img} />
        <span>{text}</span>
    </li>
  )
}

export default Skillcionparts