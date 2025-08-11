import React from 'react'
import '../../styles/homecomponent/HomeMenuCard.css'

const HomeMenuCard = (props) => {
  const {data} =props
  return (
    
    <div className='home-cards'>
        <div>
            <img src = {data.image} />
            <h2>{data.title}</h2>
        </div>

      
    </div>
  )
}

export default HomeMenuCard
