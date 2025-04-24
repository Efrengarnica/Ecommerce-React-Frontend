import React from 'react'
import '../styles/BotonProducto.css'
import useCartStore from '../store/useCartStore'
import { useNavigate } from 'react-router-dom';

export const BotonProducto = ({ texto, id, isActiveUser, carritoId, userId }) => {

  //Me ayuda a navegr al login si no hay un usaurio activo y se le da click a agregar a carrito.
  const navigate = useNavigate();
  const irALogin = () => {
    navigate('/login'); 
  }
  //Me ayuda a realizar el efecto de modificar el color de boton de carrito cuando se agrega algo a él.
  const setColorBotonCarrito = useCartStore((state) => state.setColorBotonCarrito)
  //Me ayuda a agregar un item al carrito.
  const updateCartItem = useCartStore((state) => state.updateCartItem)
  //Me ayuda a implementar varias funciones con un solo onClick.
  const accionesBoton = (idProducto, operacion, idCarritoUser, idUser, hayUsuario) => {
    if(!hayUsuario) {
      irALogin()
      return
    }
    if ( idCarritoUser === null || idUser===null ) return
    setColorBotonCarrito()
    updateCartItem(idProducto, operacion, idCarritoUser, idUser, hayUsuario)
  }

  return (
    <button 
    type="button" 
    className="agregarACarrito button is-light has-background-black has-text-white mt-3"
    onClick={() => accionesBoton(id, "suma", carritoId, userId, isActiveUser)}
    >
    {texto}
    </button>
  )
}