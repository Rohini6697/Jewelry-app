import React from 'react'
import '../../styles/earringcomponent/EarringCard.css'

const EarringsCard = (props) => {
  const {data} = props;
  if (!data) return null
  return (
    <div className='cards'>
        <img src={data?.image || 'fallback.jpg'} alt={data?.product || 'earring'} />
        <h3>{data.product}</h3>
        <h4>{data.price}</h4>

      
    </div>
  )
}

export default EarringsCard
