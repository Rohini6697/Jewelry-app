import React, { useEffect, useState } from 'react'
import SideBar from '../essential/SideBar'
import AllProductsMain from '../allproductcomponent/AllProductsMain'
import '../../styles/Pages/AllProducts.css'
import { Allproducts } from '../../data/AllProducts'

const AllProducts = ({handleClick}) => {

  const [filterOptions, setFilterOptions] = useState({
    category: '',
    price: '',
    bestseller: false
    // addedDate: false
  })

  const [products, setProducts] = useState(Allproducts)

  /**
   * 
   * @param {String} type - type of filter 
   * @param {String} value - value for the type 
   */
  // const handleFilter = (type, value) => {
    // setFilterOptions(prev=> ({ ...prev, [type]: value}))
  // }


  const handleFilter = (type, value) => {
  if (type === 'category') {
    setFilterOptions(prev => ({
      ...prev,
      category: value,
      bestseller: false  
    }));
  } else if (type === 'bestseller') {
    setFilterOptions(prev => ({
      ...prev,
      bestseller: value,
      category: ''     
    }));
  } else {
    setFilterOptions(prev => ({ ...prev, [type]: value }));
  }
};

  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]); 
  

  useEffect(() => {
  let filteredList = Allproducts;

  
  filteredList = filteredList.filter(
    product => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  setProducts(filteredList); 
}, [priceRange]);



  useEffect(()=> {
    let productList = Allproducts
    if (filterOptions.category) {
      productList = productList.filter(prod=> prod.category === filterOptions.category)
    }
    if (filterOptions.bestseller) {
      productList = productList.filter(prod=> prod.isbestseller === true )
    }


    setProducts(productList)
  }, [filterOptions])

  return (
    <div className='allproducts'>
      <SideBar className='side' activeCategory={filterOptions.category ?? 'allproducts'} handleFilter={handleFilter}
      searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onPriceChange={setPriceRange} />
      <AllProductsMain products={products}
       product={Allproducts}
        searchTerm={searchTerm}
        priceRange={priceRange}/>
      
    </div>
  )
}

export default AllProducts
