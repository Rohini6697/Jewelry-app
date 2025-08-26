import { Link } from 'react-router-dom';
import '../../styles/essential/Header.css'
import { FaUserCircle, FaSearch, FaRegHeart} from "react-icons/fa";
// import { CiLock } from "react-icons/ci"; 
// import { BiLockAlt } from "react-icons/bi";
// import { ShoppingBag } from "lucide-react";
import { BsBag } from "react-icons/bs";
import { useState } from 'react';




const Header = ({size,setShow}) => {

    // const [show,setShow] = useState(true);
    

    return (
        <nav>
            <div className='navigation-bar-container'>
                <Link to = {'/'} className='links'><h1>Dennel</h1></Link>
                <ul>
                    
                    <div className='dropdown'>
                        <li><Link to = {'/allproducts'} className='links'>Shop</Link></li>
                        <div className='dropdown-menu'>
                            <li><Link to = {'/rings'} className='links'>Rings</Link></li>
                            <li><Link to = {'/earrings'} className='links'>Earring</Link></li>
                            <li><Link to = {'/necklaces'} className='links'>Necklaces</Link></li>
                            <li><Link to = {'/bracelets'} className='links'>Bracelets</Link></li>
                            <li><Link to = {'/newin'} className='links'>New In</Link></li>
                        </div>
                    </div>
                    <li><Link to = {'/ourstory'} className='links'>Our Story</Link></li>
                    <li><Link to = {'/giftcard'} className='links'>Gift Card</Link></li>
                    <li><Link to = {'/contact'} className='links'>Contact</Link></li>
                    
                    
                </ul>
                <ul>
                    <li><Link to = {'/user'} className='links'><FaUserCircle size={25} strokeWidth={1}/></Link></li>
                    
                    <li><Link to = {'/login'} className='links'>Login</Link></li>
                    
                    <Link to = {'/search'} className='search'><FaSearch size={25} strokeWidth={1}/></Link>
                    <Link to = {'/wishlist'} ><FaRegHeart size={25} strokeWidth={1}/> </Link>
                    <div className='cart-count'onClick={() =>setShow(false)}>
                        <Link to = {'/cart'}><BsBag size={28} /> </Link>
                        <span className='count'>{size}</span>
                    </div>
                </ul>
            </div>
        </nav>
    );
}
export default Header