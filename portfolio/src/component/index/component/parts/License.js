import React from 'react'

function License({dropdownFn}) {
  return (
    <li className='license' >
        <div className='title' onClick={()=>{dropdownFn(4)}}>LICENSE<img src='/image/arrowBtn.svg' alt='arrowBtn'/></div>
        <div className='content'>
          <div>
            <div className='text-wrap'>
                <span>2024.12.11</span>
                <p>정보처리 기사</p>
            </div>
            <div className='text-wrap'>
                <span>2024.12.13</span>
                <p>SQL 개발자 (SQLD)</p>
            </div>
            <div className='text-wrap'>
                <span>2020.09.25</span>
                <p>웹디자인 기능사</p>
            </div>
          </div>
        </div>
    </li>
  )
}

export default License