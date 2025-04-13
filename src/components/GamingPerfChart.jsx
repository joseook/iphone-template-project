import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const mockGameData = [
  { name: 'Genshin Impact', fps: 120, resolution: '2160p', batteryLife: '4.5h' },
  { name: 'Call of Duty', fps: 90, resolution: '1440p', batteryLife: '5.2h' },
  { name: 'PUBG Mobile', fps: 120, resolution: '2160p', batteryLife: '4.8h' },
  { name: 'Fortnite', fps: 90, resolution: '1440p', batteryLife: '5.0h' },
  { name: 'Asphalt 9', fps: 120, resolution: '2160p', batteryLife: '4.2h' },
];

const GamingPerfChart = () => {
  const chartData = {
    labels: mockGameData.map(game => game.name),
    datasets: [
      {
        label: 'FPS',
        data: mockGameData.map(game => game.fps),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Battery Life (hours)',
        data: mockGameData.map(game => parseFloat(game.batteryLife)),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'iPhone 15 Pro Gaming Performance',
      },
    },
  };

  return (
    <div className="w-full h-[500px] bg-black rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-[400px]">
          <Bar data={chartData} options={options} />
        </div>
        <div className="h-[400px]">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            {mockGameData.map((game, index) => (
              <group key={game.name} position={[index * 2 - 4, 0, 0]}>
                <mesh>
                  <boxGeometry args={[1, game.fps / 60, 1]} />
                  <meshStandardMaterial color="#ff3b30" />
                </mesh>
                <Text
                  position={[0, -2, 0]}
                  fontSize={0.3}
                  color="white"
                  anchorX="center"
                  anchorY="middle"
                >
                  {game.name}
                </Text>
              </group>
            ))}
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default GamingPerfChart;