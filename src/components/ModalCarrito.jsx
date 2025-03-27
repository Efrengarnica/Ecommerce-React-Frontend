import React from 'react'
import useCartStore from '../store/useCartStore'
import '../styles/ModalCarrito.css'

export const ModalCarrito = () => {
    const isCartOpen = useCartStore((state) => state.isCartOpen);
    const closeCart = useCartStore((state) => state.closeCart);
    return (
        <div className={`modal offcanvas-modal${isCartOpen ? " is-active" : ""}`}>
            <div className="modal-background" id="close-modal-bg" onClick={closeCart}></div>
            <div className="modal-content has-background-black">
                <div className="box" style={{ height: "100%" }}>
                    <header className="is-flex is-justify-content-space-between is-align-items-center">
                        <h2 className="title is-5">Tu cesta</h2>
                        <button className="delete" id="close-cart-btn" onClick={closeCart}></button>
                    </header>
                    <hr/>
                    <div id="divProductosCarrito">
                        <p className="has-text-grey">Tu cesta está vacía</p>
                    </div>
                    <hr/>
                    <footer>
                        <div className="is-flex is-justify-content-space-between" id="totalCarrito">
                            <p className="has-text-weight-semibold">Total: $0.00</p>
                        </div>
                        <button className="button is-success is-fullwidth" id="botonFinalizarCompra">Finalizar compra</button>
                    </footer>
                </div>
            </div>
        </div>
    )
}