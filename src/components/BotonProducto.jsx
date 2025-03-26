import React from 'react'
import '../styles/BotonProducto.css'

export const BotonProducto = ( {texto} ) => {
  return (
    <button type="button" className="agregarACarrito button is-light has-background-black has-text-white mt-3">{texto}</button>
  )
}