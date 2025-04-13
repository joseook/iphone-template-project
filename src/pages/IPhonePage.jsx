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
            <p className="text-xl text-gray-400">The ultimate gaming experience</p>
          </motion.div>
        </div>
      </section>

      {/* Gaming Performance Section */}
      <section className="py-20 px-6">
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
                description: 'The most powerful chip ever in a smartphone',
                icon: '🚀'
              },
              {
                title: '120Hz ProMotion',
                description: 'Ultra-smooth gaming experience',
                icon: '🎮'
              },
              {
                title: 'Ray Tracing',
                description: 'Console-quality graphics',
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
    </div>
  );
};

export default IPhonePage;



