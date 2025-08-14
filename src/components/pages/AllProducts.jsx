import React from 'react'
import SideBar from '../essential/SideBar'
import AllProductsMain from '../allproductcomponent/AllProductsMain'
import '../../styles/Pages/AllProducts.css'

const AllProducts = () => {
  return (
    <div className='allproducts'>
      <SideBar/>
      <AllProductsMain/>
      
    </div>
  )
}

export default AllProducts
