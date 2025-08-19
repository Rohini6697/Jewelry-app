
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Allproducts } from '../../data/AllProducts';
// import '../../styles/searchcomponent/Input.css'
import { FaSearch,FaTimes} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import '../../styles/Pages/Search.css'

// import { FaSearch,FaTimes} from "react-icons/fa";




function ShopAll() {

  // const Input = () => {
      const navigate = useNavigate();
      const goback = () => {
          navigate(-1);
      }
  // }

  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(Allproducts);

  useEffect(() => {
    const filtered = Allproducts.filter(item =>
      item.product.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [query]);

  return (
    <div className='product-main'>
      <div className='input-container'>
        <FaSearch size={25} strokeWidth={1} className='search-icon'/>
        <input
        className='input-bar'
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <FaTimes size={25} className='cross-icon' onClick={goback}/>
      
      </div>
      <hr className='line'/>
      <h2 className='product-heading'>Products</h2>
      <div className="products">
        {filteredItems.map((item, index) => (
          <Link to={`/productview/${item.idx}`} className="product-card-link">
                  <div className='bracelets-card'>
                    <img src={item.image} alt={item.product} />
                    <h3>{item.product}</h3>
                    <h4>{item.price}</h4>
                    {/* console.log("Product idx:", data.idx); */}
            
                    
                  </div>
                </Link>
        ))}
      </div>
    </div>
  );
}

export default ShopAll;
