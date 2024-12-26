import logo from './logo.svg';
import './App.css';
import Header from './component/headerFooter/Header';
import Footer from './component/headerFooter/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route></Route>
        </Routes>  
      <Footer/>
    </>
  );
}

export default App;
