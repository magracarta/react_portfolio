import React, { useEffect } from 'react'
import Mainbanner from './component/Mainbanner'
import "../../css/detail.css"
import Skils from './component/Skils';
import Role from './component/Role';
import Url from './component/Url';


function Rentmon() {
  
  useEffect(()=>{
    window.scrollTo({top:0});
  },[]);

  return (
    
    <div style={{position:"relative"}}>
      <div className="topline"></div>
      <div className='detailcontainer'>
        <div>
          <Mainbanner />
        </div>
        <Skils/>
        <Role />
        <Url/>
      </div>
    </div>
  )
}

export default Rentmon