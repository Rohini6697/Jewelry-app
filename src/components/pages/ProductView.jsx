import React from 'react';
import { useParams } from 'react-router-dom';
import { Bracelets } from '../../data/Bracelets';

const ProductView = () => {
  const { idx } = useParams();  // read idx from URL
  const product = Bracelets[idx]; // get product from your array

  if (!product) return <h1>Product not found!</h1>;

  return (
    <div>
      <h1>{product.product}</h1>
      <img src={product.image} alt={product.product} />
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductView;
