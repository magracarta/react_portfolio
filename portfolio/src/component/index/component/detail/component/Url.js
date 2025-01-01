import React from 'react'

function Url() {
  return (
    <div className='url'>
        <div className='top innerContainer'>
            <span className='name'>URL</span>
        </div>
        <div className='url-wrap'>
            <a href='http://magracarta.pe.kr/user/' target='blank'>유저페이지 &gt;</a>
            <a href='http://magracarta.pe.kr/host/' target='blank'>호스트페이지 &gt;</a>
            <a href='http://magracarta.pe.kr/admin/' target='blank'>관리자페이지 &gt;</a>
        </div>
    </div>
  )
}

export default Url

