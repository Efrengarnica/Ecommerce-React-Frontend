import React from 'react'
import { NavLink } from 'react-router-dom'
import useCartStore from '../store/useCartStore'

export const Navbar = () => {
    const openCart = useCartStore((state) => state.openCart);
    const calcularTotalProductos = useCartStore((state) => state.calcularTotalProductos());
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
                    <div className="navbar-item">
                        <button 
                        type='button'
                        className="button is-light" 
                        id="open-cart"
                        onClick={openCart}
                        >
                            {`🛒 Carrito ${calcularTotalProductos}`}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}