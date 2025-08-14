import React from 'react'
import '../../styles/allproductcomponent/AllProductsCard.css'

const AllProductsCard = (props) => {
    const {data} = props
  return (
    <div className='allproducts-card'>
        <img src={data.image}/>
        <h3>{data.product}</h3>
        <h4>{data.price}</h4>
      
    </div>
  )
}

export default AllProductsCard
