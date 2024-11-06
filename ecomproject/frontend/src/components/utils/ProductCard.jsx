import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 bg-white">
      <img
        src={`https://via.placeholder.com/200`}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full py-2 mt-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
