import HomePage from './components/homepage';
import ProductListing from './components/product_listingpage';
import ProductDescription from './components/product_detail';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './App.css';
import Payment from './components/payment';
import LandingPage from './components/homepage';
import Header from './components/utils/Header';
import LogIn from './components/Login';
import SignupPage from './components/SignUpPage';
import CategoriesPage from './components/Category';


function App() {
  return (
    <Router>
       <Header/>
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ProductListing" element={<ProductListing />} />
        <Route path="/product" element={<ProductDescription />} />
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/categories' element={<CategoriesPage/>}/>
      </Routes>
  </Router>
  );;
}

export default App;
