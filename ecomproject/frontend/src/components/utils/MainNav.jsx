import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';

function MainNav() {
  return (
    <div className="mr-4 hidden md:flex items-center">
      <Link to="/" className="mr-6 flex items-center space-x-2">
        <ShoppingCart className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">ShopNest</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link to="/ProductListing" className="hover:text-gray-600 transition-colors">Products</Link>
        <Link to="/categories" className="hover:text-gray-600 transition-colors">Categories</Link>
   
      </nav>
      <Link 
        to="/login"
        className="ml-4 flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <User className="h-4 w-4 mr-2" />
        Login
      </Link>
    </div>
  );
}

export default MainNav;
