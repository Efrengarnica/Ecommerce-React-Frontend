import React from 'react'
import '../styles/SignUp.css'

export const SignUp = () => {
    return (

        <section className="section signup-page">
            <div className="formulario-registro">
                <h1 className="title">Completa los datos para crear tu cuenta</h1>
                <form>

                    <div className="field">
                        <div className="control has-icons-left">
                            <input className="input" type="text" placeholder="Nombre" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control has-icons-left">
                            <input className="input" type="email" placeholder="Correo electrónico" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>

      
                    <div className="field">
                        <div className="control has-icons-left">
                            <input className="input" type="password" placeholder="Contraseña" />
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
