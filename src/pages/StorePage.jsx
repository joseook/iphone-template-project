import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCartIcon, XMarkIcon, ChevronRightIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import Model from '../components/Model';
import ProductCustomizer from '../components/ProductCustomizer';
import ARViewer from '../components/ARViewer';
import Chatbot from '../components/Chatbot';
import ProductComparison from '../components/ProductComparison';

const StorePage = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showComparison, setShowComparison] = useState(false);

  const storeProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      category: 'iPhone',
      price: 999,
      color: '#1d1d1f',
      image: '/assets/images/black.jpg',
      description: 'The ultimate smartphone experience',
      features: ['A17 Pro chip', 'Pro camera system', 'Titanium design'],
      rating: 4.9,
      reviews: 1283
    },
    {
      id: 2,
      name: 'iPhone 15',
      category: 'iPhone',
      price: 799,
      color: '#f5f5f7',
      image: '/assets/images/white.jpg',
      description: 'Lightweight and powerful',
      features: ['A16 Bionic chip', 'Dual camera system', 'All-day battery'],
      rating: 4.8,
      reviews: 952
    },
    {
      id: 3,
      name: 'iPhone 15 Pro Max',
      category: 'iPhone',
      price: 1199,
      color: '#0071e3',
      image: '/assets/images/blue.jpg',
      description: 'Our most powerful iPhone ever',
      features: ['A17 Pro chip', 'Titanium design', '6.7" display'],
      rating: 4.9,
      reviews: 876
    },
    {
      id: 4,
      name: 'MacBook Pro 14"',
      category: 'Mac',
      price: 1999,
      color: '#1d1d1f',
      image: '/assets/images/black.jpg',
      description: 'Supercharged for pros',
      features: ['M3 Pro or M3 Max chip', 'Up to 22 hours battery life', 'Liquid Retina XDR display'],
      rating: 4.8,
      reviews: 729
    },
    {
      id: 5,
      name: 'MacBook Air',
      category: 'Mac',
      price: 1099,
      color: '#f5f5f7',
      image: '/assets/images/white.jpg',
      description: 'Thin, light, powerful',
      features: ['M2 chip', 'Up to 18 hours battery life', 'Fanless design'],
      rating: 4.7,
      reviews: 1045
    },
    {
      id: 6,
      name: 'AirPods Pro',
      category: 'Accessories',
      price: 249,
      color: '#f5f5f7',
      image: '/assets/images/white.jpg',
      description: 'Active Noise Cancellation',
      features: ['Adaptive EQ', 'Transparency mode', 'Spatial audio'],
      rating: 4.7,
      reviews: 2156
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

  const featuredProduct = storeProducts[0]; // iPhone 15 Pro by default

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen relative">
        <div className="absolute inset-0">
          <Model showTitle={false} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4">iPhone 15 Pro</h1>
            <p className="text-xl text-gray-400 mb-8">Titanium. So strong. So light. So Pro.</p>
            <button
              onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              Shop Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold"
            >
              Featured Products
            </motion.h2>
            <div className="flex space-x-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full ${selectedCategory === category
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: product.id * 0.1 }}
                className="bg-gray-900 rounded-2xl overflow-hidden"
              >
                <div className="h-60 bg-gray-800 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <HeartIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <p className="text-gray-400 mt-1">{product.description}</p>
                    </div>
                    <p className="text-lg font-bold">${product.price}</p>
                  </div>

                  <div className="flex items-center mt-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm ml-2">({product.reviews})</p>
                  </div>

                  <ul className="mt-4 space-y-1 text-sm text-gray-400">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-xs mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2 mt-5">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-white text-black py-2 rounded-full hover:bg-gray-100 transition-colors text-sm font-bold"
                    >
                      Add to Cart
                    </button>
                    <button
                      className="flex items-center justify-center px-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      <ChevronRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Compare iPhone Models
          </motion.h2>
          <ProductComparison
            products={storeProducts.filter(p => p.category === 'iPhone')}
          />
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
          <ProductCustomizer product={featuredProduct} />
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
          <ARViewer product={featuredProduct} />
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold mb-4"
                >
                  Apple Trade In
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-200 mb-6"
                >
                  Get credit toward your new iPhone when you trade in your eligible smartphone. It's good for you and the planet.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="px-6 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-gray-100 transition-colors"
                >
                  Get Trade-In Value
                </motion.button>
              </div>
              <div className="flex justify-center">
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  src="/assets/images/hero.jpeg"
                  alt="Trade In"
                  className="max-h-80 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Recommended Accessories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storeProducts.filter(p => p.category === 'Accessories').map(accessory => (
              <motion.div
                key={accessory.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-black p-6 rounded-xl"
              >
                <div className="h-40 bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{accessory.name}</h3>
                <p className="text-gray-400 mb-3">{accessory.description}</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">${accessory.price}</p>
                  <button
                    onClick={() => addToCart(accessory)}
                    className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-100 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
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
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <ShoppingCartIcon className="w-16 h-16 text-gray-700 mb-4" />
              <p className="text-gray-400 mb-4">Your cart is empty</p>
              <button
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                className="text-blue-400 hover:text-blue-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-gray-700 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
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
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Subtotal</span>
                  <span>${cartTotal}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between items-center mb-4 font-bold">
                  <span>Total</span>
                  <span className="text-2xl">${cartTotal}</span>
                </div>
                <button className="w-full bg-white text-black py-3 rounded-full hover:bg-gray-100 transition-colors font-bold">
                  Checkout
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center mt-4 text-gray-400 hover:text-white"
                >
                  Continue Shopping
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
          <span className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
            {cart.length}
          </span>
        )}
      </button>
    </div>
  );
};

export default StorePage;
