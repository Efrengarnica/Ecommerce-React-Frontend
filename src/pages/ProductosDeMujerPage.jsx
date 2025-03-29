import React, { useState } from 'react'
import useProductosStore from "../store/useProductosStore";
import { Card } from '../components/Card';
import { BuscadorProductos } from '../components/BuscadorProductos';
import '../styles/ProductosDeAmbosPage.css';

export const ProductosDeMujerPage = () => {

  const [estadoInicialPagina, setEstadoInicialPagina] = useState("")

  const findProducts = useProductosStore((state) => state.findProducts)

  const productosARenderizar = findProducts(estadoInicialPagina, "mujer");

  const manejarEstadoInicialPagina = (event) => {
    setEstadoInicialPagina(event.target.value)
  }

  return (
    <>
      <section className="section" id="sectionId">
        <div className="container" id="container-principal">
          <BuscadorProductos
            stagePage={estadoInicialPagina}
            modificarStatePage={manejarEstadoInicialPagina}
          />
          <div className="columns is-multiline" id="product-list">
            {
              productosARenderizar.length > 0 ? (
                productosARenderizar.map(producto => (
                  <Card
                    key={producto.id}
                    id={producto.id}
                    title={producto.title}
                    categoria={producto.categoria}
                    image={producto.image}
                    price={producto.price}
                    talla={producto.talla}
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