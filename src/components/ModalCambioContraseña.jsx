import React, { useEffect, useState } from 'react'
import useUserStore from '../store/useUserStore';

export const ModalCambioContraseña = ({ estadoDelModal, cerrarModal, modificarContraseña, guardarCambios}) => {
    const [contraseñaOriginal, setContraseñaOriginal] = useState("");
    const [contraseñaNueva, setContraseñaNueva] = useState("");
    const [contraseñaNuevaRepeticion, setContraseñaNuevaRepeticion] = useState("");

    const exitoAlModificarContraseñaUsuario = useUserStore(state => state.exitoAlModificarContraseñaUsuario)

    const cerrarModalYReiniciarValores = () => {
        setContraseñaOriginal("")
        setContraseñaNueva("")
        setContraseñaNuevaRepeticion("")
        cerrarModal()
    }
    //Me ayuda a regresar los valores a como estaban cuando tiene exito la operación de datos guardados
    useEffect(() => {
            if(exitoAlModificarContraseñaUsuario){
                cerrarModalYReiniciarValores()
            }
    }, [exitoAlModificarContraseñaUsuario]);


    return (
        <div className={`modal${estadoDelModal ? ' is-active' : ''}`} id="miModal">
            <div className="modal-background" onClick={cerrarModalYReiniciarValores}></div>
            <div className="modal-content">
                <div className="box">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Cambiar Contraseña Usuario</p>
                        <button
                            className="delete"
                            aria-label="close"
                            onClick={cerrarModalYReiniciarValores}
                        ></button>
                    </header>
                    <section className="modal-card-body">
                        <form onSubmit={guardarCambios}>
                            <div className="field">
                                <div className="control has-icons-left">
                                    <input
                                        className="input"
                                        type="password"
                                        placeholder="Ingrese su contraseña actual."
                                        value={contraseñaOriginal}
                                        onChange={(e) => {
                                            setContraseñaOriginal(e.target.value)
                                            modificarContraseña({"passwordActual":e.target.value})
                                        }}
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control has-icons-left">
                                    <input
                                        className="input"
                                        type="password"
                                        placeholder="Ingrese su nueva contraseña."
                                        value={contraseñaNueva}
                                        onChange={(e) => {
                                            setContraseñaNueva(e.target.value)
                                            modificarContraseña({"passwordNuevo":e.target.value})
                                        }}
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control has-icons-left">
                                    <input
                                        className="input"
                                        type="password"
                                        placeholder="Repita su nueva contraseña."
                                        value={contraseñaNuevaRepeticion}
                                        onChange={(e) => {
                                            setContraseñaNuevaRepeticion(e.target.value)
                                            modificarContraseña({"passwordRepeticion":e.target.value})
                                        }}
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="field">
                                <p className="control">

                                    <button className="button is-success mr-4" type="submit">
                                        Guardar
                                    </button>

                                    <button className="button is-danger" type='button' onClick={cerrarModalYReiniciarValores}>
                                        Cancelar
                                    </button>
                                </p>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}
