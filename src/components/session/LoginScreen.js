import React from 'react'
import "./login.css"

export const LoginScreen = () => {

    return (
        <div
             id = "loginform"
             className = "container mt-5"
        >
            <form>

            <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control text-white" />
                <label className="form-label text-warning" for="form2Example1">Email o Username</label>
            </div>

            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control text-white" />
                <label className="form-label text-warning" for="form2Example2">Contraseña</label>
            </div>

            <div className="row mb-4 text-light">
                <div className="col d-flex justify-content-center">

                <div className="form-check">
                    <input
                    className="form-check-input bg-dark"
                    type="checkbox"
                    id="form2Example34"
                    />
                    <label className="form-check-label" for="form2Example34"> Recuérdame </label>
                </div>
                </div>

                <div className="col">

                <a href="#!" className = "text-warning">¿Olvidaste la contraseña?</a>
                </div>
            </div>

            <button type="submit" className="btn btn-outline-warning btn-block mb-5">Iniciar Sesión</button>

            <div className="text-center text-light">
                <p>¿Aún no eres miembro? <a href="#!" className = "text-warning"> Registrate</a></p>
                <p>o inicia sesión con:</p>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-danger btn-floating mx-1">
                <i className="fab fa-google"></i>
                </button>

            </div>
            </form>
        </div>
    )
}
