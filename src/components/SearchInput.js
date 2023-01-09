import React from 'react'
import style from './home.module.scss'
import {MdSearch} from 'react-icons/md'

function SearchInput() {
  return (
    <div className={style.search_input}>
        <input className='search_inp' placeholder='Search Here' type="text" /> 
        <span>
        <MdSearch />
        </span>
    </div>
  )
}

export default SearchInput