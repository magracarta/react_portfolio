import React from 'react'

function InfoBox({dropdownFn}) {
  return (
    <li className='infobox' onClick={()=>{dropdownFn(1)}}>
        <div className='title'>INFO<img src='/image/arrowBtn.svg' alt='arrowBtn'/></div>
        <div className='content'>
          <div>
            <div className='text-wrap'>
                <span>PROFILE</span>
                <p>김민주<br/>1996.01.28<br/>서울시 흑석동</p>
                <p>rmfoal1996@gmail.com<br/>010 2236 0381</p>
            </div>
            <div className='text-wrap'>
                <span>EDUCATION</span>
                <p>2019.08<br/>상명대학교 디지털콘테츠과 졸업</p>
                <p>2014.02<br/>동덕여자 고등학교  졸업</p>
            </div>
            <div className='text-wrap'>
                <span>WORK</span>
                <p>2020.12~2024.01<br/>에코마케팅 디자인팀 프로덕트 파트 선임</p>
            </div>
          </div>
        </div>
    </li>
  )
}

export default InfoBox