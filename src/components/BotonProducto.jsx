import React from 'react'
import '../styles/BotonProducto.css'
import useCartStore from '../store/useCartStore'

export const BotonProducto = ({ texto, id, isActiveUser, carritoId, userId }) => {

  const setColorBotonCarrito = useCartStore((state) => state.setColorBotonCarrito)

  const updateCartItem = useCartStore((state) => state.updateCartItem)
  const accionesBoton = (idProducto, operacion, idCarritoUser, idUser) => {
    if ( idCarritoUser === null || idUser===null ) return
    setColorBotonCarrito()
    updateCartItem(idProducto, operacion, idCarritoUser, idUser)
  }

  return (
    <button 
    type="button" 
    className="agregarACarrito button is-light has-background-black has-text-white mt-3"
    onClick={() => accionesBoton(id, "suma", carritoId, userId)}
    disabled={!isActiveUser}
    >
    {texto}
    </button>
  )
}