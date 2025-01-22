import React from 'react'
import WorkMainBanner from './parts/WorkMainBanner'

function WorkDetail() {
  return (
    <div style={{position:"relative"}} data-lenis-prevent-wheel data-lenis-prevent-touch>
      <div className="topline"></div>
      <div className='detailcontainer'>
        <div>
          <WorkMainBanner />
        </div>
        {/* 경력사항 설명 */}
        
      </div>
    </div>
  )
}

export default WorkDetail