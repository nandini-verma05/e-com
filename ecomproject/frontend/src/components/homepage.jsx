import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './utils/Header';
import HeroSection from './utils/HeroSection';
import FeaturedProducts from './utils/FeaturedProducts';
import Footer from './utils/Footer';
import Cart from './utils/Cart';

export default function HomePage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/cart');
      const { cart, totalItems, totalPrice } = response.data;
      setCartItems(cart);
      setTotalItems(totalItems);
      setTotalPrice(totalPrice);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  const addToCart = async (product) => {
    try {
      await axios.post('http://localhost:5000/api/cart', { productId: product.id });
      fetchCart();
      setIsCartOpen(true);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const updateQuantity = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts addToCart={addToCart} />
      </main>
      <Footer />
      <Cart
        isOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        totalPrice={totalPrice}
      />
    </div>
  );
}
