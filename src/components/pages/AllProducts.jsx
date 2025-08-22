import React, { useEffect, useState } from 'react'
import SideBar from '../essential/SideBar'
import AllProductsMain from '../allproductcomponent/AllProductsMain'
import '../../styles/Pages/AllProducts.css'
import { Allproducts } from '../../data/AllProducts'

const AllProducts = () => {

  const [filterOptions, setFilterOptions] = useState({
    category: '',
    price: '',
    bestseller: false,
    // addedDate: false
  })

  const [products, setProducts] = useState(Allproducts)

  /**
   * 
   * @param {String} type - type of filter 
   * @param {String} value - value for the type 
   */
  const handleFilter = (type, value) => {
    setFilterOptions(prev=> ({ ...prev, [type]: value}))
  }

  useEffect(()=> {
    let productList = Allproducts
    if (filterOptions.category) {
      productList = productList.filter(prod=> prod.category === filterOptions.category)
    }
    if (filterOptions.bestseller) {
      productList = productList.filter(prod=> prod.isbestseller === true )
    }
    // if (filterOptions.newIn) {
    //   productList = productList.filter(prod => prod.)
    // }

    setProducts(productList)
  }, [filterOptions])

  return (
    <div className='allproducts'>
      <SideBar className='side' activeCategory={filterOptions.category ?? 'allproducts'} handleFilter={handleFilter}/>
      <AllProductsMain products={products}/>
      
    </div>
  )
}

export default AllProducts
