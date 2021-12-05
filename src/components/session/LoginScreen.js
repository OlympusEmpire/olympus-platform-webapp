import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        history.replace('/');
    }

    return (
        <div
             className = "container mt-5"
         >
            <form className = "form">

            <div class="form-outline mb-4">
                <input type="email" id="form2Example1" class="form-control " />
                <label class="form-label text-warning" for="form2Example1">Email o Username</label>
            </div>

            <div class="form-outline mb-4">
                <input type="password" id="form2Example2" class="form-control" />
                <label class="form-label text-warning" for="form2Example2">Contraseña</label>
            </div>

            <div class="row mb-4 text-light">
                <div class="col d-flex justify-content-center">

                <div class="form-check">
                    <input
                    class="form-check-input bg-dark"
                    type="checkbox"
                    id="form2Example34"
                    />
                    <label class="form-check-label" for="form2Example34"> Recuérdame </label>
                </div>
                </div>

                <div class="col">

                <a href="#!" className = "text-warning">¿Olvidaste la contraseña?</a>
                </div>
            </div>

            <button type="submit" class="btn btn-outline-warning btn-block mb-5">Iniciar Sesión</button>

            <div class="text-center text-light">
                <p>¿Aún no eres miembro? <a href="#!" className = "text-warning"> Registrate</a></p>
                <p>o inicia sesión con:</p>
                <button type="button" class="btn btn-warning btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-warning btn-floating mx-1">
                <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-warning btn-floating mx-1">
                <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-warning btn-floating mx-1">
                <i class="fab fa-github"></i>
                </button>
            </div>
            </form>
        </div>
    )
}
