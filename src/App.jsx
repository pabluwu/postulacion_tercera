import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Banner from './components/Banner'
import Carousel from './components/Carousel';
import Requisitos from './components/Requisitos';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {
  useEffect(() =>{
    Aos.init();
  }, [])
  
  return (
    <>
      <Banner/>
      
      <Carousel/>
      <Requisitos/>
    </>
  )
}

export default App
