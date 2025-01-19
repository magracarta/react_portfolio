import React, { useEffect } from 'react'
import Mainbanner from './component/Mainbanner'
// import "../../css/detail.css"
import Skils from './component/Skils';
import Role from './component/Role';
import Url from './component/Url';
import Mainbannerjutopia from './component/Mainbannerjutopia';
import Skilsjutopia from './component/Skilsjutopia';
import Rolejutopia from './component/Rolejutopia';


function JutopiaModal() {
   
  useEffect(()=>{
    // window.scrollTo({top:0,behavior:"instant"});
  },[]);

  return (
    <div style={{position:"relative"}} data-lenis-prevent-wheel data-lenis-prevent-touch>
      <div className="topline"></div>
      <div className='detailcontainer'>
        <div>
          <Mainbannerjutopia />
        </div>
        <Skilsjutopia/>
        <Rolejutopia />
      </div>
    </div>
  )
}

export default JutopiaModal