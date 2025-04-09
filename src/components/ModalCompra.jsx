import React, { useEffect, useState } from 'react'
import useCartStore from '../store/useCartStore'

export const ModalCompra = () => {
  //Me ayuda a saber cómo va la petición que realiza la compra del usuario.
  const isloadingCompraUsuario = useCartStore(state => state.isloadingCompraUsuario)
  const errorAlComprarProductos = useCartStore( state => state.errorAlComprarProductos)
  //Me ayuda a abrir y cerrar el modal de compra.
  const isModalPurchaseOpen = useCartStore((state) => state.isModalPurchaseOpen)
  const closeModalPurchase = useCartStore((state) => state.closeModalPurchase)
  //Me ayuda junto con el useEffect a mostrar el mensaje de cargando...
  //solo si la petición se tarda demasiado.
  const [showLoading, setShowLoading] = useState(false);
  
  useEffect(() => {
    let timer;
    if (isloadingCompraUsuario) {
      timer = setTimeout(() => setShowLoading(true), 300);
    } else {
      setShowLoading(false);
    }
    return () => clearTimeout(timer);
  }, [isloadingCompraUsuario]);

  return (
    <div className={`modal${isModalPurchaseOpen ? " is-active" : ""}`} id="miModal">
        <div className="modal-background" onClick={closeModalPurchase}></div>
        <div className="modal-content realizar-compra-modal">
          {
            showLoading ? (
              <div className='box'>
                <p className='title has-text-centered'>Cargando ...</p>
              </div>
            ) : errorAlComprarProductos ? (
              <div className='box'>
                <p className='title'>Hubo un problema para concluir su compra.</p>
              </div>
            ) : (
              <div className="box is-flex is-flex-direction-column is-justify-content-space-between realizar-compra-modal">
                <h2 className="title">Su compra se realizó con éxito.</h2>
                <p>Para adquirir más productos, simplemente añádalos a su carrito de compras.</p>
                <button className="button is-danger" id="cerrarModal" onClick={closeModalPurchase}>Cerrar</button>
              </div>
            )
          }
        </div>
    </div>
  )
}