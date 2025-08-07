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

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          
            <Route path = '/' element = {<HomePage/>}/>
            <Route path = '/shop' element = {<ShopPage/>}/>
            <Route path = '/ourstory' element = {<OurstoryPage/>}/>
            <Route path = '/giftcard' element = {<GiftcardPage/>}/>
            <Route path = '/contact' element = {<ContactPage/>}/>
            <Route path = '/login' element = {<LoginPage/>}/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
