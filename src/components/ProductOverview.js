import React from 'react'
import primg from "../assets/images/sss.jpg"
import style from "./home.module.scss"
function ProductOverview() {
  return (
    <div className={style.product_view_wrapper}>
        <img src={primg} />
    </div>
  )
}

export default ProductOverview