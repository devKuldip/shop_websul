import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import style from './home.module.scss'
import SearchInput from './SearchInput'
function CategoryList({category_list}) {
  return (
    <div className={style.cat_list_wrap}>
        <div className={style.search_box_mobile}>
        <SearchInput />
        <div className={`ms-3 ${style.mobile_header}`}>
        <span>
          <FiMenu />
          </span>
        </div>
        </div>
        <div className={style.cat_listing}>
            <ul>
                {category_list?.map((item,index) => (
                <li key={index}>
                    {item}
                </li>
))}
            </ul>
        </div>
        <div className={style.action_btn_explore}>
        <button className='primary_btn'>
        all categories
            <BsArrowRight />
        </button>

        </div>
    </div>

  )
}

export default CategoryList