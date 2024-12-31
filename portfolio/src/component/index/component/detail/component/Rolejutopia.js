import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { FreeMode, Keyboard, Scrollbar, Navigation } from 'swiper/modules';

import rentmon from "./parts/projectdetail.json"

function Rolejutopia() {
  return (
    <div className='role innerContainer zu'>
        <div className='top'>
           <span className='name'>담당역할</span>
           <p>렌트몬 프로젝트에서 저는 서버는 공통으로 클라이언트는 유저의 회원관리와 예약확인을 담당했습니다. </p>
        </div>
        <div className='swiper-wrap'>
            <Swiper
                    slidesPerView={1.2}
                    spaceBetween={15}
                    breakpoints={{
                        1100: {
                        slidesPerView: 2.1,
                        spaceBetween:30
                        },
                    }}
                    freeMode={true}
                    modules={[Keyboard, Scrollbar, Navigation,FreeMode]}
                    className="mySwiper"
                    scrollbar={true}
                    // navigation={true}
                >
                    
                    {rentmon.zutopia.map((item, idx)=>{
                    return <SwiperSlide key={idx}>
                        <div>
                            <img src={item.img}/>
                            <p>{item.title}</p>
                            <div className='tagWrap'>
                                {item.content}
                            </div>
                        </div>
                    </SwiperSlide>
                    })}
                </Swiper>
        </div>
    </div>
  )
}

export default Rolejutopia