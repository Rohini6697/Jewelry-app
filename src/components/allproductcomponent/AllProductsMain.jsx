import React from 'react'
import AllProductsCard from './AllProductsCard';
import { Allproducts } from '../../data/AllProducts';
// import { Allproducts } from '../../data/AllProducts';
import '../../styles/allproductcomponent/AllProductsMain.css'

const AllProductsMain = (props) => {
    const {products} = props
  return (
    <div className='allproducts-main'>
        {
            products.map((item,idx) => <AllProductsCard data = {item} key = {idx}/>)
        }
      
    </div>
  )
}

export default AllProductsMain
