import { create } from "zustand";
import useProductosStore from "./useProductosStore";

//Por terminar
const useCartStore = create((set, get) => {
  //Cuidado se trae una solo ves si cambia productosMap este no cambia.
  //productosMap: useProductosStore.getState().productosMap, No me conviene ya que si aplico la de crear productos desde mi pagina esto no se actualizara
  //productosMap: useProductosStore((state) => state.productosMap), No se puede usar dentro de un Store

  //De esta manera escucho los cambios que van a ver en el store de productos, pero solo estaré escuchando los cambios de productosMap si hay
  //cambios en otro de sus estados no los escucharé y por ende no volveré a ejecutar esta funcion para actucalizar el valor de productosMap.

  //Tengo mi primer version
  const initialProductosMap = useProductosStore.getState().productosMap;

  //Esto cambia mi version cuando se actualiza productosMap en el otro store. 
  const unsubscribe = useProductosStore.subscribe(
    (state) => state.productosMap, // Solo se suscribe a productosMap
    (productosMap) => {
      //Aqui es donde cuando cambia el productosMap del otro store lo setea a mi store de Cart con el nuevo valor
      set({ productosMap });
    }
  );

  return {
    //ESTADOS//

    //Aqui defino mi estado del store de productos que cambiará cuando el valor de productosMap cambie.
    productosMap: initialProductosMap,

    //Estados para mostrar el modal de carrito
    isCartOpen: false,
    openCart: () => set({ isCartOpen: true }),
    closeCart: () => set({ isCartOpen: false }),

    //Estado incial de mi carrito.
    carritoCompras: new Map(),


    // FUNCIONES //

    //Función para agregar productos al carrito.
    modificarCarrito: (id, operacion = "suma") => {
      //Aqui no me preocupo de que esta funcion se base en un estado desactualizado ya que cuando se definio se apoyó de el estado de su store
      //entonces si el estado de su store cambia esta cambia.
      const productoAgregar = useProductosStore.getState().findProductById(id);
      if (!productoAgregar) return; 
      set((state) => {
        // Creamos una copia del Map actual para trabajar de forma inmutable.
        const nuevoCarrito = new Map(state.carritoCompras);
        // Revisamos si ya existe el producto en el carrito.
        const itemActual = nuevoCarrito.get(id);
        if (operacion === "suma") {
          if (itemActual) {
            nuevoCarrito.set(id, {
              ...itemActual,
              cantidadProducto: itemActual.cantidadProducto + 1
            });
          } else {
            nuevoCarrito.set(id, { ...productoAgregar, cantidadProducto: 1 });
          }
        } else {
          if (itemActual) {
            if (itemActual.cantidadProducto === 1) {
              nuevoCarrito.delete(id);
            } else {
              nuevoCarrito.set(id, {
                ...itemActual,
                cantidadProducto: itemActual.cantidadProducto - 1
              });
            }
          }
        }
        return { carritoCompras: nuevoCarrito };
      })
    },//modificarCarrito().

    //Función para eliminar un producto por su ID.
    eliminarProductoDeCarrito: (id) => {
      const carritoComprasPorFiltrar = get().carritoCompras;
      if (!carritoComprasPorFiltrar.get(id)) return
      set((state) => {
        const nuevoCarrito = new Map(state.carritoCompras);
        nuevoCarrito.delete(id);
        return { carritoCompras: nuevoCarrito };
      });
    },//eliminarProductoDeCarrito().

    //Función que ayuda a calcular el total de dinero que costará el Carrito de Compras.
    calcularTotal: () => {
      return [...get().carritoCompras.values()].reduce((total, articulo) => {
        return total + articulo.price * articulo.cantidadProducto;
      }, 0);
    },

    //Función para calcular el total de productos que hay en el carrito.
    calcularTotalProductos: () => {
      return [...get().carritoCompras.values()].reduce((total, articulo) => {
        return total + articulo.cantidadProducto;
      }, 0);
    }

  }//Final de mi return.
})//Final de mi store.

export default useCartStore;