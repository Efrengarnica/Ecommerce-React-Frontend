import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar has-background-black" role="navigation" aria-label="main navigation" id="navbar-id">
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
                    <div className="navbar-item">
                        <button className="button is-light" id="open-cart">
                            🛒 Carrito (<p id="totalDeProductosEnCarrito"></p>)
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}