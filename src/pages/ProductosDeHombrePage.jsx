import React, { useEffect, useState } from 'react'
import useProductosStore from "../store/useProductosStore";
import { Card } from '../components/Card';
import { BuscadorProductos } from '../components/BuscadorProductos';
import '../styles/ProductosDeAmbosPage.css';
import useCartStore from '../store/useCartStore';

export const ProductosDeHombrePage = () => {

  const [estadoInicialPagina, setEstadoInicialPagina] = useState("")
  const productosBackHombres = useProductosStore(state => state.productosBackHombres)
  const errorHombre = useProductosStore(state => state.errorHombre)
  const isLoadingProductosHombre = useProductosStore(state => state.isLoadingProductosHombre)
  const fetchMenProducts = useProductosStore(state => state.fetchMenProducts)
  const obtenerProductosHombrePorBusqueda = useProductosStore((state) => state.obtenerProductosHombrePorBusqueda)
  //Me ayuda a saber si algo va mal con la petición para traer los productos.
  const errorBusquedaHombre = useProductosStore(state => state.errorBusquedaHombre)
  const isLoadingProductosHombreBusqueda = useProductosStore(state => state.isLoadingProductosHombreBusqueda)
  const [showLoading, setShowLoading] = useState(false);
  const [showLoadingBuscador, setShowLoadingBuscador] = useState(false);
  const manejarEstadoInicialPagina = (event) => {
    setEstadoInicialPagina(event.target.value)
  }
  const carritoComprasUsuario = useCartStore(state => state.carritoComprasUsuario)

  //Muestra cargando solo si se tarda la petición de búsqueda.
  useEffect(() => {
    let timer;
    if (isLoadingProductosHombreBusqueda) {
      timer = setTimeout(() => setShowLoadingBuscador(true), 300);
    } else {
      setShowLoadingBuscador(false);
    }
    return () => clearTimeout(timer);
  }, [isLoadingProductosHombreBusqueda]);

  //Muestra cargando solo si se tarda la petición de todos los productos.
  useEffect(() => {
    let timer;
    if (isLoadingProductosHombre) {
      timer = setTimeout(() => setShowLoading(true), 300);
    } else {
      setShowLoading(false);
    }
    return () => clearTimeout(timer);
  }, [isLoadingProductosHombre]);

  //Ayuda a hacer las peticiones correspondientes dependiendo del valor del input.
  useEffect(() => {
    if (estadoInicialPagina.trim() === '') {
      fetchMenProducts();
      return;
    }
    const timeoutId = setTimeout(() => {
      obtenerProductosHombrePorBusqueda(estadoInicialPagina);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [estadoInicialPagina, fetchMenProducts, obtenerProductosHombrePorBusqueda]);

  return (
    <>
      <section className="section" id="sectionId">
        <div className="container" id="container-principal">
          <BuscadorProductos
            stagePage={estadoInicialPagina}
            modificarStatePage={manejarEstadoInicialPagina}
          />
          <h2 className="has-text-centered">Productos de Hombre</h2>
          <div className="columns is-multiline" id="product-list">

            {showLoading ? (
               <div className='sinCoincidencias is-flex is-justify-content-center is-align-items-center'>
                <p>Cargando...</p>
               </div>
            ): errorHombre ? (
              <div className='sinCoincidencias is-flex is-justify-content-center is-align-items-center'>
                <p>Error al cargar los productos.</p>
              </div>
            ) : showLoadingBuscador ? (
              <div className='sinCoincidencias is-flex is-justify-content-center is-align-items-center'>
                <p>Cargando...</p>
               </div>
            ) : errorBusquedaHombre ? (
              <div className='sinCoincidencias is-flex is-justify-content-center is-align-items-center'>
                <p>Error al cargar la búsqueda.</p>
              </div>
            ): productosBackHombres.length > 0 ? (
              productosBackHombres.map(producto => (
                <Card
                  key={producto.id}
                  id={producto.id}
                  title={producto.name}
                  categoria={producto.category}
                  image={producto.image}
                  price={producto.price}
                  carritoId={carritoComprasUsuario ? carritoComprasUsuario.id : null}
                  userId={carritoComprasUsuario ? carritoComprasUsuario.user_id : null}
                >
                </Card>
              ))
            ): (
              <div className='sinCoincidencias is-flex is-justify-content-center is-align-items-center'>
                <p>No hay productos que mostrar.</p>
              </div>
            )
            }
          </div>
        </div>
      </section>
    </>
  )
}