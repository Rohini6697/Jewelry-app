import React from 'react'
import { Earring } from '../../data/Earrings'
import EarringsCard from './EarringsCard'
import '../../styles/earringcomponent/EarringMain.css'
// import EarringsCard from './EarringsCard'

const EarringsMain = () => {
  return (
    <div className='earcard-main'>
        {
            Earring.filter(Boolean).map((item,idx) => <EarringsCard data={item} key={idx}/>)
        }
      
    </div>
  )
}

export default EarringsMain
