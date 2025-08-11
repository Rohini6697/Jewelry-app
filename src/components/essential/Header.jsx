import { Link } from 'react-router-dom';
import '../../styles/essential/Header.css'
import { FaUserCircle, FaSearch, FaRegHeart} from "react-icons/fa";
import { CiLock } from "react-icons/ci"; 
import { BiLockAlt } from "react-icons/bi";



const Header = () => {
    return (
        <nav>
            <div className='navigation-bar-container'>
                <h1>Dennel</h1>
                <ul>
                    <li><Link to = {'/'} className='links'>Home</Link></li>
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
                    <FaUserCircle size={25} strokeWidth={1}/>
                    <li><Link to = {'/login'} className='links'>Login</Link></li>
                    
                    <FaSearch size={25} strokeWidth={1}/> 
                    <FaRegHeart size={25} strokeWidth={1}/> 
                    <BiLockAlt size={25} strokeWidth={1}/> 
                </ul>
            </div>
        </nav>
    );
}
export default Header