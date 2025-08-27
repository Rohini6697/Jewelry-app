import React from 'react'
import '../../styles/essential/SideBar.css'
// import { Link } from 'react-router-dom';
// import DoubleRangeSlider from './Filter';
// import RangeSlider from './Filter';
// import AllProducts from './Filter';
// import FilterSlider from './Filter';
// import Filter from './Filter'
import Filter from '../essential/Filter'

// import {Products} from './Filter'

const categories = [
  { value: 'allproducts', label: 'All Products'},
  { value: 'rings', label: 'Rings'},
  { value: 'necklaces',label : 'Necklaces'},
  { value: 'bracelets',label : 'Bracelets'},
  {value: 'isbestseller',label: 'Best Seller'}
  
]


const SideBar = ({ handleFilter,onPriceChange }) => {

  return (
    <div className='side-bar'>
        <h1>Home</h1>
        <div>
            <h2>Browsed by</h2>
            <hr/>
            <div className='links'>
                {/* <li><Link to = {'/allproducts'} className='sidebar-links'>All Products</Link></li>
                <li><Link to = {'/rings'} className='sidebar-links'>Rings</Link></li>
                <li><Link to = {'/earrings'} className='sidebar-links'>Earring</Link></li>
                <li><Link to = {'/necklaces'} className='sidebar-links'>Necklaces</Link></li>
                <li><Link to = {'/bracelets'} className='sidebar-links'>Bracelets</Link></li>
                <li><Link to = {'/newin'} className='sidebar-links'>New In</Link></li>
                <li><Link to = {'/bestseller'} className='sidebar-links'>Best Seller</Link></li> */}
                {
                  categories.map(cat=> <li><button onClick={()=>{
                  if(cat.value === 'allproducts')
                    handleFilter('category','')
                  else if(cat.value === 'isbestseller')
                    handleFilter('bestseller',true)
                  else
                    handleFilter('category', cat.value);
                  } 
                }
                  className='cat'>{cat.label}</button></li>)
                
                
                  
                }
              </div>
        </div>
        <div>
            <h2>Filter by</h2>
            <hr/>
            {/* <Products/> */}
            {/* <DoubleRangeSlider/> */}
            {/* <RangeSlider/> */}
            <Filter onFilterChange={onPriceChange} />
            
        </div>
      
    </div>
  )
}

export default SideBar
