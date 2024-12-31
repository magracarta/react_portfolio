import React from 'react'
import Graphparts from './Graphparts'

function Mainbanner() {
  return (
    <div className='mainbanner'>
        <div className='left'>
          {/* 타이틀 */}
          <div className='title'>
            <h2>RENTMON</h2>
            <div className='mobanner mo'>
                <img src='/image/rentmon.png' alt='rentmon.png'/>
            </div>
            <div className='content'>
              <p> 렌트몬 프로젝트는 효율적이고 간편하게 공간을 공유할 수 있는 플랫폼으로, 유저, 호스트, 어드민 세 개의 클라이언트를 통해 각각의 서비스에 접근할 수 있습니다.  각 클라이언트는 사용자 유형에 맞춘 기능을 제공하여, 유저는 공간을 예약하고, 호스트는 공간을 등록 및 관리하며, 어드민은 플랫폼 전체를 관리하는 역할을 수행할 수 있도록 설계했습니다.
                  <br/><br/>
                  다양한 라이브러리와 프레임워크 그리고 외부 API를 사용하여 기술적인 지식을 습득하고 이를 실제로 구현하는 데 목적을 두었습니다.</p>
            </div>
          </div>
          {/* 구현기능 요약 */}
          <div className='function'>
            <span className='name'>구현 기능 요약</span>
            <ul>
              <li>공간등록 (등록, 조회, 수정, 삭제)</li>
              <li>공간예약 (예약, 조회, 수정, 삭제)</li>
              <li>예약 확인 (조회)</li>
            </ul>
          </div>
          {/* 기여도 */}
          <div className='graph'>
            <div>
              <span className='name'>기여도</span>
              <p>한 사람 기여도 (20점)을 기준으로 한 수치입니다.</p>
              <div className='graph-wrap'>
                <ul>
                  <Graphparts text={"기획"} num={40}/>
                  <Graphparts text={"개발"} num={25}/>
                  <Graphparts text={"참여도"} num={100}/>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='right pc'>
            <div>
                <img src='/image/rentmon.png' alt='rentmon.png'/>
            </div>
        </div>
      </div>
  )
}

export default Mainbanner