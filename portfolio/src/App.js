import './App.css';
import Header from './component/headerFooter/Header';
import Footer from './component/headerFooter/Footer';
import { Router, Routes, Route } from 'react-router-dom';
import MainPage from './component/index/MainPage';
import Rentmon from './component/index/component/detail/Rentmon';
import Jutopia from './component/index/component/detail/Jutopia';



function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/detail/rentmon' element={<Rentmon />} />
          <Route path='/detail/jutopia' element={<Jutopia />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
