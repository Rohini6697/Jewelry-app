import React from 'react'
import { Link } from 'react-router-dom';
import BestSellerCards from './BestSellerCards';
import {BestSellerData} from '../../data/BestSeller'
import '../../styles/homecomponent/BestSeller.css'

const BestSeller = () => {
  return (
    <div className='best-seller'>
        <div>
            <h1>Best Seller</h1>
            <h5><Link to = {'/shop'}>Shop All</Link></h5>
        </div>
        <div>
          {
            BestSellerData.map((item,idx) => <BestSellerCards data = {item} key = {idx}/>)
          }
        </div>
      
    </div>
  )
}

export default BestSeller
