import React from 'react';
import MainNav from './MainNav';
import SearchBar from './SearchBar';
import CartButton from './CartButton';
import MobileButton from './MobileButton';

function Header({ totalItems, openCart }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 flex h-16 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <SearchBar />
          <CartButton itemCount={totalItems} openCart={openCart} />
          <MobileButton />
          
          
        </div>

      </div>
    </header>
  );
}

export default Header;
