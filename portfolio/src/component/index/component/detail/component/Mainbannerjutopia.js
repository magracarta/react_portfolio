import React from 'react'
import Graphparts from './Graphparts'

function Mainbannerjutopia() {
  return (
    <div className='mainbanner'>
        <div className='left'>
          {/* 타이틀 */}
          <div className='title'>
            <h2>JUTOPIA</h2>
            <div className='mobanner mo'>
                <img src='/image/zutopia.png' alt='zutopia.png'/>
            </div>
            <div className='content'>
              <p> 반려동물과 함께하는 커뮤니티 사이트의 주요 기능은 사용자들이 대회를 열고, 자신의 반려동물을 등록하여 순위를 매기는 시스템입니다. 사용자들은 대회에서 서로 경쟁하며, 커뮤니티에서 즐겁게 대화하고 다양한 콘텐츠를 경험할 수 있습니다.
                  <br/><br/>
                  첫 개발 미니 프로젝트로 라이브러리 사용을 최소화하고 기본 자바 문법과 서블릿, JSP를 활용하여 프로젝트를 개발했습니다. </p>
            </div>
          </div>
          {/* 구현기능 요약 */}
          <div className='function'>
            <span className='name'>구현 기능 요약</span>
            <ul>
              <li>대회열기 (등록, 조회, 수정, 삭제)</li>
              <li>대회참가 (등록, 조회, 수정, 삭제)</li>
            </ul>
          </div>
          {/* 기여도 */}
          <div className='graph'>
            <div>
              <span className='name'>기여도</span>
              <p>한 사람 기여도 (20점)을 기준으로 한 수치입니다.</p>
              <div className='graph-wrap'>
                <ul>
                  <Graphparts text={"기획"} num={50}/>
                  <Graphparts text={"개발"} num={30}/>
                  <Graphparts text={"참여도"} num={100}/>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='right pc'>
            <div>
                <img src='/image/zutopia.png' alt='zutopia.png'/>
            </div>
        </div>
      </div>
  )
}

export default Mainbannerjutopia