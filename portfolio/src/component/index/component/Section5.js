import React, { useEffect, useRef } from 'react'
import "../css/main5.css"
import { useLocation } from 'react-router-dom';
function Section5() {
    let section5 = useRef(null);
    const location = useLocation();
  

    useEffect(()=>{
        if( section5.current && document.querySelector(".section5")) {
            window.addEventListener("scroll",scrollFn);
        }else window.removeEventListener("scroll",scrollFn);
    
        
        return()=>{
            window.removeEventListener("scroll",scrollFn);
        }
        
    },[location]);

    let scrollFn=()=>{
        if(!section5.current ) return
        if(window.scrollY >= (section5.current.offsetTop - window.innerHeight/2)) section5.current.classList.add("on");
        // else section5.current.classList.remove("on");
    }
  return (
    <div className='section5' id="RECORD" ref={section5}>
        <div className='innerContainer'>
            <div className='title'>
                <h2>RECORD</h2>
                <p>저의 GITHUB와 노션으로 정리된 {window.innerWidth<1100 && <br/>}경력사항들을 소개합니다.</p>
            </div>
            <div className='wrapbox'>
                <a className='left' href='https://github.com/magracarta' target='_black' >
                    <div>
                        <div className='top'>
                            <h3>GITHUB</h3>
                            <p>개발자 김민주의 깃허브로 공부 내역을 확인할 수 있습니다.</p>
                        </div>
                        <div className='bottom'>
                           <div>자세히 보러가기 <img src='/image/moreviewArrow.svg' alt='moreviewArrow.svg' /></div>
                        </div>
                    </div>
                </a>
                <a className='right' href='https://poised-magpie-c4b.notion.site/f254941208fc41dd9c99f3b31d233f07?pvs=74' target='_black' >
                    <div>
                        <div className='top'>
                            <h3>NOTION</h3>
                            <p>에코마케팅에서의 경력과 작업물들이 정리되어 있습니다.</p>
                        </div>
                        <div className='bottom'>
                            <div>자세히 보러가기 <img src='/image/moreviewArrow.svg' alt='moreviewArrow.svg' /></div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Section5