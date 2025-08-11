
import '../../styles/homecomponent/Products.css';
import HomeMenu from './HomeMenu';
import PrevNext from './PrevNext';
import TextLoop from './TextLoop';

import React from 'react'

const Products = () => {
  return (
    <div className='stack'>
      <div className='rings-side'>
         <h1>Rings</h1>
        <div className='image-category'>
          <img src='https://static.wixstatic.com/media/84770f_6e52e3cd706f4364a17191a79116b6b8~mv2.jpeg/v1/fill/w_323,h_429,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_6e52e3cd706f4364a17191a79116b6b8~mv2.jpeg'/>
        </div>
      </div>
      <div className='earrings-side'>
        <h1>Earrings</h1>
      <div className='image-category'>
          <img src='https://static.wixstatic.com/media/84770f_bde40e4cd6f148449eda18baba3fddde~mv2.jpeg/v1/fill/w_323,h_429,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_bde40e4cd6f148449eda18baba3fddde~mv2.jpeg'/>
        </div>
      </div>
      <div className='necklaces-side'>
        <h1>Necklaces</h1>
      <div className='image-category'>
          <img src='https://static.wixstatic.com/media/84770f_91e1ebf6735e46828ec58becb438c0b4~mv2.jpeg/v1/fill/w_323,h_429,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_91e1ebf6735e46828ec58becb438c0b4~mv2.jpeg'/>
      </div>
      </div>
      <div className='bracelates-side'>
        <h1>Bracelates</h1>
      <div className='image-category'>
        <img src='https://static.wixstatic.com/media/84770f_25f6cbf435e54f90a473ac29d8e31e30~mv2.jpeg/v1/fill/w_323,h_429,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_25f6cbf435e54f90a473ac29d8e31e30~mv2.jpeg'/>
      </div>
    </div>
    <div className='products'>
      <div>
        <TextLoop className='text'/>
        <HomeMenu/>
      </div>
    </div>
    <div className='insta'>
      <div className='instagram'>
        <h1>Follow us on Instagram</h1>
        <h4>@dennel #dennelgold</h4>
      </div>
      <div>
        <PrevNext/>
      </div>
    </div>
    {/* <div><h2>Rings3</h2></div> */}
      
    </div>
  )
}

export default Products
