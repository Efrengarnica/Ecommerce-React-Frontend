import React from 'react'

export const BuscadorProductos = ({ stagePage, modificarStatePage }) => {
    return (
        <div className="control mt-3">
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