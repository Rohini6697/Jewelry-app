import React from 'react'
import '../../styles/necklacecomponent/NecklacesCard.css';
const NecklacesCard = (props) => {
    const {data} = props
  return (
    <div className='necklaces-card'>
        <img src={data.image}/>
        <h3>{data.product}</h3>
        <h4>{data.price}</h4>
      
    </div>
  )
}

export default NecklacesCard
