import './App.css';
import Header from './component/headerFooter/Header';
import Footer from './component/headerFooter/Footer';
import { Router, Routes, Route } from 'react-router-dom';
import MainPage from './component/index/MainPage';
import Rentmon from './component/index/component/detail/Rentmon';
import Jutopia from './component/index/component/detail/Jutopia';

import Lenis from '@studio-freight/lenis';
import { createContext, useEffect, useState } from 'react';


const LenisContext = createContext(null);
function App() {
  const [lenis, setLenis] = useState(null);
  const [mousexy , setMousexy] = useState({x:0, y:0});
 
  useEffect(() => {
 
    const lenisInstance = new Lenis({
      duration: 0.8,  // 빠르고 부드럽게 반응하도록 duration을 설정
      easing: (t) => t * (2 - t),  // 부드럽게 시작하고 끝나는 이징 함수
      smoothWheel: true,  // 휠 스크롤 부드럽게 처리
      smoothTouch: true,  // 터치 스크롤 부드럽게 처리
    });
    
    setLenis(lenisInstance);
    // 애니메이션 최적화 루프
    const animate = (time) => {
      lenisInstance.raf(time);
      requestAnimationFrame(animate);
    };

    // 애니메이션 시작
    requestAnimationFrame(animate);

    // 컴포넌트 unmount 시 Lenis 인스턴스를 정리
    return () => {
      lenisInstance.destroy();
    };
  }, []);

 
  

  return (
    <div onMouseMove={(e)=>{
     if(window.innerWidth > 1100) setMousexy({ x: e.pageX, y: e.pageY });
    }}>
      <Header />
        <Routes>
          <Route path='/' element={<MainPage  lenis= {lenis} setLenis={setLenis}/>} />
          <Route path='/detail/rentmon' element={<Rentmon />} />
          <Route path='/detail/jutopia' element={<Jutopia />} />
        </Routes>
       
      <Footer  mousexy={mousexy}/>
    </div>
  );
}

export default App;
