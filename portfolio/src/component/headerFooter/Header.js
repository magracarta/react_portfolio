import React, { useEffect, useState } from 'react'
import SideMenu from './SideMenu'
import DarkmodeButton from './DarkmodeButton';
import { useNavigate } from 'react-router-dom';

function Header({lenis , setLenis}) {
  let [darkmode, setDarkmode] = useState(false);
  let [sidemenu, setSidemenu] = useState(false);
  let [up , setUp] = useState(false);
  const navigate = useNavigate();
  // 페이지가 로드될 때, localStorage에서 다크모드 상태를 가져옴
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkmode(JSON.parse(savedMode));
      const body = document.documentElement;
      if (savedMode === 'true') {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
    }
    let beforeScroll = 0;
    window.addEventListener("scroll",(e)=>{
      let current = window.scrollY;
      if(current > beforeScroll){
        setUp(true);
      }else{
        setUp(false);
      }
      beforeScroll = window.scrollY;
    });
  }, []);

  useEffect(()=>{
          if (sidemenu) {
              document.body.style.overflow = 'hidden';  // 모달 열 때 페이지 스크롤 비활성화
              if (lenis) lenis.stop();  // Lenis 애니메이션 비활성화
            } else {
              document.body.style.overflow = 'auto';  // 모달 닫을 때 페이지 스크롤 활성화
              if (lenis) lenis.start();  // Lenis 애니메이션 재시작
            }
  },[sidemenu,lenis]);

  
  const darkModeClick = () => {
    const body = document.documentElement;
    setDarkmode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode)); // localStorage에 저장
      if (newMode) {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
      return newMode;
    });
  };
  return (
    <div className={sidemenu?'header-wrap sideOn eglish':'header-wrap eglish'} style={{top:up?"-88px":"0"}}>
      {/* 헤더 */}
      <div className='header-top'>
        <div className='menubox'>
          <div className='menu-btn' onClick={()=>{setSidemenu(!sidemenu)}}> 
            <span className={sidemenu?"habergermenu on":"habergermenu"}>
              <i></i>
              <i></i>
              <i></i>
            </span>  {sidemenu?"CLOSE":"MENU"}</div>
          <div className='home_email'>
            {/* <div className='home_btn' onClick={()=>{navigate("/")}}><a href='#HOME'>HOME</a></div> */}
            {/* <div className='email'>Kim Min Ju<br/><a href='mailto:rmforl1996@gmail.com'>rmforl1996@gmail.com</a></div> */}
          </div>
          <DarkmodeButton darkModeClick={darkModeClick} darkmode={darkmode} sidemenu={sidemenu}/>
        </div>
      </div>
      {/* 사이드 메뉴 */}
      <SideMenu  darkModeClick={darkModeClick} darkmode={darkmode} sidemenu={sidemenu} setSidemenu={setSidemenu}/>
    </div>
  )
}

export default Header