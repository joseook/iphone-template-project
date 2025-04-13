import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ARModel = ({ color, size, position }) => {
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

const ARViewer = ({ product }) => {
  const [isARSupported, setIsARSupported] = useState(false);
  const [isARActive, setIsARActive] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product?.color || '#1d1d1f');
  const [selectedSize, setSelectedSize] = useState({ width: 1, height: 2, depth: 0.1 });

  const colors = [
    { name: 'Space Black', value: '#1d1d1f' },
    { name: 'Silver', value: '#f5f5f7' },
    { name: 'Gold', value: '#f5e6d3' },
    { name: 'Blue', value: '#0071e3' }
  ];

  const checkARSupport = async () => {
    if ('xr' in navigator) {
      const supported = await navigator.xr.isSessionSupported('immersive-ar');
      setIsARSupported(supported);
    }
  };

  const startAR = async () => {
    if (isARSupported) {
      setIsARActive(true);
      // Implement AR session logic here
    }
  };

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
            <ARModel
              color={selectedColor}
              size={selectedSize}
              position={[0, 0, 0]}
            />
          </Canvas>
        </div>

        {/* AR Controls */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">View in Your Space</h3>
          <p className="text-gray-400">
            See how {product?.name || 'the product'} looks in your environment using augmented reality.
          </p>

          <div className="space-y-4">
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

            <button
              onClick={checkARSupport}
              className="w-full bg-white text-black py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Check AR Support
            </button>

            {isARSupported && (
              <button
                onClick={startAR}
                className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                Start AR Experience
              </button>
            )}

            {!isARSupported && (
              <p className="text-red-500">
                AR is not supported on your device. Try using a mobile device with AR capabilities.
              </p>
            )}
          </div>

          <div className="pt-4">
            <h4 className="text-lg font-semibold mb-2">Tips for AR Viewing:</h4>
            <ul className="text-gray-400 space-y-2">
              <li>• Find a well-lit area</li>
              <li>• Move around the product to see all angles</li>
              <li>• Try placing the product on different surfaces</li>
              <li>• Use the scale controls to adjust size</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARViewer; 