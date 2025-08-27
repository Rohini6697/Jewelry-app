import React from 'react'
import AllProductsCard from './AllProductsCard';
import { Allproducts } from '../../data/AllProducts';
// import { Allproducts } from '../../data/AllProducts';
import '../../styles/allproductcomponent/AllProductsMain.css'
import { FaSearch} from "react-icons/fa";
import { useState } from 'react';


const AllProductsMain = (props) => {
    const {products} = props

    const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = products.filter((item) =>
    item.product.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      <div className='search-center'>
        <div className='search-products'>
        <FaSearch size={25}/>
        <input
        type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}>

          </input>
        
        </div>
      </div>
      <div className='allproducts-main'>
  {
    filteredProducts.map((item, idx) => (
      <AllProductsCard data={item} key={idx} />
    ))
  }
</div>

    </div>
  )
}

export default AllProductsMain
