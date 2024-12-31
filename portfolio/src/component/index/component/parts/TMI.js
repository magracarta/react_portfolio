import React from 'react'

function TMI({dropdownFn}) {
  return (
    <li className='tmi' >
        <div className='title' onClick={()=>{dropdownFn(5)}}>TMI<img src='/image/arrowBtn.svg' alt='arrowBtn'/></div>
        <div className='content'>
            <div>
                <div className='text-wrap'>
                    <span>001</span>
                    <div className='textAni'><p>컴퓨터 공학 (컴퓨터 구조/운영체제)서적을 구매하여 공부하고 있습니다. 컴퓨터 공학 (컴퓨터 구조/운영체제)서적을 구매하여 공부하고 있습니다. </p></div>
                </div>
                <div className='text-wrap'>
                    <span>002</span>
                    <div className='textAni'><p>기본기를 탄탄하게 다지기 위해 자바와서블릿을 복습하고 있습니다. 기본기를 탄탄하게 다지기 위해 자바와서블릿을 복습하고 있습니다. </p></div>
                </div>
                <div className='text-wrap'>
                    <span>003</span>
                    <div className='textAni'><p>저는 디자인 전공을 했기 때문에 디테일을 더 신경쓰는 경향이 있습니다. 저는 디자인 전공을 했기 때문에 디테일을 더 신경쓰는 경향이 있습니다. </p></div>
                </div>
                <div className='text-wrap'>
                    <span>004</span>
                    <div className='textAni'><p>새로운 기술을 공부하고 작업물에 적용해보는 것은 언제나 즐겁습니다. 새로운 기술을 공부하고 작업물에 적용해보는 것은 언제나 즐겁습니다. </p></div>
                </div>
                <div className='text-wrap'>
                    <span>005</span>
                    <div className='textAni'><p>최근에 개발 블로그를 시작했습니다. 저의 공부를 기록하고 싶어서요! 최근에 개발 블로그를 시작했습니다. 저의 공부를 기록하고 싶어서요! </p></div>
                </div>
                <div className='text-wrap'>
                    <span>006</span>
                    <div className='textAni'><p>과하게 몰입하는 경우가 있습니다. 풀리지 않은 일은 해결될때까지 고민합니다. 과하게 몰입하는 경우가 있습니다. 풀리지 않은 일은 해결될때까지 고민합니다. </p></div>
                </div>
                
                <div className='anoter'>
                    <img src='/image/dropdownArrw.svg' alt='dropdownArrw.svg'/> 저에 대해 더 궁금하시지 않나요?!
                </div>
            </div>
        </div>
    </li>
  )
}

export default TMI