import React, { useEffect, useRef, useState } from 'react'
import MenuAtag from './MenuAtag'

function Footer({mousexy}) {
  let gotopbtn = useRef(null);
  const [currentxy , setCurrentxy] = useState({x:0, y:0});
  const mousexyRef = useRef(mousexy);

  useEffect(()=>{
    mousexyRef.current = mousexy;
  },[mousexy]);

  useEffect(()=>{
    let mouseanimation;
    function mouseFn(){
      setCurrentxy(prev=>
        ({
          x: prev.x+(mousexyRef.current.x - prev.x)*0.02,
          y: prev.y+(mousexyRef.current.y - prev.y)*0.02
        }))
      mouseanimation = requestAnimationFrame(mouseFn);
    }
    mouseFn();
    return()=>{
      cancelAnimationFrame(mouseanimation);
    }
  },[]);



  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if (gotopbtn.current) {
        if(window.scrollY <= 100) gotopbtn.current.style.visibility = "hidden";
        else gotopbtn.current.style.visibility = "visible";

      }
    });
  },[]);
  let gotop = ()=>{
    window.scrollTo({top:0 , behavior: "smooth"});
  }
  return (
    <>
    <div className='gotop' onClick={gotop} ref={gotopbtn}><img src='/image/gotop.svg'/></div>
    <div className='footer eglish'>
      <div className='textAnimation'>
        <div className='dark'>
          <img src='/image/textAnimation_footerw.png' alt='textAnimation_footer.png'/>
          <img src='/image/textAnimation_footerw.png' alt='textAnimation_footer.png'/>
        </div>
        <div className='light'>
          <img src='/image/textAnimation_footer.png' alt='textAnimation_footer.png'/>
          <img src='/image/textAnimation_footer.png' alt='textAnimation_footer.png'/>
        </div>
      </div>
      <div className='innerContainer'>
        <div>
          {/* left */}
          <div className='left'>
            <div className='top'>
              <h2>WEB-DEVELOPER</h2>
              <span>Email<br/><a href='mailto:rmfoal1996@gmail.com'>rmfoal1996@gmail.com</a></span>
            </div>
            <div className='bottom'>
                ⓒKim min ju. All right reserved 
            </div>
            <div className='bottomtext'></div>
          </div>
          {/* right */}
          <div className='right'>
            <div className='topmenu'>
              <ul>
                <MenuAtag text={"Intro"}      id={"intro"}      clickFn={()=>{}} idx={"1"} />
                <MenuAtag text={"About me"}   id={"about"}      clickFn={()=>{}} idx={"2"} />
                <MenuAtag text={"Skills"}     id={"skills"}     clickFn={()=>{}} idx={"3"} />
                <MenuAtag text={"Experience"} id={"experience"} clickFn={()=>{}} idx={"4"} />
              </ul>
            </div>
            <div className='bottom'></div>
          </div>
        </div>
      </div>  
    </div>
    <div className='mouseMoveTag'
          style={{
            transform:`translate( ${currentxy.x}px, ${currentxy.y}px)`
          }}
    ></div>
    </>
  )
}

export default Footer