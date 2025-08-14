import React from 'react'
import { Necklaces } from '../../data/Necklaces'
import '../../styles/necklacecomponent/NecklacesMain.css'
import NecklacesCard from './NecklacesCard'

const NecklacesMain = () => {
  return (
    <div className='necklaces-main'>
        {
            Necklaces.map((item,idx) => <NecklacesCard data = {item} key = {idx} />)
            
        }
      
    </div>
  )
}

export default NecklacesMain
