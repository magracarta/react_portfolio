import React from 'react'
import "../css/main1.css"

function Section1() {
  return (
    <div className='section01' id ="HOME">
        <div className='innerContainer'>
            {/* 글자 */}
            <div className='textTitle'>
                <div className='titleAni'>
                    <div><h1>DEVELOPER</h1></div>
                </div>
                <span className='line'></span>
                <div className='tag-container'>
                    <span className='tag'>FRONTEND</span>
                    <span className='tag'>+</span>
                    <span className='tag'>BACKEND</span>
                    <span className='tag'>=</span>
                    <span className='tag'>WEB DEVELOPER</span>
                </div>
                <div className='line-context'>
                    <p>개발자 김민주를 소개합니다.</p>
                    <div className='bottom'>
                        <span>2025</span>
                        <span>DEVELOPER</span>
                        <span>PORTFOLIO</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1