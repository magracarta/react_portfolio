import React, { useEffect, useRef } from 'react'
import ProjectListParts from './parts/ProjectListParts'
import projectObject from './parts/projectObject.json'
import "../css/main3.css"
import { useLocation } from 'react-router-dom';

function Section3({lenis , setLenis}) {
    let section3 = useRef(null);
    const location = useLocation();
  useEffect(()=>{
    if( section3.current && document.querySelector(".section3")) {
        window.addEventListener("scroll",scrollFn);
    }else window.removeEventListener("scroll",scrollFn);

    
    return()=>{
        window.removeEventListener("scroll",scrollFn);
    }
    
  },[location]);
    // 모달 내부 스크롤에 Lenis 적용되지 않도록 스타일로 처리
    const handleModalOpen = () => {
      // 모달이 열리면 Lenis의 smoothWheel을 비활성화하여 기본 스크롤을 사용하도록
      document.body.style.overflow = "hidden";  // 페이지 스크롤 비활성화
    };
  
    const handleModalClose = () => {
      // 모달이 닫히면 Lenis의 smoothWheel을 다시 활성화
      document.body.style.overflow = "auto";  // 페이지 스크롤 재활성화
    };

  let scrollFn=()=>{
    if(!section3.current ) return
    if(window.scrollY >= (section3.current.offsetTop - window.innerHeight/1.5)) section3.current.classList.add("on");
    // else section3.current.classList.remove("on");
    
    section3.current.querySelectorAll("li").forEach((elem,index)=>{
        if(window.scrollY >= (elem.offsetTop - window.innerHeight/1)) elem.classList.add("on");
        // else elem.classList.remove("on");
    
        if(index-1 >= 0 && window.innerWidth >= 1100){
            if(window.scrollY >= (section3.current.querySelectorAll("li")[index-1].offsetTop -70 )) section3.current.querySelectorAll("li")[index-1].classList.add("drop");
           else {
                if(index-1 >= 0)section3.current.querySelectorAll("li")[index-1].classList.remove("drop");
           }
        }

        // if(index == section3.current.querySelectorAll("li").length-1 && window.innerWidth >= 70){
        //     if(window.scrollY >= (elem.offsetTop - 100)) section3.current.querySelectorAll("li")[index].classList.add("drop");
        //     else section3.current.querySelectorAll("li")[index].classList.remove("drop");
        // }

    });
  }
  return (
    <div className='section3' id='PROJECT' ref={section3}>
        <div className='title'>
            <h2>PROJECT</h2>
            <p>기획부터 디자인 개발까지</p>
        </div>
        <div className='project-list'>
            <ul>
                {projectObject.PROJECT.map((item, index)=>{
                   return <ProjectListParts key={index} item={item} index={index} allnum={projectObject.PROJECT.length} lenis={lenis} setLenis={setLenis} />
                })}
            </ul>
        </div>
    </div>
  )
}

export default Section3