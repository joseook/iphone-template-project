import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Model from '../components/Model';
import ProductCustomizer from '../components/ProductCustomizer';
import ARViewer from '../components/ARViewer';
import Chatbot from '../components/Chatbot';

const StorePage = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const storeProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      category: 'SmartPhone',
      price: 999,
      color: '#1d1d1f',
      description: 'The ultimate smartphone experience'
    },
    {
      id: 2,
      name: 'iPhone 15',
      category: 'SmartPhone',
      price: 799,
      color: '#f5f5f7',
      description: 'Lightweight and powerful'
    },
    {
      id: 3,
      name: 'iPhone 15 Mini',
      category: 'SmartPhone',
      price: 599,
      color: '#0071e3',
      description: 'Compact and efficient'
    }
  ];

  const categories = ['All', ...new Set(storeProducts.map(product => product.category))];

  const filteredProducts = selectedCategory === 'All'
    ? storeProducts
    : storeProducts.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: Date.now() }]);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen relative">
        <div className="absolute inset-0">
          <Model showTitle={false} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4">iPhone Store</h1>
            <p className="text-xl text-gray-400">Discover the latest iPhone models</p>
          </motion.div>
        </div>
      </section>

      {/* Product Customization Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Customize Your iPhone
          </motion.h2>
          <ProductCustomizer product={storeProducts[0]} />
        </div>
      </section>

      {/* AR Experience Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Try Before You Buy
          </motion.h2>
          <ARViewer product={storeProducts[0]} />
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot />

      {/* Shopping Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-gray-900 transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 z-50`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="text-gray-400">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 bg-gray-800 rounded-lg">
                        <Model showTitle={false} />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-400">${item.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-gray-800 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400">Total</span>
                  <span className="text-2xl">${cartTotal}</span>
                </div>
                <button className="w-full bg-white text-black py-3 rounded-full hover:bg-gray-100 transition-colors">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Cart Toggle Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-8 right-8 bg-white text-black p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      >
        <ShoppingCartIcon className="w-6 h-6" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
            {cart.length}
          </span>
        )}
      </button>
    </div>
  );
};

export default StorePage;
