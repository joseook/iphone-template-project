import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MacModelView from '../components/MacModelView';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

  const performanceData = {
    labels: ['CPU Performance', 'GPU Performance', 'ML Performance', 'Battery Life'],
    datasets: [
      {
        label: 'MacBook Pro (M3 Max)',
        data: [100, 100, 100, 100],
        backgroundColor: 'rgba(134, 239, 172, 0.8)',
        borderColor: 'rgba(134, 239, 172, 1)',
        borderWidth: 1,
      },
      {
        label: 'Windows Laptop (High-End)',
        data: [85, 82, 65, 70],
        backgroundColor: 'rgba(191, 219, 254, 0.8)',
        borderColor: 'rgba(191, 219, 254, 1)',
        borderWidth: 1,
      },
      {
        label: 'Previous MacBook Pro (Intel)',
        data: [65, 60, 40, 80],
        backgroundColor: 'rgba(252, 165, 165, 0.8)',
        borderColor: 'rgba(252, 165, 165, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + '%';
          },
          color: 'rgba(255, 255, 255, 0.7)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        }
      },
      x: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'rgba(255, 255, 255, 0.7)',
          padding: 20,
        },
      },
      title: {
        display: true,
        text: 'Performance Comparison',
        color: 'rgba(255, 255, 255, 0.9)',
        font: {
          size: 16,
          weight: 'bold',
        },
        padding: {
          top: 10,
          bottom: 30
        }
      },
    },
  };

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

      {/* Performance Comparison Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Unprecedented Performance
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-bold mb-4">Up to 2x faster than PC laptops</h3>
              <p className="text-gray-400 mb-6">
                The MacBook Pro delivers game-changing performance whether it's plugged in or not, so you can compile in Xcode, render scenes in Cinema 4D, and edit massive images in Photoshop faster than ever.
              </p>
              <ul className="space-y-4">
                {[
                  'Faster multithreaded performance for demanding workflows',
                  'Advanced GPU cores for graphics-intensive applications',
                  'Industry-leading performance per watt',
                  '22 hours of battery life — the longest in a Mac ever'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="h-[400px] bg-gray-900 p-6 rounded-xl"
            >
              <Bar data={performanceData} options={chartOptions} />
            </motion.div>
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
            Chip Options
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
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Up to 36GB unified memory</span>
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
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Up to 96GB unified memory</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Display Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Stunning Liquid Retina XDR Display
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="aspect-video bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🖥️</div>
                  <p className="text-xl font-bold">Liquid Retina XDR</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-bold mb-4">The best display ever in a notebook</h3>
              <p className="text-gray-300 mb-6">
                The Liquid Retina XDR display combines remarkable brightness and contrast with an expansive P3 wide color gamut and ProMotion technology.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black bg-opacity-50 p-4 rounded-xl">
                  <p className="font-bold text-xl mb-1">1000 nits</p>
                  <p className="text-gray-400 text-sm">Sustained brightness</p>
                </div>
                <div className="bg-black bg-opacity-50 p-4 rounded-xl">
                  <p className="font-bold text-xl mb-1">1600 nits</p>
                  <p className="text-gray-400 text-sm">Peak brightness</p>
                </div>
                <div className="bg-black bg-opacity-50 p-4 rounded-xl">
                  <p className="font-bold text-xl mb-1">1,000,000:1</p>
                  <p className="text-gray-400 text-sm">Contrast ratio</p>
                </div>
                <div className="bg-black bg-opacity-50 p-4 rounded-xl">
                  <p className="font-bold text-xl mb-1">120Hz</p>
                  <p className="text-gray-400 text-sm">ProMotion</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-black">
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
                className="bg-gray-900 p-6 rounded-xl"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ports and Connectivity Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Ports & Connectivity
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { name: 'Thunderbolt 4', icon: '⚡', desc: 'Up to 40Gb/s' },
              { name: 'HDMI', icon: '🖥️', desc: 'Support for 8K displays' },
              { name: 'SDXC Card', icon: '💾', desc: 'UHS-II' },
              { name: 'MagSafe 3', icon: '🔌', desc: 'Fast charging' },
              { name: 'Headphone Jack', icon: '🎧', desc: 'Advanced support' },
              { name: 'Wi-Fi 6E', icon: '📶', desc: 'Up to 2.4Gb/s' }
            ].map((port, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-4 rounded-lg text-center"
              >
                <div className="text-3xl mb-2">{port.icon}</div>
                <h3 className="font-bold mb-1">{port.name}</h3>
                <p className="text-xs text-gray-400">{port.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 text-center text-gray-400"
          >
            <p>Connect to high-performance peripherals and displays with ease</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            Unleash your creativity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8"
          >
            The MacBook Pro is designed for those who defy limits and change the world. With game-changing performance, incredible graphics, and an innovative thermal design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Buy MacBook Pro
            </button>
            <button className="px-8 py-4 bg-transparent border border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              Learn more
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MacPage;

