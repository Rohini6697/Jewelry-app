import React from 'react'
import '../../styles/newcomponent/NewCard.css'
import { Link } from 'react-router-dom';


const NewCard = (props) => {
  const {data} = props
  return (
    <Link to={`/productview/${data.idx}`} className="new-card-link">
      <div className='new-card'>
        <img src={data.image} alt={data.product} />
        <h3>{data.product}</h3>
        <h4>{data.price}</h4>
        {/* console.log("Product idx:", data.idx); */}

        
      </div>
    </Link>
  )
}

export default NewCard
