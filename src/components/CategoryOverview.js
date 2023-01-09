import React, { useContext } from 'react'
import style from "../components/home.module.scss"
import ActionBtn from './ActionBtn';
import { cartContext } from "../Context/CartContext";
function CategoryOverview(props) {
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
    <div className={style.category_box}>
         <div className={style.cat_img}>
            <img src={thumbnail} />
        </div>
        <div className={style.cat_product_wrap}>
          <div>
            <h5>{brand}</h5>
            <p>{title}</p>
          </div>
          <div>
            <h5>$ {price}</h5>
          </div>
        </div>
        <div className={style.category_detail}>
        <ActionBtn addToCart ={actionPressHandler} prodId ={id} />
        </div>
    </div>
  )
}

export default CategoryOverview