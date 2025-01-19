import React, { useEffect } from 'react'
import Mainbanner from './component/Mainbanner'
import Skils from './component/Skils';
import Role from './component/Role';
import Url from './component/Url';


function RentmonModal() {
  
  useEffect(()=>{
    
    // window.scrollTo({top:0,behavior:"instant"});
  },[]);

  return (
    
    <div style={{position:"relative"}} data-lenis-prevent-wheel data-lenis-prevent-touch>
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

export default RentmonModal