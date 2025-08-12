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
import FooterPart from './components/essential/FooterPart';
import Rings from './components/pages/Rings';
import Earrings from './components/pages/Earrings';
import Necklaces from './components/pages/Necklaces';
import Bracelets from './components/pages/Bracelets';
import NewIn from './components/pages/NewIn';
import AllProducts from './components/pages/AllProducts';
import BestSeller from './components/homecomponents/BestSeller';
import SignUp from './components/signupcomponent/SignUp';
import ProtectedRoutes from './hooks/UseProtectedRoutes';
import UserPage from './components/usercomponent/UserPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <ProtectedRoutes/>
        <Routes>
          
            <Route path = '/' element = {<HomePage/>}/>
            {/* <Route path = '/shop' element = {<ShopPage/>}/> */}
            <Route path = '/allproducts' element = {<AllProducts/>}/>
            <Route path = '/ourstory' element = {<OurstoryPage/>}/>
            <Route path = '/giftcard' element = {<GiftcardPage/>}/>
            <Route path = '/contact' element = {<ContactPage/>}/>
            <Route path = '/login' element = {<LoginPage/>}/>
            <Route path = '/signup' element = {<SignUp/>}/>
            <Route path = '/rings' element = {<Rings/>}/>
            <Route path = '/earrings' element = {<Earrings/>}/>
            <Route path = '/necklaces' element = {<Necklaces/>}/>
            <Route path = '/bracelets' element = {<Bracelets/>}/>
            <Route path = '/newin' element = {<NewIn/>}/>
            <Route path = '/bestseller' element = {<BestSeller/>}/>
            <Route path='/user' element = {<UserPage/>}/>

        </Routes>
      <FooterPart/>
    </BrowserRouter>
  );
}

export default App;
