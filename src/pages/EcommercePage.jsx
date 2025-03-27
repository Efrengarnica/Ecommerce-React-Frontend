import React from 'react'
import '../styles/EcommercePage.css'
import { BotonInicio } from '../components/BotonInicio'
import { ModalCarrito } from '../components/ModalCarrito';

export const EcommercePage = () => {
  return (
    <>
      <ModalCarrito/>
      <div className="columns m-0" id="portadaId">
        <div className="column is-6 column-box bg-image-1">
          <div className="overlay">
            <BotonInicio 
            titulo={'Hombres'}
            isMen={true}
              >
            </BotonInicio>
          </div>
        </div>
        <div className="column is-6 column-box bg-image-2">
          <div className="overlay">
          <BotonInicio 
            titulo={'Mujeres'}
            isMen={false}
            >
          </BotonInicio>
          </div>
        </div>
      </div>
    </>
  )
}