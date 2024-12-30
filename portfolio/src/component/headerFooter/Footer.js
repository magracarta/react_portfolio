import React from 'react'
import MenuAtag from './MenuAtag'

function Footer() {
  return (
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
            <div className='bottomtext'>성장을 위해 노력하는 개발자입니다 :-)</div>
          </div>
          {/* right */}
          <div className='right'>
            <div className='topmenu'>
              <ul>
                <MenuAtag text={"HOME"} clickFn={()=>{}} idx = {"1"}/>
                <MenuAtag text={"PROJECT"} clickFn={()=>{}} idx = {"2"} />
                <MenuAtag text={"ETC"} clickFn={()=>{}} idx = {"3"} />
                <MenuAtag text={"RECORD"} clickFn={()=>{}} idx = {"4"} />
              </ul>
            </div>
            <div className='bottom'>성장을 위해 노력하는 개발자입니다 :-)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer