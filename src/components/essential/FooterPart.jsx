import React from 'react'
import '../../styles/essential/FooterPart.css'
import { Link } from 'react-router-dom';


const FooterPart = () => {
  return (
    <div className='footer'>
        <div>
            <div>
                <ul>
                    <li><Link to = {'/'}>Home</Link></li>
                    <li><Link to = {'/shop'}>Shop</Link></li>
                    <li><Link to = {'/ourstory'}>Our Story</Link></li>
                    <li><Link to = {'/giftcard'}>Gift Card</Link></li>
                    <li><Link to = {'/contact'}>Contact</Link></li>
                    
                    
                </ul>
            </div>
            <div>
                <ul>
                    <li>FAQ</li>
                    <li>Terms and Condition</li>
                    <li>Shipping Policy</li>
                    <li>Refund Policy</li>
                    <li>Privacy Policy</li>
                    <li>Accessibility Statement</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>500 Terry Francine</li>
                    <li>San Francisco, CA 94158</li>
                    <li>info@mysite.com</li>
                    <li>123-456-7890</li>
                </ul>
            </div>
            <div>
                <form>
                    <h3>Get on the list</h3>
                    <p>New arrivals, exclusive sales and much more</p>
                    <label>Email*</label>
                    <input type='email'></input>
                    <div>
                        <input type='checkbox'></input>
                        <label>Yes,subscribe me to your newsletter.</label>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
        <div className='down'>
            <h1>Dennel</h1>
            <div>
                <ul>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Pinterest</li>
                </ul>
                <p>© 2035 by Dennel.  Built on Wix Studio</p>
            </div>
        </div>
      
    </div>
  )
}

export default FooterPart
