import React from 'react'

export const Boton = ({ titulo, navegarA }) => {

  return (
    <button
      type='button'
      className="button has-background-black-transparent is-rounded has-text-white"
      onClick={navegarA}
    >
      {titulo}
    </button>
  )
}