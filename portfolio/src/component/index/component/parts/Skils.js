import React, { useEffect, useState } from 'react'

function Skils({dropdownFn}) {
    let [iconarray, setIconArray] = useState(Array.from({length:22}, (_,x)=> x+1));
    let [icon, setIcon] = useState(false);

  

    let showIcon = ()=>{
      setIcon(!icon);
      setTimeout(()=>{
        document.querySelector(".skils .content").style.height = document.querySelector(".skils .content > div").offsetHeight+1+"px";
      },500)
    }
  return (
    <li className='skils'>
        <div className='title' onClick={()=>{dropdownFn(3)}}>SKILLS<img src='/image/arrowBtn.svg' alt='arrowBtn'/></div>
        <div className='content'>
           <div>
              {!icon? 
                  <div className='text-wrap'>
                   <ul>
                    <li>
                      <h4>-Frontend</h4>
                      <div className='tagwrap'>
                        <div className='tag'>HTML & CSS</div><div className='tag'>JQUERY</div><div className='tag'>JAVASCRIPT</div>
                        <div className='tag'>REACT</div><div className='tag'>AXIOS</div>
                      </div>
                    </li>
                    <li>
                      <h4>-Backend</h4>
                      <div className='tagwrap'>
                        <div className='tag'>JAVA</div><div className='tag'>JSP & SERVLET</div><div className='tag'>SPRING</div>
                        <div className='tag'>SPRING BOOT</div><div className='tag'>JPA</div><div className='tag'>MyBatis</div>
                        <div className='tag'>Node.js</div><div className='tag'>Express</div><div className='tag'>AWS</div>
                      </div>
                    </li>
                    <li>
                      <h4>-Database</h4>
                      <div className='tagwrap'>
                        <div className='tag'>MySQL</div><div className='tag'>ORACLE</div>
                      </div>
                    </li>
                    <li>
                      <h4>-Tool</h4>
                      <div className='tagwrap'>
                      <div className='tag'>Visual studio</div>
                      <div className='tag'>Eclipse</div>
                      <div className='tag'>Intellij</div>
                        <div className='tag'>FIGMA</div><div className='tag'>Photoshop</div><div className='tag'>Illustrator</div>
                      </div>
                    </li>
                   </ul>
                  </div>
                  :
                <div className='icon'>
                  <div>
                      <ul>
                        <li>
                          <h4>-Frontend</h4>
                          <div className='tagwrap'>
                            <img src={`/image/icon/icon (6).png`}/>
                            <img src={`/image/icon/icon (7).png`}/>
                            <img src={`/image/icon/icon (9).png`}/>
                            <img src={`/image/icon/icon (4).png`}/>
                            <img src={`/image/icon/icon (11).png`}/>
                          </div>
                        </li>
                        <li>
                          <h4>-Backend</h4>
                          <div className='tagwrap'>
                            <img src={`/image/icon/icon (22).png`}/>
                            <img src={`/image/icon/icon (17).png`}/>
                            <img src={`/image/icon/icon (16).png`}/>
                            <img src={`/image/icon/icon (21).png`}/>
                            <img src={`/image/icon/icon (14).png`}/>
                            <img src={`/image/icon/icon (23).png`}/>
                            <img src={`/image/icon/icon (24).png`}/>
                            <img src={`/image/icon/icon (25).png`}/>
                          </div>
                        </li>
                        <li>
                          <h4>-Database</h4>
                          <div className='tagwrap'>
                            <img src={`/image/icon/icon (19).png`}/>
                            <img src={`/image/icon/icon (26).png`}/>
                          </div>
                        </li>
                        <li>
                          <h4>-Tool</h4>
                          <div className='tagwrap'>
                            <img src={`/image/icon/icon (1).png`}/>
                            <img src={`/image/icon/icon (8).png`}/>
                            <img src={`/image/icon/icon (20).png`}/>
                            <img src={`/image/icon/icon (2).png`}/>
                            <img src={`/image/icon/icon (27).png`}/>
                            <img src={`/image/icon/icon (28).png`}/>
                          </div>
                        </li>


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