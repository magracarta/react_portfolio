import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';

function Work() {
    const pageindex = useRef(null);
    let section4 = useRef(null);
    const location = useLocation();
    const pagination = {
        el: pageindex.current,
        type: 'fraction',
    }

    useEffect(()=>{
        if( section4.current && document.querySelector(".section4")) {
            window.addEventListener("scroll",scrollFn);
        }else window.removeEventListener("scroll",scrollFn);
    
        
        return()=>{
            window.removeEventListener("scroll",scrollFn);
        }
        
    },[location]);

    let scrollFn=()=>{
        if(!section4.current ) return
        if(window.scrollY >= (section4.current.offsetTop - window.innerHeight/2)) section4.current.classList.add("on");
        // else section4.current.classList.remove("on");
    }
  return (
    <div className='section4' id="ETC" ref={section4}>
        <div className='innerContainer'>
            <div className='title'>
                <h2>WORK</h2>
                <p>저의 커리어와 혼자 공부했던 내용들을 소개합니다.</p>
            </div>
            <div className='work-tag'>

            </div>
            
        </div>
    </div>
  )
}

export default Work