import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom'
import RentmonModal from '../detail/RentmonModal';
import JutopiaModal from '../detail/JutopiaModal';



function ProjectListParts({ item, index, allnum , lenis ,setLenis}) {
  let [pmopen , setPmopen] = useState(false);

  useEffect(()=>{
    if (pmopen) {
        document.body.style.overflow = 'hidden';  // 모달 열 때 페이지 스크롤 비활성화
        if (lenis) lenis.stop();  // Lenis 애니메이션 비활성화
      } else {
        document.body.style.overflow = 'auto';  // 모달 닫을 때 페이지 스크롤 활성화
        if (lenis) lenis.start();  // Lenis 애니메이션 재시작
      }
  },[pmopen,lenis]);

  let navigate = useNavigate();


  return (
    <li>
        <div className='left'>
            <div>
                <p>PROJECT</p>
                <span>({String(index+1).padStart(2,"0")}/{String(allnum).padStart(2,"0")})</span>
            </div>
        </div>
        <div className='right'>
            <div>
                <div className='text'>
                    <h2>{item.title}</h2>
                    {window.innerWidth >= 1100 ? <pre>{item.content}</pre>:<p>{item.content.replaceAll("\n", "")}</p>}
                    <a href="#none" onClick={()=>{
                        setPmopen(true)
                        // navigate(item.url)
                        }}>자세히 보기 <img src='/image/moreviewArrow.svg' alt='moreviewArrow.svg' /></a>
                </div>
                <div className='img'>
                    <div>
                        <img src={'/image/'+item.img} alt='rentmon' />
                        <img src={'/image/'+item.img} alt='rentmon' />
                    </div>
                </div>
            </div>
        </div>
        <ReactModal
            isOpen={pmopen}
            onRequestClose={()=>{setPmopen(false)}}
            ariaHideApp={false}
        >
            <div className='closeBtn' onClick={()=>{setPmopen(false)}}><i></i></div>
            {
                item.title=="RENTMON"?<RentmonModal/>:<JutopiaModal/>
            }
        </ReactModal>
    </li>
  )
}

export default ProjectListParts