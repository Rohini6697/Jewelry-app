import React from 'react'
import { Allproducts } from '../../data/AllProducts'
import BestSellerCards from './BestSellerCards'
// import '../../styles/bestsellercomponent/BestsellerMain.css'
import '../../styles/bestsellercomponent/BestSellerMain.css'
const BestSellerMain = () => {
    const bestseller = Allproducts.filter((item) => item.isbestseller)
  return (
    <div className='bestseller'>
      {
        bestseller.map((item,idx) => <BestSellerCards data = {item} key = {idx}/>)
      }
    </div>
  )
}

export default BestSellerMain
