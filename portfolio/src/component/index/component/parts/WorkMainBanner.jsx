import React from 'react'
import Graphparts from '../detail/component/Graphparts'
import Skillcionparts from '../detail/component/Skillcionparts'

function WorkMainBanner() {
  return (
    <div className='mainbanner'>
        <div className='left'>
          {/* 타이틀 */}
          <div className='title'>
            <small>커리어</small>
            <h2>FINGERSUIT</h2>
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
            <span className='name'>특징</span>
            <ul>
              <li>해외몰 : shopify 기반 반응형</li>
              <li>국내 : cafe24기반 pc, mo 적응형</li>
            </ul>
          </div>
          {/* 구현기능 요약 */}
          <div className='function'>
            <span className='name'>SKILL</span>
            <ul>
              <li><Skillcionparts img = {"front (8).png"} text={"HTML5"}/></li>
              <li><Skillcionparts img = {"front (2).png"} text={"CSS3"}/></li>
              <li><Skillcionparts img = {"front (3).png"} text={"JAVASCRIPT"}/></li>
              <li><Skillcionparts img = {"cafe24.png"} text={"CAFE24"}/></li>
              <li><Skillcionparts img = {"shopify.png"} text={"SHOPIFY"}/></li>
            </ul>
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

export default WorkMainBanner


          
          
          
          