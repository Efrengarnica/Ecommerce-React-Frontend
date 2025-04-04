import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import useCartStore from '../store/useCartStore'
import useUserStore from '../store/useUserStore';
import { Boton } from './Boton'

export const Navbar = () => {
    const openCart = useCartStore((state) => state.openCart);
    const calcularTotalProductos = useCartStore((state) => state.calcularTotalProductos());
    const colorBotonCarrito = useCartStore((state) => state.colorBotonCarrito)


    const cerrarSesion = useUserStore(state => state.cerrarSesion)
    const isActive = useUserStore(state => state.isActive)

    const navigate = useNavigate();

    const irALogin = () => {
        navigate('/login');
    }

    const irASignUp = () => {
        navigate('/signUp');
    }

    return (
        <nav className="navbar has-background-black is-fixed-top" role="navigation" aria-label="main navigation" id="navbar-id">
            <div className="navbar-brand">
                <NavLink to='/' className="navbar-item" href="#">
                    <span className="navbar-item colorLogo">E-commerce</span>
                </NavLink>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-start">
                    <NavLink to='/perfil' className="navbar-item has-text-white">Perfil</NavLink>
                    <NavLink to='/acercaDe' className="navbar-item has-text-white">Acerca de</NavLink>
                    <NavLink to='/contacto' className="navbar-item has-text-white">Contacto</NavLink>
                </div>
                <div className="navbar-end">
                    {isActive ? (
                        <>
                            <div className="navbar-item">
                                <button
                                type='button'
                                className="button is-danger is-rounded has-text-white"
                                onClick={ () => {
                                    cerrarSesion()
                                    irALogin()
                                    }
                                }
                                >
                                    Salir
                                </button>
                            </div>
                            <div className="navbar-item">
                                <button
                                    type='button'
                                    style={{ backgroundColor: colorBotonCarrito }}
                                    className="button is-light"
                                    id="open-cart"
                                    onClick={openCart}
                                >
                                    {`🛒 Carrito ${calcularTotalProductos}`}
                                </button>
                            </div>
                        
                        </>

                    ) : (
                        <>
                            <div className="navbar-item">
                                <Boton
                                    titulo={"Ingresar"}
                                    navegarA={irALogin}
                                >
                                </Boton>
                            </div>
                            <div className="navbar-item">
                                <Boton
                                    titulo={"Registrar"}
                                    navegarA={irASignUp}
                                >
                                </Boton>
                            </div>
                        </>
                    )
                    }
                </div>
            </div>
        </nav>
    )
}