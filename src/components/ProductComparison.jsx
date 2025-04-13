import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const PhoneModel = ({ specs, position }) => {
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
    <group position={position}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group ref={modelRef}>
          <mesh>
            <boxGeometry args={[0.5, 1, 0.1]} />
            <meshStandardMaterial color={specs.color} metalness={0.8} roughness={0.2} />
          </mesh>
          <Text
            position={[0, -1.2, 0]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {specs.name}
          </Text>
        </group>
      </Float>
    </group>
  );
};

const ProductComparison = () => {
  const phones = [
    {
      name: 'iPhone 15 Pro',
      specs: {
        chip: 'A17 Pro',
        camera: '48MP',
        battery: 'Up to 29h',
        display: '6.1" ProMotion',
        color: '#1d1d1f'
      }
    },
    {
      name: 'iPhone 14 Pro',
      specs: {
        chip: 'A16 Bionic',
        camera: '48MP',
        battery: 'Up to 23h',
        display: '6.1" ProMotion',
        color: '#1d1d1f'
      }
    },
    {
      name: 'iPhone 13 Pro',
      specs: {
        chip: 'A15 Bionic',
        camera: '12MP',
        battery: 'Up to 22h',
        display: '6.1" ProMotion',
        color: '#1d1d1f'
      }
    }
  ];

  return (
    <div className="w-full bg-black rounded-xl p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Compare iPhone Models</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {phones.map((phone, index) => (
          <motion.div
            key={phone.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-900 p-6 rounded-xl"
          >
            <div className="h-64 mb-6">
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Environment preset="city" />
                <OrbitControls enableZoom={false} />
                <PhoneModel specs={phone.specs} position={[0, 0, 0]} />
              </Canvas>
            </div>

            <h3 className="text-2xl font-bold mb-4">{phone.name}</h3>
            <ul className="space-y-2">
              {Object.entries(phone.specs).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span className="text-gray-400">{key}:</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductComparison; 