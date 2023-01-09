import React from 'react'
import style from "./home.module.scss"
import img1 from "../assets/images/payment.svg"
import img2 from "../assets/images/return.svg"
import img3 from "../assets/images/support.svg"
import {Container,Col,Row} from "react-bootstrap"
const BenifitsType = () =>{
    return(

        <div className={style.beni_type}>
            <span>
                <img src={img1} />
            </span>
            <div className={style.beni_detail}>
                <h4>Payment Method</h4>
                <p>
                We offer flexible payment
                options, to make easier.
                </p>
            </div>
        </div>
    )
    
}

function Benifits() {
  return (
    <div className={style.benifits_section}>
        <h5>
        Benefits for your expediency
        </h5>
        <Row>
            <Col lg={4} md={4}>
            <div className={`${style.beni_type } ${style.payment}`}>
            <span>
                <img src={img1} />
            </span>
            <div className={style.beni_detail}>
                <h4>Payment Method</h4>
                <p>
                We offer flexible payment
                options, to make easier.
                </p>
            </div>
        </div>
            </Col>
            <Col lg={4} md={4}>
            <div className={`${style.beni_type } ${style.retutn}`}>
            <span>
                <img src={img2} />
            </span>
            <div className={style.beni_detail}>
                <h4>Return policy</h4>
                <p>
                You can return a product 
within 30 days.
                </p>
            </div>
        </div>
            </Col>
            <Col lg={4} md={4}>
            <div className={`${style.beni_type } ${style.support}`}>
            <span>
                <img src={img3} />
            </span>
            <div className={style.beni_detail}>
                <h4>Customer Support</h4>
                <p>
                Our customer support 
is 24/7..
                </p>
            </div>
        </div>
            </Col>
        </Row>
    </div>
  )
}

export default Benifits