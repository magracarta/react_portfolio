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
  const [lenis, setLenis] = useState(null);
  const [mousexy , setMousexy] = useState({x:0, y:0});
 
 
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
