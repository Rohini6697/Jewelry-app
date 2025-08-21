import React from 'react'
import '../../styles/earringcomponent/EarringCard.css'
import { Link } from 'react-router-dom';


const EarringsCard = (props) => {
  const {data} = props;
  if (!data) return null
  return (
    <Link to={`/productview/${data.id}`} className="earring-card-link">
      <div className='ear-card'>
        <img src={data.image} alt={data.product} />
        <h3>{data.product}</h3>
        <h4>{data.price}</h4>
        {/* console.log("Product idx:", data.idx); */}

        
      </div>
    </Link>
  )
}

export default EarringsCard
