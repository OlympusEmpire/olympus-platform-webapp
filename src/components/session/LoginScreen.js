import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        history.replace('/');
    }

    return (
        <div
            className = "container mt-5"
        >
            <h1>Inicio de Sesión</h1>
            <hr />

            <button
                className = "btn btn-primary"
                onClick={ handleLogin }
            >
                Iniciar Sesión
            </button>
        </div>
    )
}
