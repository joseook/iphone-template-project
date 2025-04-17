import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import IPhone from './IPhone';
import Lights from './Lights';
import { Suspense } from 'react';
import Loader from './Loader';
import { motion } from 'framer-motion';

const ARViewer = ({ product }) => {
  const [isARSupported, setIsARSupported] = useState(false);
  const [isARActive, setIsARActive] = useState(false);
  const [isARChecking, setIsARChecking] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#1d1d1f');
  const controlRef = useRef();

  // iPhone model data for rendering
  const iPhoneModel = {
    title: `iPhone 15 Pro in ${selectedColor === '#1d1d1f' ? 'Black' : selectedColor === '#f5f5f7' ? 'Silver' : selectedColor === '#f5e6d3' ? 'Gold' : 'Blue'} Titanium`,
    color: [selectedColor, selectedColor, selectedColor],
    img: '/assets/images/white.jpg'
  };

  const colors = [
    { name: 'Space Black', value: '#1d1d1f' },
    { name: 'Silver', value: '#f5f5f7' },
    { name: 'Gold', value: '#f5e6d3' },
    { name: 'Blue', value: '#0071e3' }
  ];

  const checkARSupport = async () => {
    setIsARChecking(true);
    try {
      if ('xr' in navigator) {
        const supported = await navigator.xr.isSessionSupported('immersive-ar');
        setIsARSupported(supported);
      } else {
        setIsARSupported(false);
      }
    } catch (error) {
      console.error('Error checking AR support:', error);
      setIsARSupported(false);
    }
    setIsARChecking(false);
  };

  const startAR = async () => {
    if (isARSupported) {
      setIsARActive(true);
      // Simulate AR session with visual feedback
      setTimeout(() => {
        setIsARActive(false);
      }, 3000);
    }
  };

  return (
    <div className="w-full bg-gray-900 rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 3D Preview */}
        <div className="h-[500px] relative">
          <Canvas
            camera={{ position: [0, 0, 4], fov: 50 }}
            shadows
            className="w-full h-full rounded-lg overflow-hidden"
          >
            <ambientLight intensity={0.3} />
            <Lights />
            <OrbitControls
              ref={controlRef}
              enableZoom={true}
              enablePan={false}
              rotateSpeed={0.5}
            />
            <Suspense fallback={<Loader />}>
              <IPhone
                scale={[15, 15, 15]}
                item={iPhoneModel}
              />
            </Suspense>
            <Environment preset="city" />
          </Canvas>

          {isARActive && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white rounded-lg">
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="mb-4"
                >
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
                  </svg>
                </motion.div>
                <p className="text-xl font-bold">AR Session Active</p>
                <p className="text-sm mt-2">Move your device to scan the environment</p>
              </div>
            </div>
          )}

          <div className="absolute bottom-4 left-4 bg-black/70 p-2 rounded text-sm">
            Drag to rotate • Pinch to zoom
          </div>
        </div>

        {/* AR Controls */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">View in Your Space</h3>
          <p className="text-gray-400">
            See how {product?.name || 'iPhone 15 Pro'} looks in your environment using augmented reality.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Choose your finish</h3>
              <div className="flex gap-4">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-12 h-12 rounded-full border-2 ${selectedColor === color.value ? 'border-white' : 'border-gray-600'
                      }`}
                    style={{ backgroundColor: color.value }}
                    aria-label={color.name}
                  >
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
              </div>
              <p className="text-gray-400 mt-2">{selectedColor === '#1d1d1f' ? 'Space Black' : selectedColor === '#f5f5f7' ? 'Silver' : selectedColor === '#f5e6d3' ? 'Gold' : 'Blue'} Titanium</p>
            </div>

            <button
              onClick={checkARSupport}
              disabled={isARChecking}
              className="w-full bg-white text-black py-3 rounded-full hover:bg-gray-100 transition-colors font-bold disabled:opacity-70"
            >
              {isARChecking ? 'Checking AR Support...' : 'Check AR Support'}
            </button>

            {isARSupported && (
              <button
                onClick={startAR}
                disabled={isARActive}
                className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors font-bold disabled:opacity-70"
              >
                {isARActive ? 'AR Session Active' : 'View in AR'}
              </button>
            )}

            {isARChecking === false && !isARSupported && (
              <div className="p-4 bg-red-900/40 rounded-lg">
                <p className="text-red-400 font-medium">
                  AR is not supported on your device. Try using a mobile device with AR capabilities.
                </p>
              </div>
            )}
          </div>

          <div className="pt-4 mt-6 border-t border-gray-700">
            <h4 className="text-lg font-semibold mb-4">Tips for AR Viewing:</h4>
            <ul className="text-gray-400 space-y-3">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Find a well-lit area for best results</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Move around to see the product from all angles</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Tap on surfaces to place the iPhone</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Pinch to resize the model once placed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARViewer; 