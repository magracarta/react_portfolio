import React from 'react'

function Graphparts({text,num}) {
  return (
    <li>
        <span>{text}</span>
        <div className='line'>
            <div style={{width:num+"%"}}></div>
        </div>
        <span>{num}</span>
    </li>
  )
}

export default Graphparts