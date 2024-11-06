import React from 'react';
import ProductCard from './ProductCard';

function FeaturedProducts({ addToCart }) {
  const products = [
    { id: 1, name: "Wireless Earbuds", price: 79.99 },
    { id: 2, name: "Smart Watch", price: 199.99 },
    { id: 3, name: "Laptop Backpack", price: 49.99 },
    { id: 4, name: "4K Action Camera", price: 299.99 },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
