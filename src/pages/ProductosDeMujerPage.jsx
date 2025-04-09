import React, { useEffect, useState } from 'react'
import useProductosStore from "../store/useProductosStore";
import { Card } from '../components/Card';
import { BuscadorProductos } from '../components/BuscadorProductos';
import '../styles/ProductosDeAmbosPage.css';
import useCartStore from '../store/useCartStore';

export const ProductosDeMujerPage = () => {

  const [estadoInicialPagina, setEstadoInicialPagina] = useState("")
  const manejarEstadoInicialPagina = (event) => {
    setEstadoInicialPagina(event.target.value)
  }
  const productosBackMujeres = useProductosStore(state => state.productosBackMujeres)
  const errorMujer = useProductosStore(state => state.errorMujer)
  //Me ayuda a saber si algo va mal con la petición para traer los productos.
  const isLoadingProductosMujer = useProductosStore(state => state.isLoadingProductosMujer)
  const errorBusquedaMujer = useProductosStore(state => state.errorBusquedaMujer)
  const isLoadingProductosMujerBusqueda = useProductosStore(state => state.isLoadingProductosMujerBusqueda)
  //Me ayuda, junto a useEffect a mostar el mensaje de cargando solo si la petición tarda mucho.
  const [showLoading, setShowLoading] = useState(false);
  const [showLoadingBuscador, setShowLoadingBuscador] = useState(false);
  const fetchWomenProducts = useProductosStore(state => state.fetchWomenProducts)
  const obtenerProductosMujerPorBusqueda = useProductosStore(state => state.obtenerProductosMujerPorBusqueda)
  const carritoComprasUsuario = useCartStore(state => state.carritoComprasUsuario)
  //Muestra cargando solo si se tarda la petición de búsqueda.
  useEffect(() => {
    let timer;
    if (isLoadingProductosMujerBusqueda) {
      timer = setTimeout(() => setShowLoadingBuscador(true), 300);
    } else {
      setShowLoadingBuscador(false);
    }
    return () => clearTimeout(timer);
  }, [isLoadingProductosMujerBusqueda]);

  //Muestra cargando solo si se tarda la petición de todos los productos.
  useEffect(() => {
    let timer;
    if (isLoadingProductosMujer) {
      timer = setTimeout(() => setShowLoading(true), 300);
    } else {
      setShowLoading(false);
    }
    return () => clearTimeout(timer);
  }, [isLoadingProductosMujer]);

  //Ayuda a hacer las peticiones correspondientes dependiendo del valor del input.
  useEffect(() => {
    if (estadoInicialPagina.trim() === '') {
      fetchWomenProducts();
      return;
    }
    const timeoutId = setTimeout(() => {
      obtenerProductosMujerPorBusqueda(estadoInicialPagina);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [estadoInicialPagina, fetchWomenProducts, obtenerProductosMujerPorBusqueda]);

  return (
    <>
      <section className="section" id="sectionId">
        <div className="container" id="container-principal">
          <BuscadorProductos
            stagePage={estadoInicialPagina}
            modificarStatePage={manejarEstadoInicialPagina}
          />
          <h2 className="has-text-centered">Productos de Mujer</h2>
          <div className="columns is-multiline" id="product-list">
            {
              showLoading ? (
                <div className='sinCoincidencias is-flex is-justify-content-center is-align-items-center'>
                  <p>Cargando...</p>
                </div>
              ) : errorMujer ? (
                <div className='sinCoincidencias is-flex is-justify-content-center is-align-items-center'>
                  <p>Error al cargar los productos</p>
                </div>
              ) : showLoadingBuscador ? (
                <div className='sinCoincidencias is-flex is-justify-content-center is-align-items-center'>
                  <p>Cargando...</p>
                </div>
              ) : errorBusquedaMujer ? (
                <div className='sinCoincidencias is-flex is-justify-content-center is-align-items-center'>
                  <p>Error al cargar la búsqueda.</p>
                </div>
              )
                : productosBackMujeres.length > 0 ? (
                  productosBackMujeres.map(producto => (
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
                ) : (
                  <div className='sinCoincidencias is-flex is-justify-content-center is-align-items-center'>
                    <p>No hay productos que mostrar.</p>
                  </div>
                )
            }
          </div>
        </div >
      </section >
    </>
  )
}