import React from 'react'
import '../styles/BotonProducto.css'
import useCartStore from '../store/useCartStore'

export const BotonProducto = ({ texto, id }) => {
  const modificarCarrito = useCartStore((state) => state.modificarCarrito);
  return (
    <button 
    type="button" 
    className="agregarACarrito button is-light has-background-black has-text-white mt-3"
    onClick={() => modificarCarrito(id)}
    >
    {texto}
    </button>
  )
}