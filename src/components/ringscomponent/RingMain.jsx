import React from 'react'
import RingsCards from './RingsCards'
import { Rings } from '../../data/Rings'
import '../../styles/ringcomponent/RingMain.css'
// import { Earring } from '../../data/Earrings'

const RingMain = () => {
  return (
    <div>
      <div className='main-cards'>      
        {
          Rings.map((item,idx) => <RingsCards data = {item} key = {idx}/>)
        }
      </div>  
    </div>
  )
}

export default RingMain
