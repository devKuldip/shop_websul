import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import style from"./home.module.scss";
import client from "assets/images/man.jpg"
import { FaQuoteLeft } from 'react-icons/fa';

function TestimmonialSectioin() {
  return (
    <div className={style.test_main_wrap}>
        <div className={style.test_title_ds}>
            <h4>Testimonials</h4>
            <p>Over 15,000 happy customers.</p>
        </div>
        <div className={style.test_content_ds}>
        <div className={style.review_profile_pic}>
            <span>
            <FaQuoteLeft />
            </span>
            <img src={client} />
            </div>
        <div className={style.review_message}>
            <p>
                <q>
            My experience with Mark is a complete
            sucess, from customer service, wide range of
            products, clean store, purchasing experience, the
            newsletter.Thank you
                </q>
                </p>
            <div className={style.author_name}>
                <h5>Leona Paul</h5>
                <p>CEO of Floatcom</p>
            </div>
        </div>
        <div className={style.scroll_action_btns}>
            <a
                className={`${style.btn_left}`}>
                    <BsArrowLeft />
                </a>
            <a
                className={`${style.btn_right}`}>
                    <BsArrowRight />
                </a>
        </div>
        </div>
    </div>
  )
}

export default TestimmonialSectioin