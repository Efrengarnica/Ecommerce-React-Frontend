import React from 'react'
import '../styles/EcommercePage.css'

export const EcommercePage = () => {
  return (
    <div className="columns m-0" id="portadaId">
      <div className="column is-6 column-box bg-image-1">
        <div className="overlay">
          <button className="button is-light has-background-black-transparent is-rounded has-text-white mt-3" id="botonHombres" data-action="presentar-elementos">Hombres</button>
        </div>
      </div>
      <div className="column is-6 column-box bg-image-2">
        <div className="overlay">
          <button className="button is-light has-background-black-transparent is-rounded has-text-white mt-3" id="botonMujeres" data-action="presentar-elementos">Mujeres</button>
        </div>
      </div>
    </div>
  )
}
