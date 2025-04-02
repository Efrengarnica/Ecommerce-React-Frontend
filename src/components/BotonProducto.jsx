import React from 'react'
import '../styles/BotonProducto.css'
import useCartStore from '../store/useCartStore'

export const BotonProducto = ({ texto, id }) => {

  const setColorBotonCarrito = useCartStore((state) => state.setColorBotonCarrito)
  const updateCartItem = useCartStore((state) => state.updateCartItem)
  const accionesBoton = (idProducto, operacion) => {
    setColorBotonCarrito()
    updateCartItem(idProducto, operacion)
  }

  return (
    <button 
    type="button" 
    className="agregarACarrito button is-light has-background-black has-text-white mt-3"
    onClick={() => accionesBoton(id, "suma")}
    >
    {texto}
    </button>
  )
}