import React from 'react'
import useProductosStore from "../store/useProductosStore";

export const ProductosDeHombrePage = () => {
  const { productos } = useProductosStore();
  console.log(productos)
  return (
    <div>ProductosDeHombrePage</div>
  )
}
