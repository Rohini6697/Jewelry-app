import React, { useState } from 'react'
import AllProducts from '../../data/AllProducts';

const Cart = ({cart,setCart}) => {
    const [price,setPrice] = useState(0);
  return (
    <article>
        {
            cart?.map((item) => (
    <div key={item.id}>
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
))

        }
        <div>
            <span>Total Price of your cart :</span>
        <span>Rs/-{price}</span>
        </div>
      
    </article>
  )
}

export default Cart
