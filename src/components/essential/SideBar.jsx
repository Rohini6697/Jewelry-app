import React from 'react'
import '../../styles/essential/SideBar.css'
import { Link } from 'react-router-dom';


const SideBar = () => {
  return (
    <div className='side-bar'>
        <h1>Home</h1>
        <div>
            <h2>Browsed by</h2>
            <hr/>
            <div className='links'>
                <li><Link to = {'/allproducts'} className='sidebar-links'>All Products</Link></li>
                <li><Link to = {'/rings'} className='sidebar-links'>Rings</Link></li>
                <li><Link to = {'/earrings'} className='sidebar-links'>Earring</Link></li>
                <li><Link to = {'/necklaces'} className='sidebar-links'>Necklaces</Link></li>
                <li><Link to = {'/bracelets'} className='sidebar-links'>Bracelets</Link></li>
                <li><Link to = {'/newin'} className='sidebar-links'>New In</Link></li>
                <li><Link to = {'/bestseller'} className='sidebar-links'>Best Seller</Link></li>
              </div>
        </div>
        <div>
            <h2>Filter by</h2>
            <hr/>
        </div>
      
    </div>
  )
}

export default SideBar
