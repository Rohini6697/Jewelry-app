import React from 'react'
import RingsCards from './RingsCards'
// import { Rings } from '../../data/Rings'
import '../../styles/ringcomponent/RingMain.css'
import { Allproducts } from '../../data/AllProducts'
// import { Earring } from '../../data/Earrings'

const RingMain = () => {
  return (
    <div>
      <div className='main-cards'>      
        {
          Allproducts.filter(item => item.category === 'rings').map((item,idx) => <RingsCards data = {item} key = {idx}/>)
        }
      </div>  
    </div>
  )
}

export default RingMain
