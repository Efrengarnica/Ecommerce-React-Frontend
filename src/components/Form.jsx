import React, { useEffect, useState } from 'react'
import useUserStore from '../store/useUserStore';

export const Form = ({ dataUsuario, modificarData, guardarCambios, resetarValores, abrirModal }) => {
    const [name, setName] = useState(dataUsuario?.name || "");
    const [correo, setCorreo] = useState(dataUsuario?.email || "");
    const isLoading = useUserStore(state => state.isLoadingModificarDatosUsuario)

    //Cuando data cambie entonces modificas el valor de los inputs, esto es para que funcione el reset de valores.
    useEffect(() => {
        setName(dataUsuario?.name  || "");
        setCorreo(dataUsuario?.email || "");
      }, [dataUsuario]);

    return (
        <form onSubmit={guardarCambios}>
            <div className="field">
                <label className="label" htmlFor ="name">Nombre</label>
                <div className="control">
                    <input 
                    className="input" 
                    value={name}
                    type="text" 
                    id="name" 
                    placeholder="Introduce tu nombre" 
                    onChange={(e) => {
                        setName(e.target.value)
                        modificarData({name: e.target.value})
                    }}
                    required/>
                </div>
            </div>

            <div className="field">
                <label className="label" htmlFor ="email">Correo electrónico</label>
                <div className="control">
                    <input 
                    className="input" 
                    value={correo}
                    type="email" 
                    id="email" 
                    placeholder="Introduce tu correo electrónico" 
                    onChange={(e) => {
                        setCorreo(e.target.value)
                        modificarData({email: e.target.value})
                    }}
                    required/>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <button 
                    className={isLoading ? "button is-primary mr-4 is-loading" : "button is-primary mr-4"}
                    type="submit"
                  
                    >
                        Guardar
                    </button>
                    <button 
                    className="button is-danger mr-4" 
                    type="button"
                    onClick={resetarValores}
                    >
                        Cancelar
                    </button>
                    <button 
                    className="button is-link" 
                    type="button"
                    onClick={abrirModal}
                    >
                        Cambiar Contraseña
                    </button>
                </div>
            </div>
        </form>
    )
}