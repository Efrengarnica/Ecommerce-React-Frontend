import React, { useEffect } from 'react'
import useCartStore from '../store/useCartStore'
import '../styles/ModalCarrito.css'
import { CardCarrito } from './CardCarrito'

export const ModalCarrito = () => {
    const isCartOpen = useCartStore((state) => state.isCartOpen);
    const closeCart = useCartStore((state) => state.closeCart);   
    const openModalPurchase = useCartStore((state) => state.openModalPurchase)
    const carritoComprasUsuario = useCartStore((state) => state.carritoComprasUsuario)
    const fetchCartUsuario = useCartStore((state) => state.fetchCartUsuario)
    const calcularTotal = useCartStore((state) => state.calcularTotal())

    useEffect(() => {
        fetchCartUsuario()
    }, [])

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
                            carritoComprasUsuario === null ? (
                                <p className="has-text-grey">Tu cesta está vacía</p>
                            )
                                : (
                                    carritoComprasUsuario.items.map(producto => (
                                        <CardCarrito
                                            key={producto.product.id}
                                            id={producto.product.id}
                                            image={producto.product.image}
                                            title={producto.product.name}
                                            price={producto.product.price}
                                            cantidadProducto={producto.quantity}
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
                                carritoComprasUsuario === null ? (
                                    <p className="has-text-weight-semibold">Total: $0.00</p>
                                ) : (
                                    <>
                                        <div className="totalCarrito-fila-precio-letras">
                                            <p className="is-size-6 has-text-weight-bold">Total</p>
                                            <p className="is-size-6 has-text-gray-light">IVA incluido</p>
                                        </div>
                                        <div className="totalCarrito-fila-precio-dinero">
                                            <p className="is-size-6 has-text-weight-bold">MXN ${calcularTotal}</p>
                                        </div>
                                    </>
                                )   
                            }
                        </div>
                        <button 
                        className="button is-success is-fullwidth" 
                        id="botonFinalizarCompra"
                        onClick={openModalPurchase}
                        >
                            Finalizar compra
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}