import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ProductModel = ({ color, size, position }) => {
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
            <boxGeometry args={[size.width, size.height, size.depth]} />
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      </Float>
    </group>
  );
};

const ProductCustomizer = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState('#1d1d1f');
  const [selectedSize, setSelectedSize] = useState({ width: 1, height: 2, depth: 0.1 });
  const [selectedStorage, setSelectedStorage] = useState('128GB');

  const colors = [
    { name: 'Space Black', value: '#1d1d1f' },
    { name: 'Silver', value: '#f5f5f7' },
    { name: 'Gold', value: '#f5e6d3' },
    { name: 'Blue', value: '#0071e3' }
  ];

  const sizes = [
    { name: 'Small', value: { width: 0.8, height: 1.6, depth: 0.1 } },
    { name: 'Medium', value: { width: 1, height: 2, depth: 0.1 } },
    { name: 'Large', value: { width: 1.2, height: 2.4, depth: 0.1 } }
  ];

  const storageOptions = ['128GB', '256GB', '512GB', '1TB'];

  return (
    <div className="w-full bg-black rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 3D Preview */}
        <div className="h-[400px]">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Environment preset="city" />
            <OrbitControls enableZoom={true} />
            <ProductModel
              color={selectedColor}
              size={selectedSize}
              position={[0, 0, 0]}
            />
          </Canvas>
        </div>

        {/* Customization Options */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Color</h3>
            <div className="flex gap-4">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-12 h-12 rounded-full border-2 ${selectedColor === color.value ? 'border-white' : 'border-gray-600'
                    }`}
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Size</h3>
            <div className="flex gap-4">
              {sizes.map((size) => (
                <button
                  key={size.name}
                  onClick={() => setSelectedSize(size.value)}
                  className={`px-4 py-2 rounded-full border-2 ${JSON.stringify(selectedSize) === JSON.stringify(size.value)
                    ? 'border-white bg-white text-black'
                    : 'border-gray-600 text-white'
                    }`}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Storage</h3>
            <div className="flex gap-4">
              {storageOptions.map((storage) => (
                <button
                  key={storage}
                  onClick={() => setSelectedStorage(storage)}
                  className={`px-4 py-2 rounded-full border-2 ${selectedStorage === storage
                    ? 'border-white bg-white text-black'
                    : 'border-gray-600 text-white'
                    }`}
                >
                  {storage}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button className="w-full bg-white text-black py-3 rounded-full hover:bg-gray-100 transition-colors">
              Add to Cart - ${product?.price || 999}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCustomizer; 