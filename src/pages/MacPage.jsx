import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const MacModel = () => {
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
        {/* MacBook Base */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[2, 0.1, 1.5]} />
          <meshStandardMaterial color="#1d1d1f" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* MacBook Screen */}
        <mesh position={[0, 0.5, -0.5]} rotation={[Math.PI / 4, 0, 0]}>
          <boxGeometry args={[2, 1.2, 0.1]} />
          <meshStandardMaterial color="#1d1d1f" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
};

const MacPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen relative">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Environment preset="city" />
          <OrbitControls enableZoom={false} />
          <MacModel />
        </Canvas>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4">Mac</h1>
            <p className="text-xl text-gray-400">Powerful. Beautiful. Pro.</p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Explore Mac
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'MacBook Pro',
                description: 'Supercharged by M3',
                image: '/path-to-macbook-pro-image.jpg'
              },
              {
                title: 'iMac',
                description: 'Inspired by the best of Apple',
                image: '/path-to-imac-image.jpg'
              },
              {
                title: 'Mac Studio',
                description: 'Supercharged by M2 Ultra',
                image: '/path-to-mac-studio-image.jpg'
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 p-6 rounded-xl"
              >
                <div className="aspect-video bg-gray-800 rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-400">{product.description}</p>
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
            Why Mac?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'M3 Chip',
                description: 'The most powerful chip ever in a personal computer',
                icon: '🚀'
              },
              {
                title: 'macOS',
                description: 'The most advanced desktop operating system',
                icon: '💻'
              },
              {
                title: 'Continuity',
                description: 'Seamless integration with all your Apple devices',
                icon: '🔗'
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

