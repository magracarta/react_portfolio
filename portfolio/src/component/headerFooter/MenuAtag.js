import React from 'react'
import { useNavigate } from 'react-router-dom'

function MenuAtag({text,id,clickFn,idx}) {
    let navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/");
        clickFn(id);
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <li><a href={`#${id}`} onClick={handleClick} data-idx={idx} >{text}</a></li>
  )
}

export default MenuAtag