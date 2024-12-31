import React from 'react'

function ActivitiesProject({dropdownFn}) {
  return (
    <li className='activities' onClick={()=>{dropdownFn(2)}}>
        <div className='title'>ACTIVITIES & PROJECTS<img src='/image/arrowBtn.svg' alt='arrowBtn'/></div>
        <div className='content'>
            <div>
                <div className='text-wrap'>
                    <span>2024.03 ~ 2024.09</span>
                    <p>[실무프로젝트] 자바 웹개발자(React,<br/>Springboot, intelliJ, AWS)</p>
                </div>
                <div className='text-wrap'>
                    <span>2024.07 ~ 2024.09</span>
                    <p>프로젝트 ‘RENTMON’</p>
                </div>
                <div className='text-wrap'>
                    <span>2024.05 ~ 2024.06</span>
                    <p>프로젝트 ‘JUTOPIA’</p>
                </div>
                <div className='text-wrap'>
                    <span>2020.04 ~ 2020.09</span>
                    <p>웹디자인(웹퍼블리셔)프론트앤드실무자양성_A</p>
                </div>
            </div>
        </div>
    </li>
  )
}

export default ActivitiesProject