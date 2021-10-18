import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './olympus.css'

export const OlympusScreen = () => {
    return (
        <Fragment>
            <div id="intro" className="bg-image vh-100 shadow-1-strong">
                
                <video classNameName='videoTag' playsinline autoPlay loop muted>
                    <source className="h-100" src="assets/video/olympus.mp4" type="video/mp4" />
                </video>

                <div className="mask">
                    <div className="container d-flex align-items-center justify-content-center text-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3 tittle">Bienvenido al Imperio Olympus</h1>
                            <h5 className="mb-4 subtitle">Gestión de redes de grupos sociales y comunidades más grandes del mundo.</h5>
                            
                            <Link
                                exact
                                to="/community"
                            >
                                <a
                                    className="btn btn-outline-light btn-lg m-2"
                                    role="button"
                                    rel="nofollow"
                                    target="_blank"
                                    >¡Empecemos!</a
                                >
                            </Link>

                            <Link
                                exact
                                to="/login"
                            >
                                <a
                                    className="btn btn-outline-light btn-lg m-2"
                                    target="_blank"
                                    role="button"
                                    >Iniciar Sesion</a
                                >
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-dark text-white py-5">
                <div className="container">
                    <div className="row">
                    <div className="col-md-3">
                        <div className="card text-white bg-dark">
                        <div className="card-body">
                            <h3>Únete a grupos</h3>
                            <p>
                            En la plataforma Olympus encontrarás grupos de WhatsApp, Facebook, Telegram e Instagram.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-white bg-dark">
                        <div className="card-body text-primary">
                            <h3>Publica publicidad</h3>
                            <p>
                            Abre campo y publica tu publicidad en los grupos anexados a Olympus.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-white bg-dark">
                        <div className="card-body">
                            <h3>Haz tu grupo social popular</h3>
                            <p>
                            Crea tu grupo en una red social y hazla popular.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-white bg-dark">
                        <div className="card-body text-primary">
                            <h3>Diviertete y más...</h3>
                            <p>
                            Conoce a personas del mundo de tú mismo interés.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div claasName="text-center communities">
                <div className="container p-5">
                    <h1 className="text-center text-white">COMUNIDADES</h1>
                    <p className="text-white">
                    Olympus presenta sus mejores comunidades, destacados por sus temáticas y diferenciados por sus dinámicas, inclúyete en una de estas comunidades, conoce personas con objetivos y metas en común.
                    </p>
                </div>
            </div>

            <div className="text-center team">
                <div className="container p-5">
                    <h1 className="text-center text-white">EQUIPO</h1>
                    <p className="text-white">
                    Estamos siempre en contacto y resolvemos tus dudas comunicandote con nostros. Estamos pendiente de todos los grupos anexados al Olympus con la condición de ser estrictos en todo el reglamento de los grupos asociados y del Olympus.
                    </p>

                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src="" className="img-fluid rounded-circle w-50"></img>
                                    <h3>Kevin Julius Sauco</h3>
                                    <h4><b>Founder</b></h4>

                                    <div className="d-flex flex-row justify-content-center">
                                        <div className="p-4">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        </div>
                                        <div className="p-4">
                                            <a href="#"><i className="fab fa-whatsapp"></i></a>
                                        </div>
                                        <div className="p-4">
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
