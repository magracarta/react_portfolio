import React, { useEffect, useState } from 'react'
import SideMenu from './SideMenu'
import DarkmodeButton from './DarkmodeButton';
import { useNavigate } from 'react-router-dom';

function Header() {
  let [darkmode, setDarkmode] = useState(false);
  let [sidemenu, setSidemenu] = useState(false);
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
  }, []);
  
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
    <div className={sidemenu?'header-wrap sideOn eglish':'header-wrap eglish'}>
      {/* 헤더 */}
      <div className='header-top'>
        <div>
          <div className='menu-btn' onClick={()=>{setSidemenu(!sidemenu)}}> 
            <span className={sidemenu?"habergermenu on":"habergermenu"}>
              <i></i>
              <i></i>
              <i></i>
            </span>  {sidemenu?"CLOSE":"MENU"}</div>
          <div className='home_email'>
            <div className='home_btn' onClick={()=>{navigate("/")}}><a href='#HOME'>HOME</a></div>
            <div className='email'>Kim Min Ju<br/><a href='mailto:rmforl1996@gmail.com'>rmforl1996@gmail.com</a></div>
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