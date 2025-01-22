import React, { useEffect, useState } from 'react'
import WorkMainBanner from './parts/WorkMainBanner'
import DropdownText from './parts/DropdownText'

function WorkDetail({file}) {
  let [workData, useworkData] = useState({});
  let [dropdown , setDropdown] = useState({});
  let [loading, setLoading] = useState(false);
  useEffect(()=>{
    fetch(`/detailObject/${file}`).then((response)=> {
      return response.json(); // JSON으로 변환
    }).then((result)=>{
      useworkData(result.mainbanner);
      setDropdown(result.dropdown);
    })
    .catch((err)=>console.log(err)).finally(()=> setLoading(true));
  },[file]);
  if(!loading) return <div className='loadingAnimation'><img src='/image/loadingAnimation.gif' /></div>
  return (
    <div className='work' style={{position:"relative"}} data-lenis-prevent-wheel data-lenis-prevent-touch>
      <div className="topline"></div>
      <div className='detailcontainer'>
        <div>
          <WorkMainBanner workData={workData} />
        </div>
        {/* 경력사항 설명 */}
        <div className='dropdownContainer'>
          {dropdown && dropdown.map((dp, idx)=><DropdownText key={idx+dp.title} title={dp.title} text={dp.text}/> )}
         
         

        </div>
      </div>
    </div>
  )
}

export default WorkDetail