import './App.css';
import Header from './component/headerFooter/Header';
import Footer from './component/headerFooter/Footer';
import { Route, Routes } from 'react-router-dom';
import MainPage from './component/index/MainPage';

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>  
      <Footer/>
    </>
  );
}

export default App;
