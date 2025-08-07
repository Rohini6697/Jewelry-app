import { Link } from 'react-router-dom';
import '../../styles/essential/Header.css'




const Header = () => {
    return (
        <nav>
            <div className='navigation-bar-container'>
                <h1>Dennel</h1>
                <ul>
                    <li><Link to = {'/'}>Home</Link></li>
                    <li><Link to = {'/shop'}>Shop</Link></li>
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