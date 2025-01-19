import React, { createContext, useContext, useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

// LenisContext 생성
const LenisContext = createContext(null);

// LenisProvider 컴포넌트: Lenis 인스턴스를 전역적으로 관리
export const LenisProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 0.1,
      easing: (t) => t * (2 - t),
      smoothWheel: true,
      smoothTouch: false,
    });

    setLenis(lenisInstance);

    // 애니메이션 루프
    const animate = (time) => {
      lenisInstance.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => {
      lenisInstance.destroy(); // 컴포넌트 언마운트 시 Lenis 비활성화
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
};

// LenisContext를 사용할 때 호출할 커스텀 훅
export const useLenis = () => {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error('useLenis must be used within a LenisProvider');
  }
  return context;
};
