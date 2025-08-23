import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import Header from './components/essential/Header';
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
import DashBoard from './components/DashBoard';
import AuthLayout from './layout/AuthLayout';
import PublicLayout from './layout/PublicLayout';
import AdminLayout from './layout/AdminLayout';
import ProductView from './components/pages/ProductView';


function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      {/* <ProtectedRoutes/> */}
      <ErrorBoundary fallback={<div>Error happend</div>}>
        <Routes>
          <Route element = {<PublicLayout/>}>
            <Route path = '/' element = {<HomePage/>}/>
            <Route path = '/allproducts' element = {<AllProducts/>}/>
            <Route path = '/ourstory' element = {<OurstoryPage/>}/>
            <Route path = '/giftcard' element = {<GiftcardPage/>}/>
            <Route path = '/contact' element = {<ContactPage/>}/>
            <Route path='/user' element = {<UserPage/>}/>
            <Route path = '/*' element = {<NotFound/>}/>
            <Route path = '/productview/:id' element = {<ProductView/>}/>
          
          </Route>
          <Route element = {<AuthLayout/>}>
            <Route path = '/login' element = {<LoginPage/>}/>
            <Route path = '/signup' element = {<SignUp/>}/>
          </Route>
          <Route element = {<ProtectedRoutes><AdminLayout/></ProtectedRoutes>}>
            <Route path='/admin/dashboard' element = {<DashBoard/>}/>
          </Route>
            {/* <Route path = '/search' element = {<Search/>}/> */}

        </Routes>
      </ErrorBoundary>

      {/* <FooterPart/> */}
    </BrowserRouter>
  );
}

export default App;
