import './App.css';
import Header from './component/headerFooter/Header';
import Footer from './component/headerFooter/Footer';
import { Router, Routes, Route } from 'react-router-dom';
import MainPage from './component/index/MainPage';
import Lenis from '@studio-freight/lenis';
import { createContext, useEffect, useState } from 'react';
import LoadingAnime from './component/index/component/parts/LoadingAnime';


const LenisContext = createContext(null);
function App() {
  let [lading, setLoading] = useState(false);
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
  }, [lading]);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true);
    },3000);
  },[]);
 
  if(!lading) return <div className='LoadingAnima'>
    <LoadingAnime/>
  </div>

  return (
    <div onMouseMove={(e)=>{
     if(window.innerWidth > 1100) setMousexy({ x: e.pageX, y: e.pageY });
    }}>
      <Header lenis= {lenis} setLenis={setLenis} />
        <Routes>
          <Route path='/' element={<MainPage  lenis= {lenis} setLenis={setLenis}/>} />
        </Routes>
       
      <Footer  mousexy={mousexy}/>
    </div>
  );
}

export default App;
