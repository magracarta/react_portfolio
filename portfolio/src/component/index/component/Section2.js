import React, { useEffect, useRef, useState } from 'react'
import "../css/main2.css"
import InfoBox from './parts/InfoBox';
import ActivitiesProject from './parts/ActivitiesProject';
import Skils from './parts/Skils';
import License from './parts/License';
import TMI from './parts/TMI';
import { useLocation } from 'react-router-dom';

function Section2() {
   let [xycode , setXycode] =useState({x : -50 , y : -50});
   let [dropindex, setDropindex] = useState(null);
   let section2 = useRef(null);
   const location = useLocation();
   
   let mouseEvent = (e)=>{
    if(window.innerWidth < 1100) return;
    setXycode({x:e.nativeEvent.layerX, y:e.nativeEvent.layerY });
  }
  let dropdownFn = (n) => {
    if(window.innerWidth > 1100) return; 
    let elem = document.querySelectorAll(".section2 > div > ul > li")[n];
    if(dropindex && dropindex != elem){
      dropindex.classList.remove("on");
      dropindex.querySelector(".content").style.height = 0;
    }
    
    if(!elem.classList.contains("on")){
      elem.classList.add("on");
      elem.querySelector(".content").style.height = elem.querySelector(".content > div").offsetHeight+ "px";
      setDropindex(elem);
    }else{
      elem.classList.remove("on");
      elem.querySelector(".content").style.height = 0;
    }
    
  }


    useEffect(()=>{
        if( section2.current && document.querySelector(".section2")) {
            window.addEventListener("scroll",scrollFn);
        }else window.removeEventListener("scroll",scrollFn);
        
        return()=>{
            window.removeEventListener("scroll",scrollFn);
        }
        
    },[location]);

    let scrollFn=()=>{
        if(!section2.current ) return
        if(window.scrollY >= (section2.current.offsetTop - window.innerHeight/2)) section2.current.classList.add("on");
        // else section2.current.classList.remove("on");
    }

  return (
    <div className='section2' ref={section2}>
        {/* top */}
        <div className='top'>
          <ul>
            <li className='photobox' onMouseMove={(e)=>{mouseEvent(e)}} >
              <div className='title' onClick={()=>{dropdownFn(0)}}>PHOTO<img src='/image/arrowBtn.svg' alt='arrowBtn'/></div>
              <div className='content' >
                <div>
                  <img src='/image/section2-photo.png' alt='section2-photo' />
                  <div className='mouseMove' style={{transform:`translate(${xycode.x}px , ${xycode.y}px)`}} >
                    <img src='/image/blackarrow.svg' alt='blackarrow.svg'/>
                    <span>
                        if({window.innerWidth > 1000 ?"mouseover":"dropdown"})&#123;<br/>
                        &nbsp;&nbsp;&nbsp;print(“Hi! My name is minju.”);<br/>
                          &#125;
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <InfoBox dropdownFn={dropdownFn}/>
            <ActivitiesProject dropdownFn={dropdownFn} />

          </ul>
        </div>
        {/* top */}
        {/* bottom */}
        <div className='bottom'>
          <ul>
            <Skils dropdownFn={dropdownFn} />
            <License dropdownFn={dropdownFn} />
            <TMI dropdownFn={dropdownFn} />
          </ul>
        </div>
        {/* bottom */}
    </div>
  )
}

export default Section2