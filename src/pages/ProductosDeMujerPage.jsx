import React from 'react'
import useProductosStore from "../store/useProductosStore";
import { Card } from '../components/Card';

export const ProductosDeMujerPage = () => {
  const { productos } = useProductosStore();
  return (
    <section className="section" id="sectionId">
      <div className="container" id="container-principal">
        <div className="columns is-multiline" id="product-list">
          {productos.mujer.map(producto => (
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
          ))}
        </div>
      </div>
    </section >
  )
}