import React from 'react'
import AllProductsCard from './AllProductsCard';
import { Allproducts } from '../../data/AllProducts';
// import { Allproducts } from '../../data/AllProducts';
import '../../styles/allproductcomponent/AllProductsMain.css'

const AllProductsMain = (props) => {
    const {data} = props
  return (
    <div className='allproducts-main'>
        {
            Allproducts.map((item,idx) => <AllProductsCard data = {item} key = {idx}/>)
        }
      
    </div>
  )
}

export default AllProductsMain
