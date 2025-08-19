import React from 'react'
import '../../styles/bestsellercomponent/BestSellerCards.css'
import { Link } from 'react-router-dom';


const BestSellerCards = (props) => {
    const {data} = props
  return (
    <Link to={`/productview/${data.idx}`} className="bestseller-card-link">
          <div className='bestseller-card'>
            <img src={data.image} alt={data.product} />
            <h3>{data.product}</h3>
            <h4>{data.price}</h4>
            {/* console.log("Product idx:", data.idx); */}
    
            
          </div>
      </Link>
  )
}

export default BestSellerCards
