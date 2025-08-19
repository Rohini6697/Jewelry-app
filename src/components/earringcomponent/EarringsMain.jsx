import React from 'react'
// import { Earring } from '../../data/Earrings'
import EarringsCard from './EarringsCard'
import '../../styles/earringcomponent/EarringMain.css'
import { Allproducts } from '../../data/AllProducts'
// import EarringsCard from './EarringsCard'

const EarringsMain = () => {
  return (
    <div className='earcard-main'>
        {
            Allproducts.filter(item => item.category === 'earrings').map((item,idx) => <EarringsCard data={item} key={idx}/>)
        }
      
    </div>
  )
}

export default EarringsMain
