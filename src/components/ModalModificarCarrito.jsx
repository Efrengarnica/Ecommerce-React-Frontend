import React from 'react'
import useCartStore from '../store/useCartStore'

export const ModalModificarCarrito = () => {
    //Estados que me ayudan a saber si algo sale mal al momento de querer modificar un articulo en el carrito.
    const errorModificarCarrito = useCartStore(state => state.errorModificarCarrito)
    const cerrarErrorModificarCarrito = useCartStore(state => state.cerrarErrorModificarCarrito)

    //Aparece siempre y cuando salga algo mal y lo podemos cerrar con cerrarErrorModificarCarrito.
    return (
        <div className={`modal ${errorModificarCarrito ? " is-active" : ""}`}>
            <div className="modal-background" onClick={cerrarErrorModificarCarrito}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Error, no se aplicaron correctamente los cambios.</p>
                    <button className="delete" aria-label="close" onClick={cerrarErrorModificarCarrito}></button>
                </header>
                <section className="modal-card-body">
                    <p>Su acción no fue exitosa.</p>
                </section>
            </div>
        </div>
    )
}
