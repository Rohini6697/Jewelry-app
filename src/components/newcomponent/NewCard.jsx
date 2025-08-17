import React from 'react'
import '../../styles/newcomponent/NewCard.css'

const NewCard = (props) => {
  const {data} = props
  return (
    <div className='new-card'>
      <img src={data.image}/>
      <h3>{data.product}</h3>
      <h4>{data.price}</h4>
    </div>
  )
}

export default NewCard
