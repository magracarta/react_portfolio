import React, { useEffect, useRef, useState } from 'react'
import Skillcionparts from './Skillcionparts'

function Skilsjutopia() {
    let [dropindex, setDropindex] = useState(null);
    
      useEffect(()=>{setTimeout(()=>{dropdownFn(0)},300)},[]);
    let dropdownFn = (n) => {
      if(window.innerWidth > 1100) return; 
      let elem = document.querySelectorAll(".dropdown")[n];
      if(dropindex && dropindex != elem){
        dropindex.classList.remove("on");
        dropindex.style.height= 51+"px";
      }
      
      if(!elem.classList.contains("on")){
        elem.classList.add("on");
        elem.style.height = elem.querySelector("ul").offsetHeight+ 51 +"px";
        setDropindex(elem);
      }else{
        elem.classList.remove("on");
        elem.style.height = 51+"px";
      }
    }
  
    return (
      <div className='detailskill innerContainer'>
          <div className='top'>
              <span className='name'>구현 기능 요약</span>
              <p> 
              주토피아 프로젝트에서는 개발 언어에 익숙해지는 것을 목표로, 외부 API나 라이브러리 사용을 최소화하고 기본적인 코드 내에서 작업을 진행하였습니다. 모든 작업은 로컬 톰캣 서버에서 이루어졌습니다.
              </p>
          </div>
          <div className='bottom'>
              <div className='backend dropdown'>
                  <div>
                      <span className='name'  onClick={(e)=>{dropdownFn(0)}}>BACK END <img src='/image/arrowBtn.svg' alt='arrowBtn.svg'/></span>
                      <ul>
                          <Skillcionparts img = {"backend (1).png"} text={"JAVA"}/>
                          <Skillcionparts img = {"backend (2).png"} text={"Servlets"}/>
                          <Skillcionparts img = {"baend (2).png"} text={"MY SQL"}/>
                          <Skillcionparts img = {"backend (3).png"} text={"Tomcat"}/>
                      </ul>
                  </div>
              </div>
              <div className='front dropdown'>
                  <div>
                      <span className='name'  onClick={(e)=>{dropdownFn(1)}}>FRONT END <img src='/image/arrowBtn.svg' alt='arrowBtn.svg'/></span>
                      <ul>
                          <Skillcionparts img = {"front (10).png"} text={"JSP"}/>
                          <Skillcionparts img = {"front (8).png"} text={"HTML5"}/>
                          <Skillcionparts img = {"front (2).png"} text={"CSS3"}/>
                          <Skillcionparts img = {"front (3).png"} text={"JAVASCRIPT"}/>
                      </ul>
                  </div>
              </div>
              <div className='tool_one dropdown' >
                    <div>
                        <span className='name'  onClick={(e)=>{dropdownFn(2)}}>TOOL <img src='/image/arrowBtn.svg' alt='arrowBtn.svg'/></span>
                        <ul>
                            <Skillcionparts img = {"tool (5).png"} text={"Eclipse"}/>
                            <Skillcionparts img = {"tool (3).png"} text={"FIGMA"}/>
                            <Skillcionparts img = {"tool (4).png"} text={"GITHUB"}/>
                        </ul>
                    </div>
              </div>
  
          </div>
      </div>
    )
}

export default Skilsjutopia