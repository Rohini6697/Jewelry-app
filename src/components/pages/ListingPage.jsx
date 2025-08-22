import React, { useEffect, useState } from 'react'
import AllProducts from './AllProducts';



const options = [
    {value : 'all', label : 'All Products'},
    {value : 'rings', label : 'Rings'},
    {value : 'earrings', label : 'Earrings'},
    {value : 'necklaces', label : 'Necklaces'},
    {value : 'bracelets', label : 'Bracelets'},
    {value : 'newin', label : 'New In'},
    {value : 'best', label : 'Best Seller'},
    {value : 'lowtohigh',label : 'Price (low to high)'},
    {value : 'hightolow',label : 'Price (high to low'}
]


const ListingPage = () => {
    const [sortType,setSortType] = useState('all');
    const [query,setQuery] = useState('')
    const [dataList,setDataList] = useState(products) 

    useEffect(() => {
        let filtered = [...AllProducts]
   

    if(query){
        filtered = filtered.filter(item => item.product.toLowerCase().includes(query.toLowerCase()))
    }


    if(sortType === 'best'){
        filtered = filtered.filter(item => item.isbestseller === true)
    }
    else if (sortType === 'rings') {
        filtered = filtered.filter(item => item.category === 'rings')

    }
    else if (sortType === 'earrings') {
        filtered = filtered.filter(item => item.category === 'earrings')
    }
    else if (sortType === 'necklaces') {
        filtered = filtered.filter(item => item.category === 'necklaces')
    }
    else if (sortType === 'bracelets') {
        filtered = filtered.filter(item => item.category === 'bracelets')
    }
    else if ( sortType === 'lowtohigh') {
        filtered = filtered.sort((a,b) => a.price - b.price)
    }
    else if ( sortType === 'hightolow') {
        filtered = filtered.sort((a,b) => b.price - a.price)
    }





    setDataList(filtered)
     },[query,sortType])
    const clearSearch =setQuery('')



  return (
    <div>
      
    </div>
  )
}

export default ListingPage
