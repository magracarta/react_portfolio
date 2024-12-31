import React, { useCallback, useEffect, useRef, useState } from 'react'
import DarkmodeButton from './DarkmodeButton'
import MenuAtag from './MenuAtag';
import { useLocation } from 'react-router-dom';

function SideMenu({darkModeClick , darkmode, sidemenu , setSidemenu}) {
    const {pathname} = useLocation();
    const mouseRef = useRef(null);
    let [xycode , setXycode] =useState({x : 0 , y : 0});
    let [xytarget , setXytarget] =useState({x : 0 , y : 0});
    let [speed, setSpeed] = useState(0.03);
    let [text,setText] = useState("HOME");
    let [img, setImg] = useState("1");
    let [mouseOver , setMouseOver] = useState(true);
    let [pick, setPick] = useState(0);
    
    const requestRef = useRef(0);

    const loop = useCallback(()=>{
        if(window.innerWidth < 1100) return;
        if(sidemenu){
            setXytarget(prev=>({
                x: (xycode.x+xytarget.x)* speed , 
                y : (xytarget.y+xycode.y)* speed}));
            
                if (mouseRef.current) mouseRef.current.style.transform = `translate(${xytarget.x}px , ${xytarget.y}px)`;
            requestRef.current = window.requestAnimationFrame(loop);
        } else if (requestRef.current) window.cancelAnimationFrame(requestRef.current);
    }, [sidemenu, xycode, xytarget, speed]);

    useEffect(() => {
        if(window.innerWidth < 1100) return;
        if (sidemenu) requestRef.current = window.requestAnimationFrame(loop);
        else if (requestRef.current)  window.cancelAnimationFrame(requestRef.current);
        return () => {
            if (requestRef.current) window.cancelAnimationFrame(requestRef.current);
        };
    }, [sidemenu, loop]);

    let mouseEvent = (e)=>{
        if(window.innerWidth < 1100) return;
        setXycode({x:e.clientX, y:e.clientY});
        if(e.target.nodeName === "A"){
            setText("GO "+e.target.innerText);
            setImg(e.target.dataset.idx);
            setPick(e.target.dataset.idx-1);
            setMouseOver(true);
        };
    }
    useEffect(()=>{
        if(pathname !== "/"){
            document.querySelectorAll(".sidemenuwrap li").forEach((el)=>{el.classList.remove("addPick");});
            setPick(null);
        }else {
            document.querySelectorAll(".sidemenuwrap li").forEach((el)=>{el.classList.remove("addPick");})
            document.querySelectorAll(".sidemenuwrap li")[pick].classList.add("addPick");
        }
        
    },[pick]);

    useEffect(()=>{
        if(!document.querySelector(".section3")) return;
        if(pathname == "/") {
            window.addEventListener("scroll",scrollFn);
        }else {
            window.removeEventListener("scroll",scrollFn)
        };
        return()=>{
            window.removeEventListener("scroll",scrollFn);
        }
    },[pathname]);

    let scrollFn = ()=>{
        if(!document.querySelector(".section3")) return;
        if(window.scrollY >= document.querySelector(".section3").offsetTop)setPick(1);
        else setPick(0);
        if(window.scrollY >= document.querySelector(".section4").offsetTop)setPick(2);
        if(window.scrollY >= document.querySelector(".section5").offsetTop)setPick(3);
    }

    let clickMenu = (tag)=>{
        setSidemenu(false);
    }
 
  return (
    <div className='sidemenu' onMouseMove={(e)=>{mouseEvent(e);}} >
        <div className='innerContainer'>
            <DarkmodeButton darkModeClick={darkModeClick} darkmode={darkmode} sidemenu={sidemenu}/>
            {/* 메뉴 */}
            <div className='sidemenuwrap'>
                <div className='menuWrap'>
                    <ul onMouseOut={()=>{setMouseOver(false);
                        if(pathname !== "/") setPick(null);
                    }}>
                        <MenuAtag text={"HOME"} clickFn={clickMenu} idx = {"1"}/>
                        <MenuAtag text={"PROJECT"} clickFn={clickMenu} idx = {"2"} />
                        <MenuAtag text={"ETC"} clickFn={clickMenu} idx = {"3"} />
                        <MenuAtag text={"RECORD"} clickFn={clickMenu} idx = {"4"} />
                        <div className='mouseMove' style={{transform:`translate(${xycode.x}px , ${xycode.y}px)`}} ><img src='/image/blackarrow.svg' alt='blackarrow.svg'/><span>{text}</span></div>
                    </ul>
                </div>
                <div className='rightImgwrap'>
                    {pick !==null && <img src={mouseOver?`/image/menu${img}.png`:`/image/menu${pick+1}.png`} alt='menu1' ref={mouseRef} />}
                    
                </div>
            </div>
            {/* 내정보 */}
            <div className='lastmyinfo'>
                Kim Min Ju<br/>
                <a href='mailto:rmforl1996@gmail.com'>rmforl1996@gmail.com</a>
            </div>
        </div>
    </div>
  )
}


export default SideMenu