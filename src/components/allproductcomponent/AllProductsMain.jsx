import React from 'react'
import AllProductsCard from './AllProductsCard';
import { Allproducts } from '../../data/AllProducts';
// import { Allproducts } from '../../data/AllProducts';
import '../../styles/allproductcomponent/AllProductsMain.css'
import { FaSearch} from "react-icons/fa";


const AllProductsMain = (props) => {
    const {products} = props
  return (
    <div>
      <div>
        <FaSearch/>
        <input></input>
        
      </div>
      <div className='allproducts-main'>
        {
            products.map((item,idx) => <AllProductsCard data = {item} key = {idx}  />)
        }
      
      </div>
    </div>
  )
}

export default AllProductsMain
