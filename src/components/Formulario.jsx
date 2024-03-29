import './FormularioStyle.css';

import axios from 'axios';
import { useState } from 'react';
import { GridLoader } from 'react-spinners';
import { useMask } from '@react-input/mask';


const override = {
    margin: "0 auto",
}

function Formulario() {
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [rut, setRut] = useState('');
    const [celular, setCelular] = useState('');

    const inputRef = useMask({ mask: '+56 _________', replacement: { _: /\d/ } });
    const inputRut = useMask({ mask: '__.___.___-D', replacement: { _: /\d/, D:/[0-9k]/ } });

    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            Email: email,
            Nombre: nombre,
            Apellidos: apellido,
            Rut: rut,
            Celular: `'${celular}`,
            Fecha_Postulacion: (new Date()).toLocaleString()
        }

        console.log(email, nombre, apellido);

        setLoading(true);
        axios.post('https://postulaciones.bombalandeta.cl/sender/', data).then((response) => {
            console.log(response);
            setLoading(false);
            setShowSuccess(true);
        });
        // const url = `https://postulaciones.bombalandeta.cl/sender/?email=${email}`
        // fetch(url)
        // .then(res => console.log(res))

    };

    return (
        <div className="container-fluid formulario-container position-relative">
            <div className="card mx-auto" data-aos="fade-up" data-aos-delay="1500">
                {!loading && !showSuccess && (
                    <form onSubmit={handleSubmit} >
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
                                onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                                <input type="text" className="form-control" placeholder="" aria-label="Nombres" required
                                    onChange={(e) => setNombre(e.target.value)} value={nombre} />
                            </div>
                            <div className="col-lg-6 col-md-12 mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Apellidos</label>
                                <input type="text" className="form-control" placeholder="" aria-label="Apellidos" required
                                    onChange={(e) => setApellido(e.target.value)} value={apellido} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-lg-6 col-md-12 mb-3">
                                <label htmlFor="exampleRut" className="form-label">Rut</label>
                                <input type="text" ref={inputRut} className="form-control" placeholder="20123123-k" aria-label="Rut" required
                                    onChange={(e) => setRut(e.target.value)} value={rut} />
                            </div>
                            <div className="col-lg-6 col-md-12 mb-3">
                                <label htmlFor="exampleTelefono" className="form-label">Celular</label>
                                <input ref={inputRef} className="form-control" placeholder="912341234" aria-label="Celular" required
                                    onChange={(e) => setCelular(e.target.value)} value={celular} />
                                {/* <InputMask mask="+0 (___) ___-__-__" replacement={{ _: /\d/ }} type="number" className="form-control" placeholder="912341234" aria-label="Celular" required
                                    onChange={(e) => setCelular(e.target.value)} value={celular} /> */}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Postular</button>

                    </form>
                )}
                { loading && (<GridLoader color="#256D00" cssOverride={override}/> )}
                { showSuccess && (
                    <div id="successMessage" className="mx-auto text-center">
                        <h3>Gracias por postular con nosotros!</h3>
                        <p>Nos comunicaremos contigo a la brevedad para hacerte envío de todos los requisitos y poder agendar una cita guíada para que puedas conocer nuestro cuartel.</p>
                        <p>Por el momento te invitamos a seguirnos en nuestro instagram para estar al tanto de nuestra compañía.</p>
                        <a href="https://www.instagram.com/bombalandeta_121/" target='blank'>@bombalandeta_121</a>
                    </div>
                )}
            </div>

        </div>
    );
}

export default Formulario;

