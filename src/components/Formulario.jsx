import React from 'react';
import './FormularioStyle.css';

function Formulario() {
    // const [username, setUsername] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Access the username state variable for form submission
    };
    return (
        <div className="container-fluid formulario-container vh-100 position-relative">
            <div className="bg-formulario"></div>
            <div className="card mx-auto">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                            <label for="exampleInputEmail1" class="form-label">Nombre</label>
                            <input type="text" class="form-control" placeholder="" aria-label="Nombres"/>
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1" class="form-label">Apellidos</label>
                            <input type="text" class="form-control" placeholder="" aria-label="Apellidos"/>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    );
}


export default Formulario;
