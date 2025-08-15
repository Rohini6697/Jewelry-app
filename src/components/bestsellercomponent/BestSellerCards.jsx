import React from 'react'
import '../../styles/bestsellercomponent/BestSellerCards.css'

const BestSellerCards = (props) => {
    const {data} = props
  return (
    <div className='bestseller-card'>
        <img src={data.image}/>
        <h3>{data.product}</h3>
        <h4>{data.price}</h4>
      
    </div>
  )
}

export default BestSellerCards
