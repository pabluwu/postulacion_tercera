import React from 'react';
import './Requisitos.css'
import { useState, useEffect } from 'react';



function Requisitos() {

    return (
        <div class="modal fade" id="modalRequisitos" tabindex="-1" aria-labelledby="modalRequisitoLabel" aria-hidden="true">
            <div class="modal-dialog modal-requisitos">
                <div class="modal-content w-auto h-auto">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalRequisitoLabel">Requisitos de postulación a la Tercera Compañía de Bomberos de Quillota.</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul>
                            <li>COMPLETAR HOJA DE POSTULACIÓN.</li>
                            <li>TRES FOTOGRAFÍAS TAMAÑO CARNET CON NOMBRE COMPLETO Y RUT.</li>
                            <li>CERTIFICADO DE ANTECEDENTES (ANTIGÜEDAD DE NO MÁS DE 30 DÍAS).</li>
                            <li>CERTIFICADO DE RESIDENCIA. (ANTIGÜEDAD NO MÁS DE 30 DÍAS).</li>
                            <li>CUOTA DE INCORPORACIÓN DE $20000.</li>
                            <li>CARTA DE PRESENTACIÓN DE A LO MENOS 2 VOLUNTARIOS O 2 PERSONAS QUE NO LO SEAN.</li>
                            <li>CERTIFICADO DE ENSEÑANZA MEDIA COMPLETA O EQUIVALENTE, O CERTIFICADO ALUMNO REGULAR SI ESTÁ CURSANDO ENSEÑANZA MEDIA.</li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Requisitos;
