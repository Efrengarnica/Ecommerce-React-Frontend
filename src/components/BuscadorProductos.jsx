import React, { useState } from 'react'

//Funcion para modifircar el contesxt
//Se rreendizara Productos hombre 

export const BuscadorProductos = ({ stagePage, modificarStatePage }) => {

    return (
        <div className="control">
            <input 
            className="input" 
            type="text" 
            placeholder="Buscar"
            value={stagePage}
            onChange={modificarStatePage}
            />
        </div>
    )
}
