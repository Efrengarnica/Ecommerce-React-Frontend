import { create } from "zustand";
import useProductosStore from "./useProductosStore";
import {getCarritoUser, postCarritoItem, editCartItem, deleteCartItem, clearCartItems} from '../../api/requestsCarrito.js'

//Por el momento usaré un usuario, aún no implemento multiples usuarios
//Datos usuario, en mi base tengo este usuario y este es su id de su carrito
const userCartId = "3fc7185a-c65e-434e-9a11-0562e88a5712"

const useCartStore = create((set, get) => ({

    //Estados para mostrar el modal de carrito.
    isCartOpen: false,
    openCart: () => set({ isCartOpen: true }),
    closeCart: () => set({ isCartOpen: false }),

    //Estados para mostrar el modal de compra exitosa.
    isModalPurchaseOpen: false,
    openModalPurchase: async() => {
      if (get().carritoComprasUsuario?.items?.length === 0)  return
      set({ 
        isCartOpen:false,
        isModalPurchaseOpen:true,
       })
      await clearCartItems("3fc7185a-c65e-434e-9a11-0562e88a5712")
      await get().fetchCartUsuario()
    },
    closeModalPurchase: () => set({ isModalPurchaseOpen: false }),
    
    //Estado para hacer el efecto de cambio de color del boton carrito.
    colorBotonCarrito : '#abb1bf',
    setColorBotonCarrito : () => {
      set({colorBotonCarrito: 'rgb(92, 244, 130)'})
      setTimeout(() => {
        set({colorBotonCarrito: '#abb1bf'});
      }, 500);
    },

    //Estado del carrito del usuario.
    carritoComprasUsuario: null,
    errorCarrito: null,
    fetchCartUsuario: async () => {
      try {
        const carrito = await getCarritoUser("3fc7185a-c65e-434e-9a11-0562e88a5712")
        console.log(carrito)
        set({carritoComprasUsuario: carrito})
      } catch (error) {
        console.error("Error al cargar el carrito:", error)
        set({errorHombre: "Error al cargar el carrito"})
      }
    },
    // Función para agregar o actualizar un producto en el carrito.
    updateCartItem: async (productId, operacion,  quantityDelta = 1) => {
      let data = null
      let idItemAModificar=null
      const cart = get().carritoComprasUsuario;
      if (!cart) return; // Si no hay carrito cargado, no hacer nada
      let updatedItems = [...cart.items];
        // Buscar si el producto ya está en el carrito
      let itemIndex = updatedItems.findIndex(item => Number(item.product_id) === Number(productId));
      if(operacion==="suma"){
        if (itemIndex > -1) {
          data = {"quantity": updatedItems[itemIndex].quantity + quantityDelta}
          idItemAModificar = updatedItems[itemIndex].id
          await editCartItem(data, idItemAModificar)
        } else {
          data = {
            "cart_id": userCartId,
            "product_id": productId,
            "quantity": quantityDelta,
          }
          await postCarritoItem(data)
          console.log(itemIndex)
        }
      }else if(operacion==="resta"){
        if (itemIndex > -1) {
          if(updatedItems[itemIndex].quantity - quantityDelta > 0){
            data = {"quantity": updatedItems[itemIndex].quantity - quantityDelta}
            idItemAModificar = updatedItems[itemIndex].id
            await editCartItem(data, idItemAModificar)
          } else {
            await deleteCartItem(updatedItems[itemIndex].id)
          }
        } else {
          return
        }
      } else {
        if (itemIndex > -1) {
          await deleteCartItem(updatedItems[itemIndex].id)}
        else{
          return
        }
      }
      await get().fetchCartUsuario()
    },
    // Función que calcula el total de productos en el carrito y que se muestra en el navbar.
    calcularTotalProductos: () => {
      if(get().carritoComprasUsuario !== null){
        return get().carritoComprasUsuario.items.reduce((total, articulo) => {
          return total + articulo.quantity;
        }, 0);
      }
    },
    // Función que calcula el Total de dinero que se va a pagar y que se muestra en el carrito.
    calcularTotal: () => {
      if(get().carritoComprasUsuario !== null){
        return get().carritoComprasUsuario.items.reduce((total, articulo) => {
            return total + articulo.product.price * articulo.quantity;
        }, 0)
      }
    }

}))//Final de mi store.

export default useCartStore;