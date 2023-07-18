import React from 'react';
import './ModalRequisitos.css';

function ModalRequisitos() {
  return (
    <div className="position-relative text-center">
        <button type="button" className="btn btn-success w-100 mt-3" data-bs-toggle="modal" data-bs-target="#modalRequisitos">
            Revisa aquí los requisitos.
        </button>
        
    </div>
    
  );
}


export default ModalRequisitos;


