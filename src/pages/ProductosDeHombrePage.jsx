import React, { useEffect, useState } from 'react'
import useProductosStore from "../store/useProductosStore";
import { Card } from '../components/Card';
import { BuscadorProductos } from '../components/BuscadorProductos';
import '../styles/ProductosDeAmbosPage.css';

export const ProductosDeHombrePage = () => {

  const [estadoInicialPagina, setEstadoInicialPagina] = useState("")
  const productosBackHombres = useProductosStore(state => state.productosBackHombres)
  const errorHombre = useProductosStore(state => state.errorHombre)
  const fetchMenProducts = useProductosStore(state => state.fetchMenProducts)
  const obtenerProductosHombrePorBusqueda = useProductosStore((state) => state.obtenerProductosHombrePorBusqueda)
  const manejarEstadoInicialPagina = (event) => {
    setEstadoInicialPagina(event.target.value)
  }

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
          <h2 class="has-text-centered">Productos de Hombre</h2>
          <div className="columns is-multiline" id="product-list">
            {
              productosBackHombres.length > 0 ? (
                productosBackHombres.map(producto => (
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