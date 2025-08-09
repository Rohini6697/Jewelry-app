import React from 'react'
import '../../styles/homecomponent/BestSellerCards.css'

const BestSellerCards = (props) => {
    const {data} = props
  return (
    <div>
        <div className='bestseller-cards'>
            <img src = {data.image}/>
            <h2>{data.product}</h2>
            <p>{data.price}</p>
        </div>
      
    </div>
  )
}

export default BestSellerCards
