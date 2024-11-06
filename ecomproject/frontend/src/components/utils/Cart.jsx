import React from 'react';

function Cart({ isOpen, closeCart, cartItems, updateQuantity, totalPrice }) {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end">
        <div className="w-80 bg-white p-4">
          <button onClick={closeCart} className="mb-4 text-red-500">Close</button>
          <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div>{item.name}</div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <div>${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-lg font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      </div>
    )
  );
}

export default Cart;
