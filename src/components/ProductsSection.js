import React from 'react'
import ProductsGrid from './ProductsGrid'
import style from "./home.module.scss"
function ProductsSection() {
  return (
    <div className={style.products_container}>
        <ProductsGrid />
    </div>
  )
}

export default ProductsSection