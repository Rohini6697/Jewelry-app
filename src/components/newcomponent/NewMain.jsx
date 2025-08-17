import React from 'react'
import '../../styles/newcomponent/NewMain.css'
import { Allproducts } from '../../data/AllProducts'
import NewCard from './NewCard'

const NewMain = () => {
    const today = new Date();

    const newProducts = Allproducts.filter((item) => {
        if (!item.addedDate) return false; // safety
        const productDate = new Date(item.addedDate);
        const diffInDays = (today - productDate) / (1000 * 60 * 60 * 24);
        return diffInDays <= 30;
    });
    return (
        <div className='new-main'>
            {
                newProducts.map((item,idx) => <NewCard data = {item} key = {idx}/>)
            }
        </div>
  )
}

export default NewMain
