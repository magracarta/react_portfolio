import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import workDats from "./parts/workData.json";
import "../css/work.css"
import WorkDetail from './WorkDetail';
import ReactModal from 'react-modal';

function Work({lenis , setLenis}) {
    let [wopen , setwopen] = useState(false);
    let [tag, setTag] = useState("0");
    let [cg, setcg] = useState("0");
    let [jsonfile, setJsonFile] = useState("");
    let section4 = useRef(null);
    const location = useLocation();

    useEffect(()=>{
        if( section4.current && document.querySelector(".section4")) {
            window.addEventListener("scroll",scrollFn);
        }else window.removeEventListener("scroll",scrollFn);
        return()=>{
            window.removeEventListener("scroll",scrollFn);
        }
    },[location,]);

    useEffect(()=>{
        document.querySelectorAll(".work-tag span").forEach((el)=>el.classList.remove("pick"))
        document.querySelectorAll(".work-tag span")[tag].classList.add("pick");
        // document.querySelectorAll(".work-continaer li").forEach((el,idx)=>{
        //     el.style.left=(window.innerWidth/4)*(idx/4)+"px";

        // });
    },[tag]);

    useEffect(()=>{
        if (wopen) {
            document.body.style.overflow = 'hidden';  // 모달 열 때 페이지 스크롤 비활성화
            if (lenis) lenis.stop();  // Lenis 애니메이션 비활성화
          } else {
            document.body.style.overflow = 'auto';  // 모달 닫을 때 페이지 스크롤 활성화
            if (lenis) lenis.start();  // Lenis 애니메이션 재시작
          }
      },[wopen,lenis]);

    let scrollFn=()=>{
        if(!section4.current ) return
        if(window.scrollY >= (section4.current.offsetTop - window.innerHeight/2)) section4.current.classList.add("on");
        // else section4.current.classList.remove("on");
    }
  return (
    <div className='section4' id="WORK" ref={section4}>
        <div className='innerContainer'>
            <div className='title'>
                <h2>WORK</h2>
                <p>저의 커리어와 혼자 공부했던 내용들을 소개합니다.</p>
                <span className='line'></span>
            </div>
            <div className='work-tag'>
                <span onClick={()=>{setTag(0); setcg("0");}} className='pick'>All</span>
                <span onClick={()=>{setTag(1); setcg("커리어");}}>CAREER</span>
                <span onClick={()=>{setTag(2); setcg("스터디");}}>STUDY</span>
                <span onClick={()=>{setTag(3); setcg("외주");}}>외주</span>
            </div>
        </div>
        <div className='work-continaer'>
            <ul>
                {workDats.work.map((el, idx)=>{
                    return <li style={{transition: `all  ${0.8}s ${0.3*idx}s`}} key={el.title} className={cg==="0" ||el.cg === cg? "show":"hidden"}
                        onClick={()=>{
                            setwopen(true);
                            setJsonFile(el.title);
                        }}
                    >
                                <div>
                                    <img src={`image/workThumnail/${el.thumbnail}`} alt={el.thumbnail}/>
                                </div>
                           </li>
                })}
            </ul>
        </div>
        <ReactModal
            isOpen={wopen}
            onRequestClose={()=>{setwopen(false)}}
            ariaHideApp={false}
        >
            <div className='closeBtn' onClick={()=>{setwopen(false)}}><i></i></div>
            <WorkDetail file={`${jsonfile}.json`} />
        </ReactModal>
    </div>
  )
}



export default Work