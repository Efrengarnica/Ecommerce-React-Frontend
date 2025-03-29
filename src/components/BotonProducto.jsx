import React from 'react'
import '../styles/BotonProducto.css'
import useCartStore from '../store/useCartStore'

export const BotonProducto = ({ texto, id }) => {
  const modificarCarrito = useCartStore((state) => state.modificarCarrito);
  const setColorBotonCarrito = useCartStore((state) => state.setColorBotonCarrito)
  const accionesBoton = (id) => {
    setColorBotonCarrito()
    modificarCarrito(id)
  }
  return (
    <button 
    type="button" 
    className="agregarACarrito button is-light has-background-black has-text-white mt-3"
    onClick={() => accionesBoton(id)}
    >
    {texto}
    </button>
  )
}