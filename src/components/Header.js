import React, { useContext } from 'react'
import style from "./home.module.scss";
import logo from "../assets/images/logo.svg"
import { BiSearch } from "react-icons/bi"
import { FiMenu } from "react-icons/fi"
import { FaShoppingCart } from 'react-icons/fa';
import { cartContext } from "../Context/CartContext";

function Header() {
  const cart = useContext(cartContext)
  const numofAllItems = cart.products;

  return (
    <div className={style.header_wrapper}>
        <div className={style.mobile_header}>
        <span>
          <FiMenu />
          </span>
        </div>
        <div className={style.header_logo}>
        <img src={logo} />
        </div>
        <div className={style.header_nav_links}>
          <span>
          <FiMenu />
          </span>
          <ul>
            <li><a className={style.active_link}>Home</a></li>
            <li><a>Products</a></li>
            <li><a>Categories</a></li>
            <li><a>About</a></li>
            <li><a>Contact Us</a></li>
          </ul>
        </div>
        <div className={style.search_cart}>
        <ul>
            <li><a>
              <BiSearch />
              </a></li>
            <li>
              <a>
                <FaShoppingCart />
              </a>
              <span>{numofAllItems.length ? numofAllItems.length :0}</span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Header