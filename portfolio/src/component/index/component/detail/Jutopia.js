import React, { useEffect } from 'react'
import Mainbanner from './component/Mainbanner'
import "../../css/detail.css"
import Skils from './component/Skils';
import Role from './component/Role';
import Url from './component/Url';
import Mainbannerjutopia from './component/Mainbannerjutopia';
import Skilsjutopia from './component/Skilsjutopia';
import Rolejutopia from './component/Rolejutopia';


function Jutopia() {
   
  useEffect(()=>{
    window.scrollTo({top:0});
  },[]);

  return (
    <div style={{position:"relative"}}>
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

export default Jutopia