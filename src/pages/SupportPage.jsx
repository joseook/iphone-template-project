import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MagnifyingGlassIcon, ChatBubbleBottomCenterTextIcon, DevicePhoneMobileIcon, ComputerDesktopIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const DeviceModel = ({ type }) => {
  const modelRef = useRef();

  useGSAP(() => {
    gsap.to(modelRef.current.rotation, {
      y: Math.PI * 2,
      duration: 20,
      repeat: -1,
      ease: 'none'
    });
  });

  const getModelGeometry = () => {
    switch (type) {
      case 'iPhone':
        return <boxGeometry args={[0.5, 1, 0.1]} />;
      case 'Mac':
        return (
          <>
            <mesh position={[0, -0.2, 0]}>
              <boxGeometry args={[1, 0.1, 0.8]} />
            </mesh>
            <mesh position={[0, 0.2, -0.2]} rotation={[Math.PI / 4, 0, 0]}>
              <boxGeometry args={[1, 0.8, 0.1]} />
            </mesh>
          </>
        );
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={modelRef}>
        <mesh>
          {getModelGeometry()}
          <meshStandardMaterial color="#1d1d1f" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
};

const supportCategories = [
  {
    id: 1,
    title: 'iPhone',
    icon: DevicePhoneMobileIcon,
    topics: ['Battery & Performance', 'iOS Updates', 'Apple ID & iCloud', 'Repairs & Physical Damage'],
    type: 'iPhone'
  },
  {
    id: 2,
    title: 'Mac',
    icon: ComputerDesktopIcon,
    topics: ['macOS Help', 'Performance Issues', 'Software Updates', 'Hardware Support'],
    type: 'Mac'
  },
  {
    id: 3,
    title: 'Common Questions',
    icon: QuestionMarkCircleIcon,
    topics: ['Account & Billing', 'Apple Care+', 'Find My iPhone', 'Privacy & Security'],
    type: 'General'
  }
];

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="min-h-screen text-white bg-black">
      {/* Hero Search Section */}
      <section className="pt-20 pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How can we help you?</h1>
          <div className="relative max-w-2xl mx-auto">
            <MagnifyingGlassIcon className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for topics, products, or questions..."
              className="w-full py-4 pl-14 pr-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-white focus:outline-none transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>
      </section>

      {/* Support Categories */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="bg-black p-6 rounded-xl cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="h-48 mb-4">
                  <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Environment preset="city" />
                    <OrbitControls enableZoom={false} />
                    <DeviceModel type={category.type} />
                  </Canvas>
                </div>
                <category.icon className="h-8 w-8 mb-4 text-gray-400" />
                <h2 className="text-xl font-bold mb-4">{category.title}</h2>
                <ul className="space-y-2">
                  {category.topics.map((topic, index) => (
                    <li key={index} className="text-gray-400 hover:text-white transition-colors">
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Assistant */}
      <div className="fixed bottom-8 right-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black rounded-full p-4 flex items-center gap-2 shadow-lg"
        >
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
          <span className="font-medium">Ask Apple Assistant</span>
        </motion.button>
      </div>
    </div>
  );
};

export default SupportPage;