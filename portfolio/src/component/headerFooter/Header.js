import React, { useState } from 'react'
import SideMenu from './SideMenu'
import DarkmodeButton from './DarkmodeButton';
import { useNavigate } from 'react-router-dom';

function Header() {
  let [darkmode, setDarkmode] = useState(false);
  let [sidemenu, setSidemenu] = useState(false);
  const navigate = useNavigate();

  
  let darkModeClick = ()=>{
    let body = document.documentElement;
    if(!darkmode){
      setDarkmode(true);
      body.classList.add("dark");
      body.setAttribute("class","dark");
    }else{
      setDarkmode(false);
      body.classList.remove("dark");
      body.setAttribute("class","light");
    }
  }
  return (
    <div className={sidemenu?'header-wrap sideOn eglish':'header-wrap eglish'}>
      {/* 헤더 */}
      <div className='header-top'>
        <div>
          <div className='menu-btn' onClick={()=>{setSidemenu(!sidemenu)}}>{sidemenu?"CLOSE":"MENU"}</div>
          <div className='home_email'>
            <div className='home_btn' onClick={()=>{navigate("/")}}>HOME</div>
            <div className='email'>Kim Min Ju<br/><a href='mailto:rmforl1996@gmail.com'>rmforl1996@gmail.com</a></div>
          </div>
          <DarkmodeButton darkModeClick={darkModeClick} darkmode={darkmode} sidemenu={sidemenu}/>
        </div>
      </div>
      {/* 사이드 메뉴 */}
      <SideMenu  darkModeClick={darkModeClick} darkmode={darkmode} sidemenu={sidemenu}/>
    </div>
  )
}

export default Header