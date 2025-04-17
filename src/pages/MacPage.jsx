import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MacModelView from '../components/MacModelView';

const MacPage = () => {
  const [rotation, setRotation] = useState(0);
  const controlRef = useRef();
  const [macModel, setMacModel] = useState({
    title: 'MacBook Pro in Silver',
    color: ['#92969c'],
    img: '/assets/images/white.jpg' // Use existing image as placeholder
  });

  const colors = {
    silver: {
      title: 'MacBook Pro in Silver',
      color: ['#92969c'],
      img: '/assets/images/white.jpg'
    },
    spacegray: {
      title: 'MacBook Pro in Space Gray',
      color: ['#424245'],
      img: '/assets/images/black.jpg'
    },
    gold: {
      title: 'MacBook Pro in Gold',
      color: ['#e3ccaf'],
      img: '/assets/images/yellow.jpg'
    }
  };

  useGSAP(() => {
    gsap.to('#mac-heading', { y: 0, opacity: 1 });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with 3D Model */}
      <section className="h-screen relative">
        <div className="screen-max-width">
          <h1 id="mac-heading" className="section-heading opacity-0 translate-y-20">
            Supercharged for pros.
          </h1>

          <div className="w-full h-[75vh] md:h-[90vh] relative overflow-hidden">
            <Canvas
              camera={{ position: [0, 0, 5], fov: 50 }}
              shadows
              className="w-full h-full"
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              eventSource={document.getElementById('root')}
            >
              <MacModelView
                controlRef={controlRef}
                setRotationState={setRotation}
                item={macModel}
              />
            </Canvas>
          </div>

          <div className="mx-auto w-full absolute bottom-10 left-0 right-0">
            <p className="text-sm font-light text-center mb-5">{macModel.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {Object.entries(colors).map(([key, item]) => (
                  <li
                    key={key}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer border border-gray-600"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setMacModel(item)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Incredible Performance
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-900 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">M3 Pro</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>12-core CPU with 8 performance cores and 4 efficiency cores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>19-core GPU</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>16-core Neural Engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>200GB/s memory bandwidth</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-900 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">M3 Max</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>14-core CPU with 10 performance cores and 4 efficiency cores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>30-core GPU</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>16-core Neural Engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>400GB/s memory bandwidth</span>
                </li>
              </ul>
            </motion.div>
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
            Pro Features
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Liquid Retina XDR',
                description: 'Up to 1000 nits sustained brightness with HDR content',
                icon: '✨'
              },
              {
                title: 'Battery Life',
                description: 'Up to 22 hours of battery life',
                icon: '🔋'
              },
              {
                title: 'Connectivity',
                description: 'HDMI port, SDXC card slot, 3 Thunderbolt 4 ports',
                icon: '🔌'
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

export default MacPage;

