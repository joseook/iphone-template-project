import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { models, sizes } from '../constants';
import GamingPerfChart from '../components/GamingPerfChart';

// Mock data - will be replaced with API data
const mockGames = [
  { id: 1, name: 'Honkai: Star Rail', fps: 60, resolution: '1440p', batteryLife: '6.2h' },
  { id: 2, name: 'Genshin Impact', fps: 57, resolution: '1200p', batteryLife: '4.8h' },
  { id: 3, name: 'Call of Duty Mobile', fps: 120, resolution: '1080p', batteryLife: '5.5h' },
];

const IPhonePage = () => {
  const { selectedModel, selectedSize, updateSelectedModel, updateSelectedSize, productData, loading, error } = useAppContext();
  const [selectedGame, setSelectedGame] = useState(mockGames[0]);

  if (loading) return <div className="h-screen flex items-center justify-center">Loading iPhone data...</div>;
  if (error) return <div className="h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-5">
        <h1 className="text-5xl font-semibold mb-8">{productData?.name}</h1>
        <img 
          src={selectedModel.img} 
          alt={selectedModel.title} 
          className="w-[500px] h-auto max-w-full"
        />
      </section>

      {/* Gaming Performance Dashboard */}
      <section className="py-16 px-5 sm:px-10">
        <div className="screen-max-width">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12">
            Gaming Performance. Reimagined.
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Game Selection */}
            <div>
              <h3 className="text-2xl mb-6">Game Performance</h3>
              <select 
                className="bg-gray-800 p-3 rounded-lg w-full mb-8"
                value={selectedGame.id}
                onChange={(e) => setSelectedGame(mockGames.find(g => g.id === +e.target.value))}
              >
                {mockGames.map(game => (
                  <option key={game.id} value={game.id}>{game.name}</option>
                ))}
              </select>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 p-6 rounded-xl">
                  <h4 className="text-gray-400 mb-2">Average FPS</h4>
                  <p className="text-3xl">{selectedGame.fps}</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl">
                  <h4 className="text-gray-400 mb-2">Resolution</h4>
                  <p className="text-xl">{selectedGame.resolution}</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl">
                  <h4 className="text-gray-400 mb-2">Battery Life</h4>
                  <p className="text-xl">{selectedGame.batteryLife}</p>
                </div>
              </div>
            </div>

            {/* Performance Chart Placeholder */}
            <div className="bg-gray-900 rounded-xl p-6">
              <GamingPerfChart game={selectedGame} />
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-16 px-5 sm:px-10 bg-gray-900">
        <div className="screen-max-width">
          <h2 className="text-3xl mb-8">Specifications</h2>
          {productData && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-gray-400">Chip</h3>
                <p>{productData.chip}</p>
              </div>
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-gray-400">Camera</h3>
                <p>{productData.camera}</p>
              </div>
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-gray-400">Storage Options</h3>
                <p>{productData.storage.join(', ')}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default IPhonePage;


import React from 'react';

const IPhonePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-4xl font-bold mb-4">iPhone</h1>
      <p className="text-xl max-w-2xl text-center">
        Discover the complete iPhone lineup with comprehensive information about each model.
        Compare features, specifications, and find the perfect iPhone for your needs.
      </p>
      <div className="mt-8 p-4 bg-gray-800 rounded-lg">
        <p>This page is under development. Check back soon for more features!</p>
      </div>
    </div>
  );
};

export default IPhonePage;

