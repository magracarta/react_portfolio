import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';

function AboutMe() {
    let aboutme = useRef(null);
    const location = useLocation();
     useEffect(()=>{
        if( aboutme.current && document.querySelector(".about_me")) {
            window.addEventListener("scroll",scrollFn);
        }else window.removeEventListener("scroll",scrollFn);
    
        
        return()=>{
            window.removeEventListener("scroll",scrollFn);
        }
        
    },[location]);

    let scrollFn=()=>{
        if(!aboutme.current ) return
        if(window.scrollY >= (aboutme.current.offsetTop - window.innerHeight/2)) aboutme.current.classList.add("on");
        // else aboutme.current.classList.remove("on");
    }
  return (
    <div className='about_me innerContainer' ref={aboutme}>
        <h2>ABOUT ME</h2>
        <div>
            <ul>
                <li>
                    <h4>Learning and Growing</h4>
                    <p>새로운 것을 배우고 성장하는 것을 즐깁니다. 기술을 배우고 응용하는 데 큰 관심을 가지고 있으며,<br/>
                       언제나 즐겁게 몰입하여 다양한 작업을 통해 끊임없이 성장하고 있습니다.</p>
                </li>
                <li>
                    <h4>Experience</h4>
                    <p>프론트엔드 개발과 UI/UX 디자인을 통해 창의적인 디자인과 완성도를 동시에 추구하며, 사용자가 직관적으로 상호작용할 수 있는 웹 환경을 제공하려 노력합니다.<br/>
                        사용자와 브랜드 간의 가치를 연결하는 경험을 만들기 위해, 반응형 디자인과 최적화된 성능을 고려한 프론트엔드 구현에 집중하고 있습니다.</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default AboutMe