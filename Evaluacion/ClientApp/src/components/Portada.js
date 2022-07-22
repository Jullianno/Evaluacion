import React, { useState, useEffect } from 'react';
import persona from '../assets/images/persona.jpg'


const Portada = () => {

    return (
        
        <>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <img src={persona} class="card-img-top" height='250' />
                        <div className="card-body">
                            <h5 className="card-title">Estudiante de Inacap</h5>
                            <p className="card-text">
                                Analista Programador
                                <br></br>
                                Edad: 21 Años 
                                <br></br>
                                Hobbie: Escuchar musica, hacer deportes y jugar videojuegos
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-6 text-center">
                    <h1>Jullianno Contreras</h1>
                    <p>
                        Soy Jullianno Contreras estudiante de Inacap con ganas de poder seguir aprendiendo todo sobre el rubro de mi carrera, como tambien poder aprender todo tipos de lenguas.
                        Tambien soy un ser muy trabajador ya sea en cualquier area de trabajo, me incluyo muy facilmente en equipos de trabajos.
                    </p>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-6">
                    <h1>Habilidades</h1>
                    <ul className="list-group">
                        <li className="list-group-item">Servicio</li>
                        <li className="list-group-item">Cordialidad </li>
                        <li className="list-group-item">Pensamiento Critico </li>
                        <li className="list-group-item">Persepcion</li>
                    </ul>

                </div>
            </div>
        </>

        
        
        )
}

export default Portada