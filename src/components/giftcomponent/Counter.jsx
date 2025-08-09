import React, { useState } from 'react'
import '../../styles/giftcomponent/Counter.css'

const Counter = () => {
    const [Count,setCount] = useState(0)
    const increase = () => {
        setCount(Count+1);
    }
    const decrease = () => {
        setCount(Count-1);
    }
    return (
        <div className='counts'>
            <div onClick={increase}>+</div>
            <div>{Count}</div>
            <div onClick={decrease}>-</div>
        </div>
    );
}

export default Counter
