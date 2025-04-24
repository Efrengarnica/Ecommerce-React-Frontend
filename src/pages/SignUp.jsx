import React, { useState } from 'react'
import '../styles/SignUp.css'
import useUserStore from '../store/useUserStore'
import { ModalCrearUsuario } from '../components/ModalCrearUsuario'

export const SignUp = () => {
    //Guardan y modifican los valores de los inputs del registro.
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Función que realiza la petición para crear al usuario mediante la data del form.
    const crearUsuario = useUserStore(state => state.crearUsuario)

    const registrarUsuario = async(event) => {
        event.preventDefault();
        if(name === "" || email === "" || password === "") {
            alert("Llena los 3 campos")
        } else {
            const userData = {
                "name": name,
                "email": email,
                "password": password
            }
            await crearUsuario(userData);
        }
    }

    return (

        <section className="section signup-page">
            <ModalCrearUsuario/>
            <div className="formulario-registro">
                <h1 className="title">Completa los datos para crear tu cuenta</h1>
                <form onSubmit={registrarUsuario}>

                    <div className="field">
                        <div className="control has-icons-left">
                            <input 
                            className="input" 
                            type="text" 
                            placeholder="Nombre" 
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value)}}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control has-icons-left">
                            <input 
                            className="input" 
                            type="email" 
                            placeholder="Correo electrónico" 
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value)}}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
      
                    <div className="field">
                        <div className="control has-icons-left">
                            <input 
                            className="input" 
                            type="password" 
                            placeholder="Contraseña" 
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value)}}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <p className="control">
                            <button className="button is-success boton-registro" type="submit">
                                Registrar
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}
