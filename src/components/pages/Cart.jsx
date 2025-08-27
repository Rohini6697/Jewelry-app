import React, { useEffect, useState } from 'react'
// import AllProducts from '../../data/AllProducts';
// import { Allproducts } from '../../data/AllProducts';
import '../../styles/Pages/Cart.css'



const Cart = ({cart,setCart,handleChange}) => {
    const [price,setPrice] = useState(0);

    // const [count,setCount] = useState(0)

    // function increase() {
    //     setCount(count+1);
    // }
    // function decrease() {
    //     setCount(count-1)
    // }
    
    // const addToCart = (item) => {
    //     setCart([...cart,item])

        
        
    // }

   const handlePrice = () => {
  const ans = cart.reduce((total, item) => total + (Number(item.amount) || 0) * (Number(item.price) || 0), 0);
  setPrice(ans);
};


    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id!==id);
        setCart(arr);
        // handlePrice();
    }
    useEffect(()=> {
        handlePrice()
    },[cart])

    


  return (
    <article className='cart-main'>
        {
            cart?.map((item) => (
                <div key={item.id} className='cart-card'>
                    <div className='cart-image'>
                        <img src={item.image} alt={item.product}/>
                        <h4>{item.product}</h4>
                    </div>
                    <div className='counter-shop'>
                        <button onClick={()=>handleChange(item,'+')}>+</button>
                        <span className='counter-shop-span'>{item.amount}</span>
                        <button onClick={()=>handleChange(item,'-')}>-</button>
                    </div>
                    <div className='price-remove'>
                        <span>${item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
        <div>
            <span className='total'>Total Price of your cart :</span>
            <span className='total-amount'>${price}</span>
        </div>
      
    </article>
  )
}

export default Cart