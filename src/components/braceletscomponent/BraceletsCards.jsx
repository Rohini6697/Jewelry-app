import React from 'react'
import '../../styles/braceletscomponent/BraceletsCard.css'

const BraceletsCard = (props) => {
    const {data} = props;
  return (
    <div className='bracelets-card'>
      <img src={data.image}/>
      <h3>{data.product}</h3>
      <h4>{data.price}</h4>
    </div>
  )
}

export default BraceletsCard
