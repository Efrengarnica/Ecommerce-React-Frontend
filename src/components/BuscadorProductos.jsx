import React, { useState } from 'react'

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
