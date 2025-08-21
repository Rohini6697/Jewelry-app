import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { Bracelets } from '../../data/Bracelets';
import {Allproducts} from '../../data/AllProducts'
import '../../styles/Pages/ProductView.css'
import Counter from '../giftcomponent/Counter';
import { FaPlus, FaMinus } from "react-icons/fa";
import {FaRegHeart, FaHeart } from "react-icons/fa";
import { FaWhatsapp, FaFacebook, FaPinterest, FaXTwitter } from "react-icons/fa6";


const ProductView = () => {
  const { id } = useParams(); 
  const product =  Allproducts.find((item)=> item.id.toString() === id.toString())

  useEffect(()=> {
    console.log(id, 'idddddddddd')
  }, [id])
  const [wishlisted,setWishlisted] = useState(false)
  const [info,setInfo] = useState(false)
  const [refund,setRefund] = useState(false)
  const [shipping,setShipping] = useState(false)

  if (!product) return <h1>Product not found!</h1>;
  // const show = () => {
  //   document.getElementById('info').style.display = 'none';
  // }


  return (
    <div className='add-product-view'>
      <div className='first'>
        <h1>hi</h1>
      </div>
      
      <div className='second'>
        
        <img src={product.image} alt={product.product} className='product-view-image' />
        
      </div>
      <div className='third'>
        <h1>{product.product}</h1>
        <h3>Price: {product.price}</h3>
        <p>{product.description}</p>
        <p>Quantity</p>
        <Counter className = 'view-counter'/>
        <div className='view-button'>
          <button className='view-button1'>Add To Cart</button>
          <button className='view-button2'>Buy Now</button>
          <button onClick={() => setWishlisted(!wishlisted)} className='view-button3'>Add to Wishlist{wishlisted ? <FaHeart /> : <FaRegHeart />}</button>
        </div>
        <div className='view-info'>
          <div>
            <div >
              
              <button className='information-products' onClick={() => setInfo(!info)}><h3>Product info</h3>{info ? <FaPlus /> : <FaMinus />}</button>
            </div>
            {info && <span id='info' className='desc-info'>{product.info}</span>}
          </div>
          <div>
            <div >
              
              <button className='refund' onClick={() => setRefund(!refund)}><h3>Return & refund policy</h3>{refund ? <FaPlus /> : <FaMinus />}</button>
            </div>
            {refund && <span id='info' className='desc-info'>{product.returnPolicy}</span>}
          </div>
          <div>
            <div >
              
              <button className='shipping' onClick={() => setShipping(!shipping)}><h3>Shipping info</h3> {shipping ? <FaPlus /> : <FaMinus />}</button>
            </div>
            {shipping && <span id='info' className='desc-info'>{product.shippingPolicy}</span>}
          </div>
          <div className='social-icons'>
            <FaWhatsapp />
            <FaFacebook />
            <FaPinterest />
            <FaXTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
