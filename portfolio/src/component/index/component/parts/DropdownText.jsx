import React, { useEffect, useRef, useState } from 'react'


export default function DropdownText({title,text}) {
    let [dropopen , setDropopen] = useState(true);
    let heightdiv = useRef(null);
    let [dpheight, setDpheight] = useState(0);

    useEffect(()=>{
        if(heightdiv.current){
            setDpheight(heightdiv.current.scrollHeight);
        }
    },[dropopen]);

  return (
    <div className='dropDownWrap'>
        <div className='titlebutton' onClick={(()=>{setDropopen(prev => !prev)})} ><span>{title}</span><i style={{transform:dropopen?'rotate(180deg)':'rotate(0deg)'}} className='dropdownArrow'></i></div>
        <div className='textContent' style={dropopen?{height:dpheight+"px"}:{height:0}}>
            <div dangerouslySetInnerHTML={{__html: text}}  ref={heightdiv}/>
        </div>
    </div>
  )
}
