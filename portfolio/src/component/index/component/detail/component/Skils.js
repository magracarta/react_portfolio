import React, { useState } from 'react'
import Skillcionparts from './Skillcionparts'

function Skils() {
  let [dropindex, setDropindex] = useState(null);
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
            렌트몬은 다양한 라이브러리와 오픈 API, 그리고 스프링 시큐리티를 활용하여 개발을 진행과 함께 JWT 토큰을 이용한 인증 시스템을 사용했습니다. 
            JWT를 통해 만들어진 액세스 토큰과 리프레시 토큰을 React 클라이언트의 쿠키에 저장하고, 로그인이 필요한 기능에 접근할 때는 Authorization 인증을 요구하도록 구현했습니다. 끝으로 AWS의 EC2와 S3를 이용하여 배포했습니다.
            </p>
        </div>
        <div className='bottom'>
            <div className='backend dropdown' onClick={(e)=>{dropdownFn(0)}}>
                <div>
                    <span className='name'>BACK END <img src='/image/arrowBtn.svg' alt='arrowBtn.svg'/></span>
                    <ul>
                        <Skillcionparts img = {"baend (1).png"} text={"Spring Boot"}/>
                        <Skillcionparts img = {"baend (2).png"} text={"MY SQL"}/>
                        <Skillcionparts img = {"baend (3).png"} text={"JPA"}/>
                        <Skillcionparts img = {"baend (4).png"} text={"Spring\nBoot\nSecurity"}/>
                        <Skillcionparts img = {"baend (5).png"} text={"JWT Token"}/>
                        <Skillcionparts img = {"baend (6).png"} text={"AWS"}/>
                    </ul>
                </div>
            </div>
            <div className='front dropdown' onClick={(e)=>{dropdownFn(1)}}>
                <div>
                    <span className='name'>FRONT END <img src='/image/arrowBtn.svg' alt='arrowBtn.svg'/></span>
                    <ul>
                        <Skillcionparts img = {"front (1).png"} text={"REACT"}/>
                        <Skillcionparts img = {"front (8).png"} text={"HTML5"}/>
                        <Skillcionparts img = {"front (2).png"} text={"CSS3"}/>
                        <Skillcionparts img = {"front (3).png"} text={"JAVASCRIPT"}/>
                        <Skillcionparts img = {"front (4).png"} text={"REDUX"}/>
                        <Skillcionparts img = {"front (5).png"} text={"AXIOS"}/>
                        <Skillcionparts img = {"front (6).png"} text={"SWIPER"}/>
                        <Skillcionparts img = {"front (7).png"} text={"React-Cookie"}/>
                    </ul>
                </div>
            </div>
            <div className='tool'>
                <div>
                   <div className='top dropdown' onClick={(e)=>{dropdownFn(2)}}>
                    <span className='name'>TOOL <img src='/image/arrowBtn.svg' alt='arrowBtn.svg'/></span>
                        <ul>
                            <Skillcionparts img = {"tool (1).png"} text={"IntelliJ"}/>
                            <Skillcionparts img = {"tool (2).png"} text={"VS Code"}/>
                            <Skillcionparts img = {"tool (3).png"} text={"FIGMA"}/>
                            <Skillcionparts img = {"tool (4).png"} text={"GITHUB"}/>
                        </ul>
                   </div>
                   <div className='bottom-in dropdown' onClick={(e)=>{dropdownFn(3)}}>
                    <span className='name'>OPEN API <img src='/image/arrowBtn.svg' alt='arrowBtn.svg'/></span>
                        <ul>
                            <Skillcionparts img = {"api (1).png"} text={"Open\nWeather Map"}/>
                            <Skillcionparts img = {"api (2).png"} text={"도로명 주소\n검색 (Daum)"}/>
                            <Skillcionparts img = {"api (3).png"} text={"Map\n(kakao)"}/>
                            <Skillcionparts img = {"api (4).png"} text={"Map\n(Naver)"}/>
                            <Skillcionparts img = {"api (5).png"} text={""}/>
                            <Skillcionparts img = {"api (6).png"} text={"SNS Login"}/>
                            <Skillcionparts img = {"api (7).png"} text={""}/>
                            
                        </ul>
                   </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skils