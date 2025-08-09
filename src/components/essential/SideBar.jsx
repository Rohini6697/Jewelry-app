import React from 'react'
import '../../styles/essential/SideBar.css'
import { Link } from 'react-router-dom';


const SideBar = () => {
  return (
    <div className='side-bar'>
        <h2>Dennel</h2>
        <h3>Home</h3>
        <div>
            <h3>Browsed by</h3>
            <hr/>
            <div className='links'>
                <li><Link to = {'/allproducts'}>All Products</Link></li>
                <li><Link to = {'/rings'}>Rings</Link></li>
                <li><Link to = {'/earrings'}>Earring</Link></li>
                <li><Link to = {'/necklaces'}>Necklaces</Link></li>
                <li><Link to = {'/bracelets'}>Bracelets</Link></li>
                <li><Link to = {'/newin'}>New In</Link></li>
                <li><Link to = {'/bestseller'}>Best Seller</Link></li>
                </div>
        </div>
        <div>
            <h3>Filter by</h3>
            <hr/>
        </div>
      
    </div>
  )
}

export default SideBar
