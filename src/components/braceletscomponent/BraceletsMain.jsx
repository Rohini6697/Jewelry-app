import React from 'react'
import BraceletsCard from './BraceletsCards'
import { Bracelets } from '../../data/Bracelets'
import '../../styles/braceletscomponent/BraceletsMain.css'

const BraceletsMain = () => {
  return (
    <div className='bracelets-main'>
        {
            Bracelets.map((item,idx) => <BraceletsCard data = {item} key = {idx}/>)
        }
      
    </div>
  )
}

export default BraceletsMain
