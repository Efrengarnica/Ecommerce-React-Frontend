import React from 'react'
import useCartStore from '../store/useCartStore'
import '../styles/ModalCarrito.css'
import { CardCarrito } from './CardCarrito'

export const ModalCarrito = () => {
    const isCartOpen = useCartStore((state) => state.isCartOpen);
    const closeCart = useCartStore((state) => state.closeCart);
    const carritoCompras = useCartStore((state) => state.carritoCompras)
    const calcularTotal = useCartStore((state) => state.calcularTotal())
    return (
        <div className={`modal offcanvas-modal${isCartOpen ? " is-active" : ""}`}>
            <div className="modal-background" id="close-modal-bg" onClick={closeCart}></div>
            <div className="modal-content has-background-black">
                <div className="box" style={{ height: "100%" }}>
                    <header className="is-flex is-justify-content-space-between is-align-items-center">
                        <h2 className="title is-5">Tu cesta</h2>
                        <button className="delete" id="close-cart-btn" onClick={closeCart}></button>
                    </header>
                    <hr />
                    <div id="divProductosCarrito">
                        {
                            [...carritoCompras.values()].length === 0 ? (
                                <p className="has-text-grey">Tu cesta está vacía</p>
                            )
                                : (
                                    [...carritoCompras.values()].map(producto => (
                                        <CardCarrito
                                            key={producto.id}
                                            id={producto.id}
                                            image={producto.image}
                                            title={producto.title}
                                            price={producto.price}
                                            cantidadProducto={producto.cantidadProducto}
                                        >
                                        </CardCarrito>
                                    ))
                                )
                        }
                    </div>
                    <hr />
                    <footer>
                        <div className="is-flex is-justify-content-space-between" id="totalCarrito">
                            {
                                [...carritoCompras.values()].length === 0 ? (
                                    <p className="has-text-weight-semibold">Total: $0.00</p>
                                ) : (
                                    <>
                                        <div class="totalCarrito-fila-precio-letras">
                                            <p class="is-size-6 has-text-weight-bold">Total</p>
                                            <p class="is-size-6 has-text-gray-light">IVA incluido</p>
                                        </div>
                                        <div class="totalCarrito-fila-precio-dinero">
                                            <p class="is-size-6 has-text-weight-bold">MXN ${calcularTotal}</p>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                        <button className="button is-success is-fullwidth" id="botonFinalizarCompra">Finalizar compra</button>
                    </footer>
                </div>
            </div>
        </div>
    )
}