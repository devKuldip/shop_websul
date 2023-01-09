import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaDribbble, FaFacebookF, FaFacebookSquare, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import logo from "../assets/images/logo.svg"
import style from "./home.module.scss"
const allLinks=[
  {
  tittle:"My Account",
  sub_links:["Sign in","Register","Order status"]
},
  {
  tittle:"Help",
  sub_links:["Shipping",
    "Returns",
    "Sizing"]
},
  {
  tittle:"Shop",
  sub_links:["All Products",
    "Bedroom",
    "Dinning Room"
    ]
},
  {
  tittle:"Legal Stuff",
  sub_links:["Shipping & Delivery",
    "Terms & Conditions",
    "Privacy & Policy"]
},
]

function Footer() {
  return (
    <div className={style.footer_wrapper}>
      <Row>
        <Col lg={4}>
          <div className={style.company_info_section}>
            <div className={style.logo_box}>
              <img src={logo} />
            </div>
            <div className={style.social_reach}>
              <ul>
                <li>
                  <span>
                  <FaFacebookSquare />
                  </span>
                </li>
                <li>
                  <span>
                  <FaInstagram />
                  </span>
                </li>
                <li>
                  <span>
                  <FaLinkedinIn />
                  </span>
                </li>
                <li>
                  <span>
                  <FaDribbble />
                  </span>
                </li>
                <li>
                  <span>
                  <FaTwitter />
                  </span>
                </li>
               
              </ul>
            </div>
            <div className={style.company_address}>
            <h5>Address</h5>
                <ul>
                  <li key={1}>+123 654 987
                  </li>
                  <li key={2}>877  The Bronx, NY
                  </li>
                  <li key={3}>14568, USA
                  </li>
                </ul>
            </div>
          </div>
        </Col>
        <Col lg={8}>
          <Row>
            {allLinks?.map((link) => (
            <Col key={link.tittle} lg={3} md={6} className="col-6">
              <div className={style.link_collection}>
                <h5>{link.tittle}</h5>
                <ul>
                  {link.sub_links?.map((sub_link,index) => (

                  <li key={index}>
                    <a>{sub_link}</a>
                  </li>
                  ))}
                </ul>
              </div>
            </Col>
  ))}
          </Row>
        </Col>
      </Row>
      <div className={style.bottom_section}>
        <p>
      Copyright ©2020 INWOOD. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
// Help
// Shop
// Legal Stuff
// Address
// +123 654 987
// 877  The Bronx, NY
// 14568, USA
// Sign in
// Register
// Order status
// Shipping
// Returns
// Sizing
// All Products
// Bedroom
// Dinning Room

// Shipping & Delivery
// Terms & Conditions
// Privacy & Policy