import PopularProducts from 'components/PopularProducts';
import TestimmonialSectioin from 'components/TestimmonialSectioin';
import React from 'react'
import { Container } from 'react-bootstrap';
import Benifits from '../components/Benifits';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';
import style from "../components/home.module.scss"
import Newslatter from '../components/Newslatter';
import ProductsSection from '../components/ProductsSection';
function Home() {

  return (
    <>
        <div className={style.home_intro_section}>
    <Container>
        <div className={style.shop_intro}>
            <h3>
            Exclusive Deals of Furniture Collection
            </h3>
            <p>Explore different categories. Find the best deals.</p>
            <button>shop now</button>
        </div>
    </Container>
    </div>
    
    <div className={style.category_container}>
      <Container>
    <CategorySection />
      </Container>
    </div>
    <div className={style.category_container}>
      <Container>
      <PopularProducts />
      </Container>
    </div>
    <div className={style.category_container}>
    <ProductsSection />
    </div>
    <div className={style.benifits_container}>
      <Container className={style.conyy}>
    <Benifits />
      </Container>
    </div>
    <div className='mt-4'>
      <Container>
    <TestimmonialSectioin />
      </Container>
    </div>
    <div>
      <Container fluid>
    <Newslatter />
      </Container>
    </div>
    <div >
      <Container>
    <Footer />
      </Container>
    </div>
    </>
  )
}

export default Home