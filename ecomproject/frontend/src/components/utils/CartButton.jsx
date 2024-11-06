import React from 'react';
import { ShoppingCart } from 'lucide-react';

function CartButton({ itemCount, openCart }) {
  return (
    <button
      onClick={openCart}
      className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 relative"
    >
      <ShoppingCart className="h-4 w-4" />
      <span className="sr-only">Cart</span>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
}

export default CartButton;
