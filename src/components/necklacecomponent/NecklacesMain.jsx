import React from 'react'
// import { Necklaces } from '../../data/Necklaces'
import '../../styles/necklacecomponent/NecklacesMain.css'
import NecklacesCard from './NecklacesCard'
import { Allproducts } from '../../data/AllProducts'

const NecklacesMain = () => {
  return (
    <div className='necklaces-main'>
        {
            Allproducts.filter(item => item.category === 'necklaces').map((item,idx) => <NecklacesCard data = {item} key = {idx} />)
            
        }
      
    </div>
  )
}

export default NecklacesMain
