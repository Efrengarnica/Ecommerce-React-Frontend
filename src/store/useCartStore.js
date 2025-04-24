import { create } from "zustand";
import {getCarritoUser, postCarritoItem, editCartItem, deleteCartItem, clearCartItems} from '../../api/requestsCarrito.js'



const useCartStore = create((set, get) => ({

    //Estados para mostrar el modal de carrito.
    isCartOpen: false,
    openCart: () => set({ isCartOpen: true }),
    closeCart: () => set({ isCartOpen: false }),

    //Estados para mostrar el modal de compra exitosa.
    isModalPurchaseOpen: false,
    isloadingCompraUsuario: false,
    errorAlComprarProductos: false,
    openModalPurchase: async(userCartId, userId) => {
      if (get().carritoComprasUsuario?.items?.length === 0)  return
      set({ isModalPurchaseOpen:true, isCartOpen:false, isloadingCompraUsuario: true, errorAlComprarProductos: false })
      try {
        await clearCartItems(userCartId)
        await get().fetchCartUsuario(userId)
      } catch(error){
        set({ errorAlComprarProductos: true })
      } finally {
        set({ isloadingCompraUsuario: false })
      }
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
    errorCargarCarrito: false,
    isLoadingCarrito: false,
    fetchCartUsuario: async (userId) => {
      set({ isLoadingCarrito: true, errorCargarCarrito: false })
      try {
        const carrito = await getCarritoUser(userId)
        set({carritoComprasUsuario: carrito})
      } catch (error) {
        set({ errorCargarCarrito: true })
      } finally {
        set({ isLoadingCarrito: false })
      }
    },

    // Función para agregar o actualizar un producto en el carrito.
    errorModificarCarrito : false,
    cerrarErrorModificarCarrito: () => set({ errorModificarCarrito: false }),
    isLoadingModificarCarrito: false,
    updateCartItem: async (productId, operacion, userCartId, userId, quantityDelta = 1) => {
      let data = null
      let idItemAModificar=null
      const cart = get().carritoComprasUsuario;
      if (!cart) return; // Si no hay carrito cargado, no hacer nada
      set({ isLoadingModificarCarrito: true, errorModificarCarrito: false })
      try{
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
    } catch(error){
      // Error al modificar el carrito (post/edit/delete)
      console.error("Error al modificar ítem del carrito:", error);
      set({ errorModificarCarrito: true });
    } finally {
      set({ isLoadingModificarCarrito: false });
    }
    await get().fetchCartUsuario(userId)
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