import React from 'react'
import { useNavigate } from 'react-router-dom'

function MenuAtag({text,clickFn,idx}) {
    let navigate = useNavigate();
  return (
    <li><a href={`#${text}`} onClick={()=>{
        navigate("/");
        clickFn();
    }} data-idx={idx} >{text}</a></li>
  )
}

export default MenuAtag