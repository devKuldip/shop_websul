import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import CategoryList from './CategoryList'
import CategoryOverview from './CategoryOverview'
import style from "./home.module.scss"

import { fetchProducts } from 'utils/featchers/productdata';
import {allCategoryTypes} from 'utils/featchers/getCategory';

import { useQuery } from 'react-query';

function CategorySection() {
  const [categores, setCategores] = useState([])
  const { isError, isSuccess, isLoading, data, error } = useQuery(
    "products",
    fetchProducts,
    { staleTime: 3000 }
    );
    // useEffect(() => {
    //    const categories = allCategoryTypes(data)
    //    setCategores((pre)=> [...pre,...categories])
    // }, [data])
    
  return (
    <>
    <h3 className={style.cat_title}>Explore by Category</h3>
    <Row>
        <Col lg={4} className="col-12">
        {data ?(<CategoryList category_list={allCategoryTypes(data)} />) :null}
        </Col>
        <Col lg={8} className="col-12">
          <div className={style.category_items_wrapper}>
            <Row>
                {data?.slice(0,10).map((item) =>(
                <Col lg={6} md={6} key={item.id}>
                    <CategoryOverview {...item} />
                </Col>))}
            </Row>
            </div>
        </Col>
    </Row>
    </>
  )
}

export default CategorySection