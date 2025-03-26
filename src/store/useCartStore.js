import { create } from "zustand";
import useProductosStore from "./useProductosStore";


//Por terminar
const useCartStore = create((set) => ({


  carritoCompras: new Map(), // Estado inicial como un Map vacío.
  // Función para agregar un nuevo producto
  agregarProducto: (id) => {
    const productoAgregar = useProductosStore.getState().findProductById(id);

    if (productoAgregar) {
        set((state) => {
          const nuevoCarrito = new Map(state.carritoCompras);
          nuevoCarrito.set(id, producto); // Agrega el producto al carrito usando su id
          return { carrito: nuevoCarrito };
        })
      }
    },

  // Función para eliminar un producto por ID
  eliminarProducto: (id) => {
    set((state) => ({
      productos: state.productos.filter((producto) => producto.id !== id),
    }));
  },


}));

export default useProductosStore;