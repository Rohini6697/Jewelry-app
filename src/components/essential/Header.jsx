import { Link } from 'react-router-dom';
import '../../styles/essential/Header.css'




const Header = () => {
    return (
        <nav>
            <div className='navigation-bar-container'>
                <h1>Dennel</h1>
                <ul>
                    <li><Link to = {'/'}>Home</Link></li>
                    <div className='dropdown'>
                        <li><Link to = {'/allproducts'}>Shop</Link></li>
                        <div className='dropdown-menu'>
                            <li><Link to = {'/rings'}>Rings</Link></li>
                            <li><Link to = {'/earrings'}>Earring</Link></li>
                            <li><Link to = {'/necklaces'}>Necklaces</Link></li>
                            <li><Link to = {'/bracelets'}>Bracelets</Link></li>
                            <li><Link to = {'/newin'}>New In</Link></li>
                        </div>
                    </div>
                    <li><Link to = {'/ourstory'}>Our Story</Link></li>
                    <li><Link to = {'/giftcard'}>Gift Card</Link></li>
                    <li><Link to = {'/contact'}>Contact</Link></li>
                    
                    
                </ul>
                <ul>
                    {/* <i class="fa-solid fa-circle-user" style="color: #080808;"></i> */}
                    <li><Link to = {'/login'}>Login</Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default Header