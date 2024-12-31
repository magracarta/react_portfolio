import React, { useEffect, useState } from 'react'

function Skils({dropdownFn}) {
    let [iconarray, setIconArray] = useState(Array.from({length:22}, (_,x)=> x+1));
    let [icon, setIcon] = useState(false);

  

    let showIcon = ()=>{
      setIcon(!icon);
      setTimeout(()=>{
        document.querySelector(".skils .content").style.height = document.querySelector(".skils .content > div").offsetHeight+1+"px";
      },100)
    }
  return (
    <li className='skils'>
        <div className='title' onClick={()=>{dropdownFn(3)}}>SKILLS<img src='/image/arrowBtn.svg' alt='arrowBtn'/></div>
        <div className='content'>
           <div>
              {!icon? 
                  <div className='text-wrap'>
                  <p>
                  JAVA<br/>
                  JSP & SERVLET<br/>
                  SPRING<br/>
                  SPRING BOOT<br/>
                  SPRING DATA JPA<br/>
                  MyBatis<br/>
                  ORACLE<br/>
                  MySQL<br/>
                  REACT<br/>
                  HTML & CSS<br/>
                  AJAX<br/>
                  AXIOS
                  </p>
                  <p>
                  JQUERY<br/>
                  JAVASCRIPT<br/>
                  Node.js<br/>
                  Express<br/>
                  </p>
                  </div>
                  :
                <div className='icon'>
                  <div>
                      <ul>
                        {iconarray.map((item)=> <li key={item}><img src={`/image/icon/icon (${item}).png`}/></li>)}
                      </ul>
                  </div>
                </div>
                }
                
                {/* 아이콘 보기버튼 */}
                <div className='showicon' onClick={showIcon}>
                  <img src='/image/eyeIcon.png' alt='eyeIcon.png' /> {icon?"글자로 보기":"아이콘으로 보기"}
                </div>
                {/* 아이콘 보기버튼 */}
           </div>
        </div>
    </li>
  )
}

export default Skils