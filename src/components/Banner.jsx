import './BannerStyle.css';
import Formulario from './Formulario'
import Modal from './Modal';
import ModalRequisitos from './ModalRequisitos';
import terceraLogo from '../assets/logo_blanco.png'

function Banner() {
  return (
    <div className="container-fluid banner position-relative">
      <div className="bg-banner"></div>
      <div className="background-banner w-100 h-100 position-absolute start-0 top-0"></div>
      <div className="container titulo-banner position-relative">
        <h1 className='text-light text-center' data-aos="fade-right" data-aos-delay="500">Postula a la Tercera Compañía de Bomberos "José Maria Landeta".</h1>
      </div>
      <div className="container logo-compania position-relative text-center">
        <img className='' data-aos="fade-left" data-aos-delay="1000" src={terceraLogo} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 ">
            <Modal/>
          </div>
          <div className="col-lg-6 col-md-12 ">
            <ModalRequisitos/>
          </div>
        </div>
      </div>
      
      <Formulario/>
      
    </div>
  );
}


export default Banner;
