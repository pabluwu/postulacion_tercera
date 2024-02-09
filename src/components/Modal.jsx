import React from 'react';
import './Modal.css';

function Modal() {
  return (
    <div className="position-relative text-center">
        <button type="button" className="btn btn-success w-100 mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Conoce más de nosotros.
        </button>
        
    </div>
    
  );
}


export default Modal;


