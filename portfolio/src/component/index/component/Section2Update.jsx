import React, { useEffect, useRef, useState } from 'react'
import "../css/main2update.css"
import Right from './parts/Right';

export default function Section2Update() {
    let section2 = useRef(null);
    let [xycode , setXycode] =useState({x : -5000 , y : -5000});
    let mouseEvent = (e)=>{
        if(window.innerWidth < 1100) return;
        setXycode({x:e.nativeEvent.layerX, y:e.nativeEvent.layerY });
    }

    let scrollFn=()=>{
        if(!section2.current ) return
        if(window.scrollY >= (section2.current.offsetTop - window.innerHeight/2)) section2.current.classList.add("on");
        // else section2.current.classList.remove("on");
    }
    
    useEffect(()=>{
        if( section2.current && document.querySelector(".section2")) {
            window.addEventListener("scroll",scrollFn);
        }else window.removeEventListener("scroll",scrollFn);
        
        return()=>{
            window.removeEventListener("scroll",scrollFn);
        }
    },[]);


  return (
    <div className='section2' ref={section2}>
        <div className='innerContainer' >
            <div className='left' onMouseMove={(e)=>{mouseEvent(e)}}>
                <img src='/image/section2-photo.png' alt='section2-photo' />
                <div className='mouseMove' style={{ transform:`translate(${xycode.x}px, ${xycode.y}px)`}} >
                <img src='/image/blackarrow.svg' alt='blackarrow.svg'/>
                <span >
                    if({window.innerWidth > 1000 ?"mouseover":"dropdown"})&#123;<br/>
                    &nbsp;&nbsp;&nbsp;print(“Hi! My name is minju.”);<br/>
                        &#125;
                </span>
                </div>
            </div>
            <Right/>
        </div>
    </div>
  )
}
