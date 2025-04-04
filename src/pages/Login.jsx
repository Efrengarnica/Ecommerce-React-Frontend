import React, { useState } from 'react'
import '../styles/Login.css'
import useUserStore from '../store/useUserStore'
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate(); // Definir navigate
    const [correo, setcorreo] = useState("")
    const [contraseña, setcontraseña] = useState("")

    const fetchUser = useUserStore(state => state.fetchUser)

    const entrarSistema = async(event) => {
        event.preventDefault();
        if(correo === "" || contraseña === "") {
            alert("Llena los 2 campos")
        } else {
            try {
                await fetchUser(correo, contraseña);
                // Si fetchUser sale bien, redirigimos a otra página, por ejemplo "/dashboard"
                navigate("/");
              } catch (error) {
                // Si ocurre algún error, mostramos el alert
                console.log(error)
              }
        }
    }
    return (
        <div className='login-page'>
            <h1 className='title mb-5'>Ingresa a la Ecommerce</h1>
            <div className='box formulario-ingreso is-flex is-flex-direction-column is-justify-content-center'>
                <form onSubmit={entrarSistema}>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input 
                            className="input" 
                            type="email" 
                            placeholder="Correo electrónico" 
                            value={correo}
                            onChange={(event) => {
                                console.log(event.target.value)
                                setcorreo(event.target.value)}}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input 
                            className="input" 
                            type="password" 
                            placeholder="Contraseña" 
                            value={contraseña}
                            onChange={(event) => {
                                console.log(event.target.value)
                                setcontraseña(event.target.value)
                            }}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button 
                            type="submit" 
                            className="button is-success boton-registro"
                            >
                                Entrar
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
