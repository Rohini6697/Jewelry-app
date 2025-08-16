import React from 'react'
import '../../styles/homecomponent/ShopAll.css'
import { Link } from 'react-router-dom'

const ShopAll = () => {
  return (
    <div className='shop-all'>
      <div>
        <h2><Link to = {'/allproducts'} onClick={console.log('hey')}>Shop All</Link></h2>
        {/* <li><Link to = {'/allproducts'} className='sidebar-links'>All Products</Link></li> */}
        
      </div>
    </div>
  )
}

export default ShopAll
