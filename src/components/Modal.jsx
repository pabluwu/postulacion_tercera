import React from 'react';
import './Modal.css';

function Modal() {
  return (
    <div className="position-relative text-center">
        <button type="button" className="btn btn-primary w-100 mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Revisa aquí imagenes de nuestra compañía.
        </button>
        
    </div>
    
  );
}


export default Modal;


