import React from 'react';
import { motion } from 'framer-motion';
import GamingPerfChart from '../components/GamingPerfChart';
import Model from '../components/Model';

const IPhonePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen relative">
        <div className="absolute inset-0">
          <Model showTitle={false} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4">iPhone 15 Pro</h1>
            <p className="text-xl text-gray-400 mb-8">The power of the A17 Pro chip</p>
            <button
              onClick={() => document.getElementById('gaming').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              Explore
            </button>
          </motion.div>
        </div>
      </section>

      {/* Gaming Performance Section */}
      <section id="gaming" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Gaming Performance
          </motion.h2>
          <GamingPerfChart />
        </div>
      </section>

      {/* Camera Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Pro Camera System
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-bold mb-4">Capture moments with professional quality</h3>
              <p className="text-gray-400 mb-6">
                With the 48MP triple camera system, you can capture photos with impressive details and vibrant colors, even in low-light conditions.
              </p>
              <ul className="space-y-4">
                {[
                  '48MP main camera with quad-pixel sensor',
                  '12MP telephoto with 5x optical zoom',
                  '12MP ultra-wide with 120° field of view',
                  'Advanced Night mode for photos in dark environments'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="aspect-square bg-blue-900 rounded-2xl overflow-hidden"
            >
              <img
                src="/assets/images/hero.jpeg"
                alt="Camera"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Titanium Design Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/assets/images/hero.jpeg"
            alt="Titanium background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Titanium Design
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Durable',
                description: 'Aerospace-grade titanium provides incredible strength with minimal weight',
                icon: '💪'
              },
              {
                title: 'Lightweight',
                description: 'The iPhone 15 Pro is the lightest Pro lineup in history',
                icon: '🪶'
              },
              {
                title: 'Sustainable',
                description: 'Made with recycled materials and plastic-free packaging',
                icon: '♻️'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 p-8 rounded-2xl"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Key Features
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'A17 Pro Chip',
                description: 'The most powerful chip ever in a smartphone, with CPU up to 10% faster and GPU up to 20% faster',
                icon: '🚀'
              },
              {
                title: '120Hz ProMotion',
                description: 'Smooth gaming and scrolling experience with refresh rate that adjusts from 10Hz to 120Hz',
                icon: '🎮'
              },
              {
                title: 'Ray Tracing',
                description: 'Console-quality graphics with hardware-accelerated ray tracing for immersive games',
                icon: '✨'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-black p-6 rounded-xl"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Button Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl font-bold mb-4">Action Button</h3>
              <p className="text-gray-400 mb-6">
                The new customizable Action button gives you quick access to your favorite features with just a tap.
              </p>
              <ul className="space-y-4">
                {[
                  'Open the camera instantly',
                  'Start a voice recording',
                  'Turn on the flashlight',
                  'Activate Do Not Disturb mode',
                  'Open your favorite translation',
                  'Customize with shortcuts'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-1 md:order-2 aspect-square bg-gray-800 rounded-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            Experience the future now
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8"
          >
            The iPhone 15 Pro represents the pinnacle of smartphone innovation. With unmatched performance, elegant design, and advanced features, it's the perfect choice for those seeking the best in technology.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Buy iPhone 15 Pro
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default IPhonePage;



