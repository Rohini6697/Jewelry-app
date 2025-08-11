import React from 'react'
// import '../../data/Rings'
// import '../../styles/ringcomponent/RingCards.css'
import '../../styles/ringcomponent/RingsCards.css'

const RingsCards = (props) => {
    const {data} = props
  return (
    // <div className='cards'>
        <div className='ring-card'>
            <img src={data.image}/>
            <h3>{data.productname}</h3>
            <h5>{data.price}</h5>
        </div>
      
    // </div>
  )
}

export default RingsCards
