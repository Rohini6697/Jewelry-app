import React, { useState } from 'react'
// import AllProducts from '../../data/AllProducts';
import { Allproducts } from '../../data/AllProducts';
import '../../styles/Pages/Cart.css'

const Cart = ({cart,setCart}) => {
    const [price,setPrice] = useState(0);
    const addToCart = (item) => {
        setCart([...cart,item])
    }
  return (
    <article className='cart-main'>
        {
            cart?.map((item) => (
                <div key={item.id} className='cart-card'>
                    <div>
                        <img src={item.image} alt={item.product}/>
                        <h4>{item.product}</h4>
                    </div>
                    <div>
                        <button>+</button>
                        <span>1</span>
                        <button>-</button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button>Remove</button>
                    </div>
                </div>
            ))}
        <div>
            <span>Total Price of your cart :</span>
            <span>Rs/-{price}</span>
        </div>
      
    </article>
  )
}

export default Cart