import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import RentmonModal from './detail/RentmonModal'
import JutopiaModal from './detail/JutopiaModal'
import "../css/mainExperience.css"

export default function Section4Experience({ lenis }) {
  const [modalType, setModalType] = useState('')

  useEffect(() => {
    if (modalType) {
      document.body.style.overflow = 'hidden'
      if (lenis) lenis.stop()
    } else {
      document.body.style.overflow = 'auto'
      if (lenis) lenis.start()
    }
  }, [modalType, lenis])

  const openModal = (type) => setModalType(type)
  const closeModal = () => setModalType('')

  return (
    <div className='sectionExp' id='experience'>
      <div className='innerContainer expInner'>

        <small className='expLabel'>Experience</small>

        <div className='expGrid'>

          {/* 왼쪽 — 모바일 팩토리 */}
          <div className='expCard expCardMain'>
            <div className='expCardTop'>
              <div>
                <h3 className='expCompany'>모바일 팩토리</h3>
                <p className='expRole'>FullStack Developer · 사원</p>
              </div>
              <span className='expPeriod'>2025.03 ~ 현재</span>
            </div>

            <p className='expDesc'>
              반도체 부품 제조 공장의 디지털 전환을 위한 통합 ERP 시스템을 처음부터 설계·구축하는 프로젝트에 풀스택 개발자로 참여했습니다.
            </p>

            <ul className='expPoints'>
              <li>구글 워크스페이스 기반 수기 업무 체계를 통합 ERP 시스템으로 전환 (2026.01 오픈)</li>
              <li>Spring Boot 1.4 → 3.2 레거시 마이그레이션 수행 (Java 11 → 17)</li>
              <li>제조·영업·물류·회계·인사 전 모듈 개발 및 천안 사업장 현장 QA 완수</li>
              <li>천안 사업장 현장 상주를 통한 실시간 요구사항 분석 및 QA 완수</li>
              <li>Claude AI 도입 후 코드 리뷰 및 디버깅 보조에 활용하여 개발 생산성 향상</li>
            </ul>

            <div className='expProjects'>
              <div className='expSubCard'>
                <div className='expSubTop'>
                  <strong>ERP 프레임워크 현대화 및 마이그레이션</strong>
                  <span className='expPeriod'>2025.03 ~ 2025.04</span>
                </div>
                <p>Spring Boot 1.4.3 → 3.2.6 마이그레이션 · jakarta 패키지 전환 · Java 17 업그레이드 · Redis 호환성 검토</p>
              </div>

              <div className='expSubCard'>
                <div className='expSubTop'>
                  <strong>제조 공정 및 생산 현황 관리 모듈</strong>
                  <span className='expPeriod'>2025.06 ~ 2026.01</span>
                </div>
                <p>품목 생성 · 공정별 투입지시서 및 작업 지시서 생성 로직 · AUIGrid 활용하여 UI 개발 · 공통 시스템 제작 참여</p>
              </div>

              <div className='expSubCard'>
                <div className='expSubTop'>
                  <strong>원가 회계 및 전표 관리 시스템</strong>
                  <span className='expPeriod'>2025.12 ~ 2026.05</span>
                </div>
                <p>공정별 원가 계산 로직 구현 · 전표 관리항목 등록 · 수익성 지표 시각화 · 현장 상주 요구사항 분석</p>
              </div>

              <div className='expSubCard'>
                <div className='expSubTop'>
                  <strong>공정 고도화 및 인사 퇴직계 시스템</strong>
                  <span className='expPeriod'>2026.06 ~ 현재</span>
                </div>
                <p>창고 공정 추가 및 공정 로직 고도화 · 인사 퇴직계 업무 시스템 개발</p>
              </div>
            </div>

            <div className='expTags'>
              {['Java 17', 'Spring Boot 3.2', 'Oracle', 'Redis', 'JSP', 'jQuery', 'Gradle', 'Git', 'Claude AI'].map(t => (
                <span className='expTag' key={t}>{t}</span>
              ))}
            </div>
          </div>

          {/* 오른쪽 */}
          <div className='expRightCol'>

            {/* 에코마케팅 */}
            <div className='expCard'>
              <div className='expCardTop'>
                <div>
                  <h3 className='expCompany'>에코마케팅</h3>
                  <p className='expRole'>웹 퍼블리셔 · 디자인팀 프로덕트 파트 신입</p>
                </div>
                <span className='expPeriod'>2020.12 ~ 2024.01</span>
              </div>

              <p className='expDesc'>
                자사 브랜드 사이트 런칭부터 이벤트 페이지 운영·유지보수까지 이커머스 전반의 고객 접점 업무를 담당했습니다. 퍼블리싱셀의 업무 지시 및 관리 경험도 보유하고 있습니다.
              </p>

              <ul className='expPoints'>
                <li>티타드·클럭·안다르·봉쥬·핑거스트·데일리엔코 등 자사몰 해외몰 신규 런칭 (디자인 및 퍼블리싱)</li>
                <li>이벤트·운영 페이지 제작 및 자사몰 유지보수 전담</li>
                <li>마케팅팀·디자이너와 협업을 통한 신규 기능 기획 및 구현</li>
                <li>퍼블리싱셀 업무 지시 및 관리</li>
              </ul>

              <div className='expTags'>
                {['HTML', 'CSS', 'JavaScript', 'jQuery', 'Photoshop', 'Figma'].map(t => (
                  <span className='expTag' key={t}>{t}</span>
                ))}
              </div>
            </div>

            {/* 사이드 프로젝트 */}
            <button className='expSideCard' onClick={() => openModal('rentmon')}>
              <div>
                <span className='expSideLabel'>사이드 프로젝트</span>
                <strong className='expSideName'>렌트몬</strong>
              </div>
              <span className='expArrow'>→</span>
            </button>

            <button className='expSideCard' onClick={() => openModal('zootopia')}>
              <div>
                <span className='expSideLabel'>사이드 프로젝트</span>
                <strong className='expSideName'>주토피아</strong>
              </div>
              <span className='expArrow'>→</span>
            </button>

          </div>
        </div>

      </div>

      <ReactModal
        isOpen={!!modalType}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div className='closeBtn' onClick={closeModal}><i></i></div>
        {modalType === 'rentmon' && <RentmonModal />}
        {modalType === 'zootopia' && <JutopiaModal />}
      </ReactModal>

    </div>
  )
}
