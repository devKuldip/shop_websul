import React from 'react'
import Header from './Header'
import style from "./home.module.scss"
function HomeIntro() {
  return (
    <>
    <div className={style.home_intro_section}>
        
        <Header />
        <div className={style.shop_intro}>
            <h3>
            Exclusive Deals of Furniture Collection
            </h3>
            <p>Explore different categories. Find the best deals.</p>
            <button>shop now</button>
        </div>
    </div>
    </>

  )
}

export default HomeIntro