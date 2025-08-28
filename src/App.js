import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from './components/essential/Header';
import HomePage from './components/pages/Home';
import ShopPage from './components/pages/Shop';
import OurstoryPage from './components/pages/OurStory';
import GiftcardPage from './components/pages/GiftCard';
import ContactPage from './components/pages/Contact';
import LoginPage from './components/pages/Login';
// import FooterPart from './components/essential/FooterPart';

import AllProducts from './components/pages/AllProducts';
// import BestSeller from './components/homecomponents/BestSeller';
import SignUp from './components/signupcomponent/SignUp';
import ProtectedRoutes from './hooks/UseProtectedRoutes';
import UserPage from './components/usercomponent/UserPage';
// import Search from './components/pages/Search';
import NotFound from './components/pages/NotFound';
import ErrorBoundary from './data/ErrorHandle';
// import DashBoard from './components/DashBoard';
import AuthLayout from './layout/AuthLayout';
import PublicLayout from './layout/PublicLayout';
import AdminLayout from './layout/AdminLayout';
import ProductView from './components/pages/ProductView';
import React, { useEffect, useState } from 'react';
import Cart from './components/pages/Cart';


import ProductsManagement from './components/pages/admin/ProductsManagement';
import CustomerManagement from './components/pages/admin/CustomerManagement';
import OrderManagement from './components/pages/admin/OrderManagement';
import PaymentManagement from './components/pages/admin/PaymentManagement';
import Report from './components/pages/admin/Report';
import DashboardPage from './components/pages/admin/Dashboard';


function App() {

  const [cart,setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  })
  const [warning,setWarning] = useState(false)
  const [show,setShow] = useState(true)

  useEffect(() => {
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])
  
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if(item.id === product.id)
        isPresent = true
    })
    if (isPresent){
      setWarning(true);
      setTimeout(() =>{
        setWarning(false);
      },2000)
      return;
    }
    setCart([...cart,{...item,amount:1}])
  }

  const handleChange = (item, d) => {
  const updatedCart = cart
    .map((product) => {
      if (product.id === item.id) {
        return {
          ...product,
          amount: product.amount + (d === '+' ? 1 : -1),
        };
      }
      return product;
    })
    .filter((product) => product.amount > 0); // remove if amount <= 0
  setCart(updatedCart);
};

  // }

 


  return (
    <React.Fragment>
      <BrowserRouter>
      {/* <Header  size={cart.length} setShow={setShow}/> */}
      {
        warning && <div>Item is already added to your cart</div>
      }
          
      


      {/* <ProtectedRoutes/> */}
      <ErrorBoundary fallback={<div>Error happend</div>}>
        <Routes>
          <Route element = {<PublicLayout/>}>
            <Route path = '/' element = {<HomePage/>}/>
            {/* <Route path = '/allproducts' element = {<AllProducts handleClick={handleClick}/>}/> */}
            <Route path = '/ourstory' element = {<OurstoryPage/>}/>
            <Route path = '/giftcard' element = {<GiftcardPage/>}/>
            <Route path = '/contact' element = {<ContactPage/>}/>
            <Route path='/user' element = {<UserPage/>}/>
            <Route path = '/*' element = {<NotFound/>}/>
            
            {/* <Route path = '/allproducts' element = {
              show
              ? <AllProducts handleClick={handleClick}/>
              : <Cart cart={cart} setCart={setCart}/>
            }/> */}
            
            <Route path = '/allproducts' element = {<AllProducts/>}/>


            <Route path = '/productview/:id' element = {<ProductView handleClick={handleClick}/>} /> 
            <Route path = '/cart' element = {<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
            
          </Route>
          <Route element = {<AuthLayout/>}>
            <Route path = '/login' element = {<LoginPage/>}/>
            <Route path = '/signup' element = {<SignUp/>}/>
          </Route>
          <Route element = {<ProtectedRoutes><AdminLayout/></ProtectedRoutes>}>
            <Route path='/admin/dashboard' element = {<DashboardPage/>}/>
            <Route path='/admin/products' element = {<ProductsManagement/>}/>
            <Route path='/admin/orders' element = {<OrderManagement/>}/>
            <Route path='/admin/customers' element = {<CustomerManagement/>}/>
            <Route path='/admin/return' element = {<PaymentManagement/>}/>
            <Route path='/admin/analytics' element = {<Report/>}/>

            {/* <Route path='/admin/settings' element = {<PaymentManagement/>}/> */}

          </Route>
            {/* <Route path = '/search' element = {<Search/>}/> */}

        </Routes>
      </ErrorBoundary>

      {/* <FooterPart/> */}
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;