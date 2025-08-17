import React, { useState } from "react";
import {Allproducts} from '../../data/AllProducts'

const FilterSlider = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  // filter products based on price
  const filteredProducts = Allproducts.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Products</h1>

      {/* Range Slider Control */}
      <div style={{ margin: "20px 0" }}>
        <label>Price Range: </label>
        <input
          type="range"
          min="0"
          max="2000"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <input
          type="range"
          min="0"
          max="2000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <p>
          Showing products between <b>₹{minPrice}</b> and <b>₹{maxPrice}</b>
        </p>
      </div>

      {/* Product List */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                width: "200px",
              }}
            >
              <img
                src={product.image}
                alt={product.product}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <h3>{product.product}</h3>
              <p>₹{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found in this range.</p>
        )}
      </div>
    </div>
  );
};

export default FilterSlider;
