import React, { useState, useEffect } from 'react';

const usuariosPorDefecto = [
    { nombres: "Jimmy", mensaje: "Buenos dias", reaccionLike: true, reaccionSaludo:true },
]


const Mensaje = () => {

    const [usuarios, setUsuarios] = useState(usuariosPorDefecto)
    const [nombres, setNombres] = useState("")
    const [mensajes, setMensajes] = useState("")
    const [reaccionLike, setReaccionLike] = useState(false)
    const [reaccionSaludo, setReaccionSaludo] = useState(false)


 
    useEffect(() => {
        let copiaUsuarios = [...usuarios] 
        const nuevoUsuario = {
            nombres: "Jullianno Contreras",
            mensajes: "Buenos dias",
            reaccionLike: true,
            reaccionSaludo:true
        }
        copiaUsuarios.push(nuevoUsuario)
        setUsuarios(copiaUsuarios)
    }, [])


    const handleNombres = (evento) => {
        setNombres(evento.target.value)
    }

    const handleMensajes = (evento) => {
        setMensajes(evento.target.value)
    }

    const handleReaccionLike = (evento) => {
        setReaccionLike(!reaccionLike)
    }

    const handleReaccionSaludo= (evento) => {
        setReaccionSaludo(!reaccionSaludo)
    }

    const handleIngresoUsuario = (evento) => {
        const nuevoUsuario = {
            nombres: nombres,
            mensajes: mensajes,
            reaccionLike: reaccionLike,
            reaccionSaludo: reaccionSaludo
        }

        let copiaUsuarios = [...usuarios]
        copiaUsuarios.push(nuevoUsuario)
        setUsuarios(copiaUsuarios)
    }


    return (
        <>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Ingreso su Mensaje</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <label htmlFor="nombres">Nombres</label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={handleNombres}
                        value={nombres}
                        name="nombres"
                        id="nombres"
                    />
                </div>
                <div className="col-4">
                    <label htmlFor="mensajes">Mensaje</label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={handleMensajes}
                        value={mensajes}
                        name="apellidos"
                        id="apellidos"
                    />
                </div>
                <div className="col-4">
                    <br />
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={reaccionLike}
                            onChange={handleReaccionLike}
                            name="habilitado"
                            id="habilitado" />
                        <label
                            className="form-check-label"
                            htmlFor="habilitado">
                            Dar Like 👍​
                        </label>
                    </div>
                </div>

                <div className="col-4">
                    <br />
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={reaccionSaludo}
                            onChange={handleReaccionSaludo}
                            name="habilitado"
                            id="habilitado" />
                        <label
                            className="form-check-label"
                            htmlFor="habilitado">
                            Enviar Saludo 👋​
                        </label>
                    </div>
                </div>

                <div className="col-12 justify-content-start mt-3">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handleIngresoUsuario}
                    >
                        Ingresar su mensaje
                    </button>
                </div>
            </div>
            <hr />
            <div className="row mt-5">
                <div className="col-12">
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>Nombre(s)</th>
                                <th>Reaccion(s)</th>
                                <th>Mensaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => {
                                return (
                                       <tr>
                                        <td>{usuario.nombres}</td>
                                        <td>{usuario.mensajes}</td>
                                        <td>
                                            {usuario.like ?
                                                "Dio Like" :
                                                "No Likeo"
                                            }
                                        </td>

                                        <td>
                                            {usuario.saludo ?
                                                "Saludo" :
                                                "No saludo"
                                            }
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Mensaje