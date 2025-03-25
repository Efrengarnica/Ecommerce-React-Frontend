import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar has-background-black" role="navigation" aria-label="main navigation" id="navbar-id">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <span className="navbar-item colorLogo">E-commerce</span>
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item has-text-white">Perfil</a>
                    <a className="navbar-item has-text-white">Acerca de</a>
                    <a className="navbar-item has-text-white">Contacto</a>
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