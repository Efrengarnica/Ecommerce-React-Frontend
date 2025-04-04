import React from 'react'
import '../styles/CardCarrito.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import useCartStore from '../store/useCartStore';

export const CardCarrito = ({ id, image, title, price, cantidadProducto, carritoId, userId }) => {

    const updateCartItem = useCartStore((state) => state.updateCartItem)

    return (
        <div className="columns">
            <div className="column is-4">
                <img src={image} alt={ title } className="imagen-carrito"/>
            </div>
            <div className="column is-8 is-flex is-align-items-center is-justify-content-space-between">
                <div className="columns is-flex-direction-column">
                    <div className="contenedor-texto-carrito"><p className="is-size-6">{title}</p></div>
                    <p className="is-size-6 has-text-weight-bold">MXN ${(price) * (cantidadProducto)}</p>
                    <p className="is-size-6">{cantidadProducto} pz</p>
                </div>
                <div className="columns is-justify-content-flex-end">
                    <div className="column is-narrow pl-0 pb-0 pt-0 pr-1">
                        <button 
                        type="button" 
                        className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center botones-carrito"
                        onClick={() => {
                            if ( carritoId === null || userId===null ) return
                            updateCartItem(id, "suma", carritoId, userId)
                            }
                        } 
                        >
                            <FontAwesomeIcon icon={faPlus} className="iconos-cart" />
                        </button>
                    </div>
                    <div className="column is-narrow pl-0 pb-0 pt-0 pr-1">
                        <button 
                        type="button" 
                        className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center botones-carrito"
                        onClick={() => {
                            if ( carritoId === null || userId===null ) return
                            updateCartItem(id, "resta", carritoId, userId)
                            }
                        }
                        >
                            <FontAwesomeIcon icon={faMinus} className="iconos-cart" />
                        </button>
                    </div>
                    <div className="column is-narrow pl-0 pb-0 pt-0 pr-1">
                        <button 
                        type="button" 
                        className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center botones-carrito"
                        onClick={() => {
                            if ( carritoId === null || userId===null ) return
                            updateCartItem(id, "eliminar", carritoId, userId)
                            }
                        }
                        >
                            <FontAwesomeIcon icon={faTrash} className="iconos-cart" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}