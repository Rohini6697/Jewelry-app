import React from 'react'
import { Link } from 'react-router-dom';

import '../../styles/allproductcomponent/AllProductsCard.css'

const AllProductsCard = (props) => {
    const {data} = props
  return (
    <Link to={`/productview/${data.id}`} className="allproducts-card-link">
      <div className='allproducts-card'>
        <img src={data.image} alt={data.product} />
        <h3>{data.product}</h3>
        <h4>{data.price}</h4>
        {/* console.log("Product idx:", data.idx); */}

        
      </div>
    </Link>
  )
}

export default AllProductsCard
