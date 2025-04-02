import React, { useEffect, useState } from 'react'
import useProductosStore from "../store/useProductosStore";
import { Card } from '../components/Card';
import { BuscadorProductos } from '../components/BuscadorProductos';
import '../styles/ProductosDeAmbosPage.css';

export const ProductosDeMujerPage = () => {

  const [estadoInicialPagina, setEstadoInicialPagina] = useState("")
  const manejarEstadoInicialPagina = (event) => {
    setEstadoInicialPagina(event.target.value) 
  }
  const productosBackMujeres = useProductosStore(state => state.productosBackMujeres)
  const errorMujer = useProductosStore(state => state.errorMujer)
  const fetchWomenProducts = useProductosStore(state => state.fetchWomenProducts)
  const obtenerProductosMujerPorBusqueda = useProductosStore(state => state.obtenerProductosMujerPorBusqueda)

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
          <h2 class="has-text-centered">Productos de Mujer</h2>
          <div className="columns is-multiline" id="product-list">
            {
              productosBackMujeres.length > 0 ? (
                productosBackMujeres.map(producto => (
                  <Card
                    key={producto.id}
                    id={producto.id}
                    title={producto.name}
                    categoria={producto.category}
                    image={producto.image}
                    price={producto.price}
                  >
                  </Card>
                ))
              )
                : (
                  <div className='sinCoincidencias is-flex is-justify-content-center is-align-items-center'>
                    <p>Sin coincidencias</p>
                  </div>
                )
            }
          </div>
        </div>
      </section>
    </>
  )
}