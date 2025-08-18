import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/braceletscomponent/BraceletsCard.css'

const BraceletsCard = (props) => {
    const {data} = props;
    // console.log("Product idx:", data.idx);

  return (
    <Link to={`/productview/${data.idx}`} className="bracelets-card-link">
      <div className='bracelets-card'>
        <img src={data.image} alt={data.product} />
        <h3>{data.product}</h3>
        <h4>{data.price}</h4>
        {/* console.log("Product idx:", data.idx); */}

        
      </div>
    </Link>
  )
}

export default BraceletsCard
