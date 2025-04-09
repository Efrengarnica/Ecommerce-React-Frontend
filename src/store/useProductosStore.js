import { create } from "zustand";
import { getMenProducts, getWomenProducts, getWomenProductsBySearch, getMenProductsBySearch } from '../../api/requestsProducts.js'

const useProductosStore = create((set, get) => ({

    //Estado inicial de mi página pageHombre.
    productosBackHombres: [],
    errorHombre: false,
    isLoadingProductosHombre:false,
    fetchMenProducts: async () => {
      set({isLoadingProductosHombre:true, errorHombre:false})
      try {
        const products = await getMenProducts()
        set({productosBackHombres: products})
      } catch (error) {
        console.error("Error al cargar las productos:", error)
        set({errorHombre: true})
      } finally {
        set({isLoadingProductosHombre:false})
      }
    },

    //Me ayuda para el motor de búsqueda para hombre.
    errorBusquedaHombre: false,
    isLoadingProductosHombreBusqueda:false,
    obtenerProductosHombrePorBusqueda: async (palabra) => {
      set({isLoadingProductosHombreBusqueda:true, errorBusquedaHombre:false})
      try {
        const products = await getMenProductsBySearch(palabra)
        set({productosBackHombres: products})
      } catch(error) {
        console.error("Error al cargar las productos por búsqueda:", error)
        set({errorBusquedaHombre: true})
      } finally {
        set({isLoadingProductosHombreBusqueda:false})
      }
    }, 

    //Estado inicial de mi página pageMujer.
    productosBackMujeres: [],
    errorMujer: false,
    isLoadingProductosMujer:false,
    fetchWomenProducts: async () => {
      set({isLoadingProductosMujer:true, errorMujer:false})
      try {
        const products = await getWomenProducts()
        set({productosBackMujeres: products})
      } catch (error) {
        console.error("Error al cargar las productos:", error)
        set({errorMujer: true})
      } finally {
        set({isLoadingProductosMujer:false})
      }
    },
    
    //Me ayuda para el motor de búsqueda para mujer.
    errorBusquedaMujer: false,
    isLoadingProductosMujerBusqueda:false,
    obtenerProductosMujerPorBusqueda: async (palabra) => {
      set({isLoadingProductosMujerBusqueda:true, errorBusquedaMujer:false})
      try {
        const products = await getWomenProductsBySearch(palabra)
        set({productosBackMujeres: products})
      } catch(error) {
        console.error("Error al cargar las productos por búsqueda:", error)
        set({errorBusquedaMujer: true})
      } finally {
        set({isLoadingProductosMujerBusqueda:false})
      }
    }
    
}))

export default useProductosStore;