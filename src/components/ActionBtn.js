import React from 'react'
function ActionBtn({addToCart, prodId}) {
  return (
    <button type="button" className='primary_btn' onClick={()=>addToCart(prodId)} >Add To Cart</button>
  )
}

export default ActionBtn