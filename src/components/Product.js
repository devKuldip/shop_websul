import React, { useCallback, useContext } from 'react'
import pr_img from "../assets/images/chair_img.png"
import ActionBtn from './ActionBtn';
import style from "./home.module.scss"
import { cartContext } from "../Context/CartContext";
function Product(props) {
  const { dispatch } = useContext(cartContext);
  const { id, brand, title,discountPercentage, thumbnail, price  } = props;
   const addProduct =  {
    id: id,
    discountPercentage:discountPercentage,
    discountedPrice:88,
    price:price,
    quantity:1,
    title: title,
    total:100,
   }


const actionPressHandler = () => {
  dispatch({
    type: "ADD_TO_CART",
    addProduct,
  });
};

  return (
    <div className={style.product_box}>
        <div className={style.product_img}>
            <img src={thumbnail} />
        </div>
        <div className={style.product_info_wrap}>
            <h4>{brand}</h4>
            <p>{title}</p>
            <h4>$ {price}</h4>
        </div>
        <div className={style.add_to_cart}>
        <ActionBtn addToCart ={actionPressHandler} prodId ={id} />
        </div>
    </div>
  )
}

export default Product