import React, { useContext } from 'react'
import CartContext from "hooks/CartContext";
function ActionBtn({addToCart, prodId}) {
    // const cart = useContext(CartContext)
    // const items = cart.products;
    //   const isInCart = prodId && items.hasOwnProperty(`${prodId}`);
  return (
    <button type="button" className='primary_btn' onClick={()=>addToCart(prodId)} >Add To Cart</button>
  )
}

export default ActionBtn