import React, { useEffect } from 'react'
import Section1 from './component/Section1'
import Section2 from './component/Section2'
import Section3 from './component/Section3'
import Section5 from './component/Section5'
import {  useLocation } from 'react-router-dom'
import Work from './component/Work'
import Section2Update from './component/Section2Update'
import Section2About from './component/Section2About'
import Section3Skills from './component/Section3Skills'
import Section4Experience from './component/Section4Experience'


function MainPage({lenis , setLenis}) {
  
  let location = useLocation();
  useEffect(()=>{
    console.log(location.pathname)
    if(location.pathname != "/") return;
    setTimeout(()=>{
      if(window.innerWidth < 1100){
        let pathname = window.location.href.split("#")[1];
        const target = pathname && pathname !== "none" ? document.querySelector(`#${pathname}`) : null;
        if (target) window.scrollTo({ top: target.offsetTop - 50 });
      }
    },500)

  },[]);
  return (
    <div className='mainPage'>
        {/* 섹션1 */}
        <Section1 />
        {/* 섹션1 */}
        {/* 섹션2 */}
        <Section2About />
        {/* 섹션2 */}
        {/* 섹션3 */}
        <Section3Skills/>
        {/* 섹션3 */}
        {/* 섹션4 */}
        <Section4Experience lenis={lenis} setLenis={setLenis}/>
        {/* 섹션4 */}
    </div>
  )
}

export default MainPage