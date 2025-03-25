import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/BotonInicio.css'

export const BotonInicio = ({ titulo, isMen }) => {
  const navigate = useNavigate();

  const irAProductosHombre = () => {
    navigate('/productos-hombre');
  }

  const irAProductosMujer = () => {
    navigate('/productos-mujer');
  }

  return (
    <button
      className="button is-light has-background-black-transparent is-rounded has-text-white mt-3"
      onClick={isMen ? irAProductosHombre : irAProductosMujer}
    >
      {titulo}
    </button>
  )
}