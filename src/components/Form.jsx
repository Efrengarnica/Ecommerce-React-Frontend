import React, { useState } from 'react'

export const Form = ({ dataUsuario, modificarData, guardarCambios }) => {
    const [name, setName] = useState(dataUsuario?.name || "");
    const [correo, setCorreo] = useState(dataUsuario?.email || "");
    const [contraseña, setContraseña] = useState(dataUsuario?.password || "");
    return (
        <form>
            <div className="field">
                <label className="label" for="name">Nombre</label>
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
                <label className="label" for="email">Correo electrónico</label>
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
                <label className="label" for="password">Contraseña</label>
                <div className="control">
                    <input 
                    className="input" 
                    value={contraseña}
                    type="password" 
                    id="password" 
                    placeholder="Introduce tu contraseña" 
                    onChange={(e) => {
                        setContraseña(e.target.value)
                        modificarData({password: e.target.value})
                    }}
                    required/>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <button 
                    className="button is-primary mr-4" 
                    type="submit"
                    onClick={() => guardarCambios()}
                    >Guardar</button>
                    <button className="button is-danger" type="button">Cancelar</button>
                </div>
            </div>
        </form>
    )
}