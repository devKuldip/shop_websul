import React from 'react'
import { Col, Row } from 'react-bootstrap'
import primg from "../assets/images/news_latter.png"
import style from "./home.module.scss"

function Newslatter() {
  return (
    <Row>
        <Col lg={6}>
        <div className={style.news_image}>
        <img src={primg} />
        </div>
        </Col>
        <Col lg={6}>
        <div className={style.join_news_latter}>
            <h4>
            Join Our 
                <span>Newsletter</span>
            </h4>
            <p>Receive exclusive deals, discounts and many offers.</p>
            <div className={style.input_wrap}>
                <input type="email" placeholder='Enter your email' className='inp_control' />
            </div>
            <button className='primary_btn'>Subscribe</button>
        </div>
        </Col>
    </Row>
   
  )
}

export default Newslatter