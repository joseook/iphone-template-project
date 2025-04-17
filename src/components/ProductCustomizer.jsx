import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import IPhone from './IPhone';
import Lights from './Lights';
import { Suspense } from 'react';
import Loader from './Loader';

const ProductCustomizer = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState('#1d1d1f');
  const [selectedStorage, setSelectedStorage] = useState('128GB');
  const [selectedModel, setSelectedModel] = useState('Pro');
  const controlRef = useRef();

  // iPhone model data for rendering
  const iPhoneModel = {
    title: `iPhone 15 ${selectedModel} in ${selectedColor === '#1d1d1f' ? 'Black' : selectedColor === '#f5f5f7' ? 'Silver' : selectedColor === '#f5e6d3' ? 'Gold' : 'Blue'} Titanium`,
    color: [selectedColor, selectedColor, selectedColor],
    img: '/assets/images/white.jpg'
  };

  const colors = [
    { name: 'Space Black', value: '#1d1d1f' },
    { name: 'Silver', value: '#f5f5f7' },
    { name: 'Gold', value: '#f5e6d3' },
    { name: 'Blue', value: '#0071e3' }
  ];

  const modelOptions = ['Pro', 'Pro Max', 'Standard'];
  const storageOptions = ['128GB', '256GB', '512GB', '1TB'];

  // Calculate price based on selections
  const getPrice = () => {
    let basePrice = product?.price || 999;

    // Add for Pro Max model
    if (selectedModel === 'Pro Max') basePrice += 100;
    // Subtract for Standard model
    if (selectedModel === 'Standard') basePrice -= 200;

    // Add for storage
    if (selectedStorage === '256GB') basePrice += 100;
    if (selectedStorage === '512GB') basePrice += 300;
    if (selectedStorage === '1TB') basePrice += 500;

    return basePrice;
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
          <div className="absolute bottom-4 left-4 bg-black/70 p-2 rounded text-sm">
            Drag to rotate • Pinch to zoom
          </div>
        </div>

        {/* Customization Options */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Choose your model</h3>
            <div className="flex flex-wrap gap-4">
              {modelOptions.map((model) => (
                <button
                  key={model}
                  onClick={() => setSelectedModel(model)}
                  className={`px-4 py-2 rounded-full border-2 ${selectedModel === model
                    ? 'border-white bg-white text-black'
                    : 'border-gray-600 text-white'
                    }`}
                >
                  iPhone 15 {model}
                </button>
              ))}
            </div>
          </div>

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

          <div>
            <h3 className="text-xl font-bold mb-4">Storage</h3>
            <div className="flex flex-wrap gap-4">
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

          <div className="pt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-2xl font-bold">${getPrice()}</span>
            </div>
            <button className="w-full bg-white text-black py-3 rounded-full hover:bg-gray-100 transition-colors font-bold">
              Add to Cart
            </button>
            <p className="text-center mt-2 text-gray-400 text-sm">Free shipping. Delivery times vary by location.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCustomizer; 