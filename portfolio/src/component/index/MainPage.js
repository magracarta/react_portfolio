import React, { useEffect } from 'react'
import Section1 from './component/Section1'
import Section2 from './component/Section2'
import Section3 from './component/Section3'
import Section4 from './component/Section4'
import Section5 from './component/Section5'
import {  useLocation } from 'react-router-dom'
import AboutMe from './component/AboutMe'


function MainPage() {
  let location = useLocation();
  useEffect(()=>{
    console.log(location.pathname)
    if(location.pathname != "/") return;
    setTimeout(()=>{
      if(window.innerWidth < 1100){
        let pathname = window.location.href.split("#")[1];
        if(pathname)window.scrollTo({top: document.querySelector(`#${pathname}`).offsetTop-50});
      }
    },500)

  },[]);
  return (
    <div className='mainPage'>
        {/* 섹션1 */}
        <Section1 />
        {/* 섹션1 */}
        {/* 어바웃 미 */}
        <AboutMe/>
        {/* 어바웃 미 */}
        {/* 섹션2 */}
        <Section2 />
        {/* 섹션2 */}
        {/* 섹션3 */}
        <Section3 />
        {/* 섹션3 */}
        {/* 섹션4 */}
        <Section4 />
        {/* 섹션4 */}
        {/* 섹션5 */}
        <Section5/>
        {/* 섹션5 */}
    </div>
  )
}

export default MainPage