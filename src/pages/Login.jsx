import React, { useEffect, useState } from 'react'
import '../styles/Login.css'
import useUserStore from '../store/useUserStore'
import { useNavigate } from "react-router-dom";
import { ModalFalloIngresar } from '../components/ModalFalloIngresar';

export const Login = () => {
    //Necesario para navegar a otra pestaña.
    const navigate = useNavigate()
    //Estados que se modifican en cada input y que me ayudarán a realizar la petición.
    const [correo, setcorreo] = useState("")
    const [contraseña, setcontraseña] = useState("")
    //Función que realiza la petición del usuario con los datos, correo y contraseña.
    const fetchUser = useUserStore(state => state.fetchUser)
    //Estados que me ayudarán a mostrar cargando o error si falla la petición.
    const isloadingDataUser = useUserStore(state => state.isloadingDataUser)
    const errorLoadingDataUser = useUserStore(state => state.errorLoadingDataUser)
    //Función que al parecer realiza el envió de los datos y ejecuta la petición.
    const entrarSistema = async(event) => {
        event.preventDefault();
        if(correo === "" || contraseña === "") {
            alert("Llena los 2 campos")
        } else {
            await fetchUser(correo, contraseña);
        }
    }
    //Estado que me dice si un usuario pudo entrar en la app correctamente.
    const isActive = useUserStore(state => state.isActive)
    //Me ayuda a que cuando haya un usuario en la app activo entonces se redirija a la portada de la app.
    useEffect(() => {
        if (isActive) {
        navigate('/');
        }
    }, [isActive, navigate]);

    return (
        <div className='login-page'>
            <ModalFalloIngresar/>
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
                            className={isloadingDataUser ? "button is-success is-loading" : "button is-success boton-registro"}
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
