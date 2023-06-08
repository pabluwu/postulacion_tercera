import React from 'react';
import './BannerStyle.css';
import Formulario from './Formulario'

function Banner() {
  return (
    <div className="container-fluid banner vh-100 position-relative">
      <div className="bg-banner"></div>
      <div className="background-banner w-100 h-100 position-absolute start-0 top-0"></div>
      <div className="container titulo-banner position-relative">
        <h1 className='text-light text-center' data-aos="fade-right" data-aos-delay="500">Postula a la Tercera Compañía de Bomberos "José Maria Landeta".</h1>
      </div>
      <div className="container logo-compania position-relative text-center">
        <img className='' data-aos="fade-left" data-aos-delay="1000" src="/img/logo_blanco.png" alt="" />
      </div>
      <Formulario/>
    </div>
  );
}


export default Banner;
