import { create } from "zustand";
import { getMenProducts, getWomenProducts, getWomenProductsBySearch, getMenProductsBySearch } from '../../api/requestsProducts.js'

const useProductosStore = create((set, get) => ({

    //Estado inicial de mi página pageHombre.
    productosBackHombres: [],
    errorHombre: null,
    fetchMenProducts: async () => {
      try {
        const products = await getMenProducts()
        set({productosBackHombres: products})
      } catch (error) {
        console.error("Error al cargar las productos:", error)
        set({errorHombre: "Error al cargar los productos"})
      }
    },
    //Me ayuda para el motor de búsqueda para hombre.
    obtenerProductosHombrePorBusqueda: async (palabra) => {
      try {
        const products = await getMenProductsBySearch(palabra)
        set({productosBackHombres: products})
      } catch {
        console.error("Error al cargar las productos por búsqueda:", error)
      }
    }, 

    //Estado inicial de mi página pageMujer.
    productosBackMujeres: [],
    errorMujer: null,
    fetchWomenProducts: async () => {
      try {
        const products = await getWomenProducts()
        set({productosBackMujeres: products})
      } catch (error) {
        console.error("Error al cargar las productos:", error)
        set({errorMujer: "Error al cargar los productos"})
      }
    },
    //Me ayuda para el motor de búsqueda para mujer.
    obtenerProductosMujerPorBusqueda: async (palabra) => {
      try {
        const products = await getWomenProductsBySearch(palabra)
        set({productosBackMujeres: products})
      } catch {
        console.error("Error al cargar las productos por búsqueda:", error)
      }
    }
    
}))

export default useProductosStore;