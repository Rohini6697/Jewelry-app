import React from 'react'
import BraceletsCard from './BraceletsCards'
// import { Bracelets } from '../../data/Bracelets'
import '../../styles/braceletscomponent/BraceletsMain.css'
import { Allproducts } from '../../data/AllProducts'

const BraceletsMain = () => {
  return (
    <div className='bracelets-main'>
        {
            Allproducts.filter(item =>item.category.toLowerCase() === 'bracelets').map((item,idx) => <BraceletsCard data = {item} key = {idx}/>)
        }
      
    </div>
  )
}

export default BraceletsMain
