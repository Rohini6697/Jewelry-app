import React from 'react'
import AllProductsCard from './AllProductsCard';
import { Allproducts } from '../../data/AllProducts';
// import { Allproducts } from '../../data/AllProducts';
import '../../styles/allproductcomponent/AllProductsMain.css'
import { FaSearch} from "react-icons/fa";
import { useState ,useEffect} from 'react';
// import Filter from '../essential/Filter';
import Filter from '../essential/Filter'


const AllProductsMain = (props) => {
    const {products} = props

    const [searchTerm, setSearchTerm] = useState("");
    // const [priceRange, setPriceRange] = useState([0, 300]); // ✅ hold price filter
const [filteredProducts, setFilteredProducts] = useState(products);

  // Update filteredProducts whenever searchTerm or priceRange changes
  useEffect(() => {
  const filtered = products.filter((item) => {
    
    const matchesSearch = item.product.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;  // <--- MUST RETURN
  });
  setFilteredProducts(filtered);
}, [searchTerm, products]);

  const handleFilterChange = (range) => {
    // setPriceRange(range);
  };

  return (
    <div>
      <div className='search-center'>
        <div className='search-products'>
        <FaSearch size={25}/>
        <input
        type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}>

          </input>
        
        </div>
      </div>
      <div className='allproducts-main'>
        
  {
    filteredProducts.map((item, idx) => (
      <AllProductsCard data={item} key={idx} />
    ))
  }
</div>

    </div>
  )
}

export default AllProductsMain
