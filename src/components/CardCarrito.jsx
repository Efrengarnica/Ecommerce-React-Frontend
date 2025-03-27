import React from 'react'
import '../styles/CardCarrito.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export const CardCarrito = ({ image, title, price, cantidadProducto }) => {
    return (
        <div className="columns">
            <div className="column is-4">
                <img src={`/assets/${ image }`} alt={ title } className="imagen-carrito"/>
            </div>
            <div className="column is-8 is-flex is-align-items-center is-justify-content-space-between">
                <div className="columns is-flex-direction-column">
                    <div className="contenedor-texto-carrito"><p className="is-size-6">{title}</p></div>
                    <p className="is-size-6 has-text-weight-bold">MXN ${(price) * (cantidadProducto)}</p>
                    <p className="is-size-6">{cantidadProducto} pz</p>
                </div>
                <div className="columns is-justify-content-flex-end">
                    <div className="column is-narrow pl-0 pb-0 pt-0 pr-1">
                        <button type="button" className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center botones-carrito"><FontAwesomeIcon icon={faPlus} className="iconos-cart" /></button>
                    </div>
                    <div className="column is-narrow pl-0 pb-0 pt-0 pr-1">
                        <button type="button" className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center botones-carrito"><FontAwesomeIcon icon={faMinus} className="iconos-cart" /></button>
                    </div>
                    <div className="column is-narrow pl-0 pb-0 pt-0 pr-1">
                        <button type="button" className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center botones-carrito"><FontAwesomeIcon icon={faTrash} className="iconos-cart" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}