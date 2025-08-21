import React from 'react'
import '../../styles/necklacecomponent/NecklacesCard.css';
import { Link } from 'react-router-dom';

const NecklacesCard = (props) => {
    const {data} = props
  return (
    <Link to={`/productview/${data.id}`} className="Necklace-card-link">
          <div className='necklaces-card'>
            <img src={data.image} alt={data.product} />
            <h3>{data.product}</h3>
            <h4>{data.price}</h4>
            {/* console.log("Product idx:", data.idx); */}
    
            
          </div>
        </Link>
  )
}

export default NecklacesCard
