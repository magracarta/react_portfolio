import React from 'react'
import "../css/mainAbout.css"

export default function Section2About() {
  return (
    <div className='sectionAbout' id='about'>
      <div className='innerContainer aboutInner'>

        {/* 왼쪽 */}
        <div className='aboutLeft'>
          <small className='aboutLabel'>About Me</small>
          <p className='aboutSub'>사용자의 불편함을 먼저 보고 해결하는</p>
          <h2 className='aboutTitle'>개발자, 김민주입니다.</h2>

          <div className='aboutDesc'>
            <p>이커머스 현장에서 사용자의 불편함을 직접 보며 시스템이 경험을 결정한다는 것을 배웠습니다.</p>
            <p>그 경험이 저를 개발자로 이끌었고, 지금은 풀스택 개발자로 문제를 발견하면 끝까지 파고드는 방식으로 일합니다.</p>
            <p>"어떻게 하면 더 편리하게 쓸 수 있을까" 그 고민이 멈추지 않는 게 저의 개발 방식입니다.</p>
          </div>

          <div className='aboutTags'>
            <span className='tag filled'>사용자 중심</span>
            <span className='tag filled'>문제 분석</span>
            <span className='tag outline'>과몰입</span>
            <span className='tag outline'>풀스택</span>
            <span className='tag outline'>현장 경험</span>
          </div>

          <div className='aboutLinks'>
            <a href='https://github.com/magracarta' target='_blank' rel='noreferrer' className='aboutLinkIcon'>
              <svg width='28' height='28' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12'/>
              </svg>
            </a>
            <a href='https://poised-magpie-c4b.notion.site/f254941208fc41dd9c99f3b31d233f07?pvs=74' target='_blank' rel='noreferrer' className='aboutLinkIcon'>
              <svg width='28' height='28' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z'/>
              </svg>
            </a>
          </div>
        </div>

        {/* 오른쪽 */}
        <div className='aboutRight'>

          <div className='aboutCard'>
            <span className='cardLabel'>현재</span>
            <p className='cardTitle'>모바일 팩토리 | 풀스택 개발자</p>
            <p className='cardSub'>KNJ ERP 시스템 프로젝트</p>
          </div>

          <div className='aboutCard'>
            <span className='cardLabel'>커리어 타임라인</span>
            <ul className='timeline'>
              <li>
                <span className='tlDate'>2025.03 ~ 현재</span>
                <strong>모바일 팩토리</strong>
                <span className='tlRole'>풀스택 개발자</span>
              </li>
              <li>
                <span className='tlDate'>2020.12 ~ 2024.01</span>
                <strong>[실무프로젝트] 자바 웹개발자(React, Springboot, intelliJ, AWS)</strong>
              </li>
              <li>
                <span className='tlDate'>2020.12 ~ 2024.01</span>
                <strong>에코마케팅</strong>
                <span className='tlRole'>퍼블리셔</span>
              </li>
              <li>
                <span className='tlDate'>2015.03 ~ 2019.08</span>
                <strong>상명대학교 디지털콘테츠과 졸업</strong>
              </li>
            </ul>
          </div>

          <div className='aboutCard'>
            <span className='cardLabel'>자격증</span>
            <ul className='certList'>
              <li>정보처리기사</li>
              <li>SQLD</li>
              <li>웹디자인기능사</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
