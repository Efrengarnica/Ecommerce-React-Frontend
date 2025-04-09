import React, { useEffect, useState } from 'react'
import useCartStore from '../store/useCartStore'
import '../styles/ModalCarrito.css'
import { CardCarrito } from './CardCarrito'
import useUserStore from '../store/useUserStore'

export const ModalCarrito = () => {
    //Maneja abrir, cerrar el carrito.
    const isCartOpen = useCartStore((state) => state.isCartOpen);
    const closeCart = useCartStore((state) => state.closeCart);   
    //Maneja abrir el mensaje de compra.
    const openModalPurchase = useCartStore((state) => state.openModalPurchase)
    //Maneja la carga y errores del carrito.
    const carritoComprasUsuario = useCartStore((state) => state.carritoComprasUsuario)
    const fetchCartUsuario = useCartStore((state) => state.fetchCartUsuario)
    const errorCargarCarrito = useCartStore((state) => state.errorCargarCarrito)
    const isLoadingCarrito = useCartStore((state) => state.isLoadingCarrito)
    //Maneja el calculo que se hace en el carrito.
    const calcularTotal = useCartStore((state) => state.calcularTotal())
    //Maneja los datos del usuario.
    const user = useUserStore(state => state.dataUser)
    //Me ayuda a saber si debo o no mostrar el mensaje de cargando...
    const [showLoading, setShowLoading] = useState(false);

    //Me ayuda a mostrar el mensaje de cargando... cuando sea necesario.
    useEffect(() => {
        //Esto hace que si la petición que realizó para modificar la cantidad del producto tarda mas de 300ms entonces si se muestra el mensaje de 
        //cargando pero si es rápido y es menos de eso entonces no es necesario mostrar el mensaje de cargando...
        let timer;
        if (isLoadingCarrito) {
            timer = setTimeout(() => setShowLoading(true), 300);
        } else {
            setShowLoading(false);
        }
        return () => clearTimeout(timer);
    }, [isLoadingCarrito]);

    //Carga los datos del carrito.
    useEffect(() => {
        if (user && user.id) {
            fetchCartUsuario(user.id);
        }
      }, [user, fetchCartUsuario, isCartOpen]);

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
                        {   showLoading  ? (
                                <p className="has-text-grey"> Cargando...</p>
                            ) : errorCargarCarrito ? (
                                <p className="has-text-grey">Se produjo un error al cargar el carrito del usuario.</p>
                            ) : carritoComprasUsuario?.items.length === 0 ? (
                                <p className="has-text-grey">Tu cesta está vacía</p>
                            ) : (
                                carritoComprasUsuario?.items.map(producto => (
                                    <CardCarrito
                                        key={producto.product.id}
                                        id={producto.product.id}
                                        image={producto.product.image}
                                        title={producto.product.name}
                                        price={producto.product.price}
                                        cantidadProducto={producto.quantity}
                                        carritoId={carritoComprasUsuario ? carritoComprasUsuario.id : null}
                                        userId={carritoComprasUsuario ? carritoComprasUsuario.user_id : null}
                                    >
                                    </CardCarrito>
                                ))
                            )   
                        }
                    </div>
                    <hr />
                    <footer>
                        <div className="is-flex is-justify-content-space-between" id="totalCarrito">
                            { showLoading  ? ( 
                                <p className="has-text-grey">Cargando total...</p>
                            ): errorCargarCarrito ? (
                                <p className="has-text-grey mb-2">Se produjo un error al cargar el  total.</p>
                            ): carritoComprasUsuario?.items.length === 0 ? ( 
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
                        onClick={() => openModalPurchase(carritoComprasUsuario?.id, carritoComprasUsuario?.user_id)}
                        >
                            Finalizar compra
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}