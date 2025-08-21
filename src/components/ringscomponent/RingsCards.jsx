import React from 'react'
// import '../../data/Rings'
// import '../../styles/ringcomponent/RingCards.css'
import '../../styles/ringcomponent/RingsCards.css'
import { Link } from 'react-router-dom';


const RingsCards = (props) => {
    const {data} = props
  return (
    // <div className='cards'>
        <Link to={`/productview/${data.id}`} className="bracelets-card-link">
                  <div className='bracelets-card'>
                    <img src={data.image} alt={data.product} />
                    <h3>{data.product}</h3>
                    <h4>{data.price}</h4>
            
                    
                  </div>
                </Link>
      
    // </div>
  )
}

export default RingsCards
