import React from 'react'
import style from "./home.module.scss"
import ProductOverview from './ProductOverview'
import {
  useQuery
} from 'react-query'
import { fetchProducts } from "../utils/featchers/productdata";
import Product from './Product';

  function ProductsGrid() {
  const { isError, isSuccess, isLoading, data, error } = useQuery(
    "products",
    fetchProducts,
    { staleTime: 3000 }
  );
  
  return (
    <div className={style.product_grid_wrapper}>
        <div className={style.grid_with_controls}>
          <div className={style.grid_content}>
             <h4>Our Own Creation</h4>
            <p>Designed in our studio</p>
            {/* <p>More</p> */}
          </div>
        </div>
        <div className={style.products_grid_box}>
        <div className={style.top_product_wrapper}>
            {data?.slice(20,30).map((item) =>(<Product key={item.id} {...item} />))}
        </div>
        </div>
    </div>
  )
}

export default ProductsGrid