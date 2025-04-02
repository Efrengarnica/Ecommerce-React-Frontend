import React from 'react'
import useCartStore from '../store/useCartStore'

export const ModalCompra = () => {
  const isModalPurchaseOpen = useCartStore((state) => state.isModalPurchaseOpen)
  const closeModalPurchase = useCartStore((state) => state.closeModalPurchase)
  return (
    <div className={`modal${isModalPurchaseOpen ? " is-active" : ""}`} id="miModal">
        <div className="modal-background" onClick={closeModalPurchase}></div>
        <div className="modal-content realizar-compra-modal">
            <div className="box is-flex is-flex-direction-column is-justify-content-space-between realizar-compra-modal">
                <h2 className="title">Su compra se realizó con éxito.</h2>
                <p>Para adquirir más productos, simplemente añádalos a su carrito de compras.</p>
                <button className="button is-danger" id="cerrarModal" onClick={closeModalPurchase}>Cerrar</button>
            </div>
        </div>
    </div>
  )
}