import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Banner from './components/Banner'
import Footer from './components/Footer'



function App() {
  useEffect(() =>{
    Aos.init();
  }, [])
  
  return (
    <>
      <Banner/>
      <Footer/>
    </>
  )
}

export default App
