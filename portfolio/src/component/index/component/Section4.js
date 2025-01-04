import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import etcobj from "./parts/projectObject.json"
import { FreeMode, Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

import "../css/main4.css"
import { useLocation } from 'react-router-dom';

function Section4() {
    const pageindex = useRef(null);
    let section4 = useRef(null);
    const location = useLocation();
    const pagination = {
        el: pageindex.current,
        type: 'fraction',
    }

    useEffect(()=>{
        if( section4.current && document.querySelector(".section4")) {
            window.addEventListener("scroll",scrollFn);
        }else window.removeEventListener("scroll",scrollFn);
    
        
        return()=>{
            window.removeEventListener("scroll",scrollFn);
        }
        
    },[location]);

    let scrollFn=()=>{
        if(!section4.current ) return
        if(window.scrollY >= (section4.current.offsetTop - window.innerHeight/2)) section4.current.classList.add("on");
        // else section4.current.classList.remove("on");
    }
  return (
    <div className='section4' id="ETC" ref={section4}>
        <div>
            {window.innerWidth > 1100?
                <div className='left_title'>
                    <h2>ETC</h2>
                    <p>개인적으로 제작한 작업물과<br/>퍼블리싱 외주 작업물들을 소개합니다.</p>
                    {/* <span className='slideIndex' ref={pageindex}></span> */}
                </div>:""
            }
            <div className='slide-container'>
                <Swiper
                slidesPerView={2.1}
                spaceBetween={15}
                breakpoints={{
                    1100: {
                      slidesPerView: 3,
                      spaceBetween:30
                    },
                }}
                freeMode={true}
                modules={[Keyboard, Scrollbar, Navigation,FreeMode, Pagination]}
                className="mySwiper"
                scrollbar={{ draggable: true }}
                // navigation={true}
                pagination={pagination}
            >
                {window.innerWidth<1100?<SwiperSlide>
                    <div className='titleslide'>
                        <h2>ETC</h2>
                        <p>개인적으로 제작한 작업물과<br/>퍼블리싱 외주 작업물들을<br/>소개합니다.</p>
                    </div>
                    </SwiperSlide>:""}
                {etcobj.ETC.map((item, idx)=>{
                return <SwiperSlide key={idx}>
                    <div>
                    <a href={item.url} target='_black'>
                        <img src={item.img}/>
                        <p>{item.title}</p>
                        <div className='tagWrap'>
                            {item.content.map((tag, idx)=>
                                    <span key={idx}>{tag}</span>
                                )}
                        </div>
                    </a>
                    </div>
                </SwiperSlide>
                })}
            </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Section4