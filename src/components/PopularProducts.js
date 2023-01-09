import React from 'react'
import style from "./home.module.scss"
import {BsArrowRight} from 'react-icons/bs'
import Product from './Product'
import { fetchProducts } from 'utils/featchers/productdata';
import { useQuery } from 'react-query';

function PopularProducts() {
  const { isError, isSuccess, isLoading, data, error } = useQuery(
    "products",
    fetchProducts,
    { staleTime: 3000 }
  );
  return (
    <div className={style.propular_products_wrapper}>
        <h3>Popular Products</h3>
        <div className={style.top_product_wrapper}>
            {data?.slice(10,20).map((item) =>(<Product key={item.id} {...item} />))}
        </div>
        <div className={style.action_btn_explore}>
        <button className='primary_btn'>
        Explore all items
            <BsArrowRight />
        </button>

        </div>

    </div>
  )
}

export default PopularProducts