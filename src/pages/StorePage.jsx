import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ProductModel = ({ product }) => {
  const modelRef = useRef();

  useGSAP(() => {
    gsap.to(modelRef.current.rotation, {
      y: Math.PI * 2,
      duration: 20,
      repeat: -1,
      ease: 'none'
    });
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={modelRef}>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={product.color} metalness={0.8} roughness={0.2} />
        </mesh>
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {product.name}
        </Text>
      </group>
    </Float>
  );
};

const StorePage = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const storeProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      category: 'iPhone',
      price: 999,
      color: '#1d1d1f',
      description: 'The ultimate iPhone experience'
    },
    {
      id: 2,
      name: 'MacBook Pro',
      category: 'Mac',
      price: 1999,
      color: '#1d1d1f',
      description: 'Supercharged by M3'
    },
    {
      id: 3,
      name: 'iPad Pro',
      category: 'iPad',
      price: 799,
      color: '#1d1d1f',
      description: 'The ultimate iPad experience'
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
    <div className="min-h-screen text-white bg-black">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            The Apple Store
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Shop the latest Apple products and accessories.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900 rounded-2xl overflow-hidden"
              >
                <div className="h-64">
                  <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Environment preset="city" />
                    <OrbitControls enableZoom={false} />
                    <ProductModel product={product} />
                  </Canvas>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <p className="text-gray-400 mt-2">{product.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-2xl">${product.price}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                      <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center">
                        <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
                          <ambientLight intensity={0.5} />
                          <pointLight position={[5, 5, 5]} />
                          <mesh>
                            <boxGeometry args={[0.5, 0.5, 0.5]} />
                            <meshStandardMaterial color={item.color} metalness={0.8} roughness={0.2} />
                          </mesh>
                        </Canvas>
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
