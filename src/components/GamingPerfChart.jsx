import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';
import { Bar, Radar } from 'react-chartjs-2';
import { motion } from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const mockGameData = [
  {
    name: 'Genshin Impact',
    fps: 120,
    resolution: '2160p',
    batteryLife: 4.5,
    graphicsQuality: 95,
    loadTime: 7
  },
  {
    name: 'Call of Duty Mobile',
    fps: 120,
    resolution: '2160p',
    batteryLife: 5.2,
    graphicsQuality: 98,
    loadTime: 5
  },
  {
    name: 'PUBG Mobile',
    fps: 90,
    resolution: '1440p',
    batteryLife: 4.8,
    graphicsQuality: 92,
    loadTime: 8
  },
  {
    name: 'Asphalt 9',
    fps: 120,
    resolution: '2160p',
    batteryLife: 4.2,
    graphicsQuality: 96,
    loadTime: 6
  },
];

const competitorData = {
  'iPhone 15 Pro': {
    fps: 100,
    graphicsQuality: 95,
    thermalEfficiency: 92,
    loadTime: 94,
    batteryLife: 88
  },
  'Flagship Android': {
    fps: 85,
    graphicsQuality: 83,
    thermalEfficiency: 75,
    loadTime: 80,
    batteryLife: 78
  },
  'Last Gen iPhone': {
    fps: 75,
    graphicsQuality: 80,
    thermalEfficiency: 85,
    loadTime: 82,
    batteryLife: 84
  }
};

const GamingPerfChart = () => {
  // FPS e bateria por jogo
  const performanceChartData = {
    labels: mockGameData.map(game => game.name),
    datasets: [
      {
        label: 'FPS',
        data: mockGameData.map(game => game.fps),
        backgroundColor: 'rgba(255, 59, 48, 0.7)',
        borderColor: 'rgba(255, 59, 48, 1)',
        borderWidth: 2,
        borderRadius: 8,
        barPercentage: 0.6,
      },
      {
        label: 'Duração da Bateria (horas)',
        data: mockGameData.map(game => game.batteryLife),
        backgroundColor: 'rgba(0, 122, 255, 0.7)',
        borderColor: 'rgba(0, 122, 255, 1)',
        borderWidth: 2,
        borderRadius: 8,
        barPercentage: 0.6,
      }
    ],
  };

  const performanceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            weight: 'bold'
          },
          color: '#ffffff'
        }
      },
      title: {
        display: true,
        text: 'Desempenho de Jogos no iPhone 15 Pro',
        font: {
          size: 18,
          weight: 'bold'
        },
        color: '#ffffff',
        padding: {
          top: 10,
          bottom: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 14
        },
        padding: 12,
        cornerRadius: 8
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 12
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 12
          }
        }
      }
    }
  };

  // Comparação com competidores (gráfico de radar)
  const radarChartData = {
    labels: ['FPS', 'Qualidade Gráfica', 'Eficiência Térmica', 'Tempo de Carregamento', 'Duração da Bateria'],
    datasets: [
      {
        label: 'iPhone 15 Pro',
        data: [
          competitorData['iPhone 15 Pro'].fps,
          competitorData['iPhone 15 Pro'].graphicsQuality,
          competitorData['iPhone 15 Pro'].thermalEfficiency,
          competitorData['iPhone 15 Pro'].loadTime,
          competitorData['iPhone 15 Pro'].batteryLife,
        ],
        backgroundColor: 'rgba(255, 59, 48, 0.2)',
        borderColor: 'rgba(255, 59, 48, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 59, 48, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 59, 48, 1)',
        pointRadius: 5,
      },
      {
        label: 'Flagship Android',
        data: [
          competitorData['Flagship Android'].fps,
          competitorData['Flagship Android'].graphicsQuality,
          competitorData['Flagship Android'].thermalEfficiency,
          competitorData['Flagship Android'].loadTime,
          competitorData['Flagship Android'].batteryLife,
        ],
        backgroundColor: 'rgba(0, 122, 255, 0.2)',
        borderColor: 'rgba(0, 122, 255, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(0, 122, 255, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0, 122, 255, 1)',
        pointRadius: 5,
      },
      {
        label: 'iPhone da Geração Anterior',
        data: [
          competitorData['Last Gen iPhone'].fps,
          competitorData['Last Gen iPhone'].graphicsQuality,
          competitorData['Last Gen iPhone'].thermalEfficiency,
          competitorData['Last Gen iPhone'].loadTime,
          competitorData['Last Gen iPhone'].batteryLife,
        ],
        backgroundColor: 'rgba(52, 199, 89, 0.2)',
        borderColor: 'rgba(52, 199, 89, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(52, 199, 89, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(52, 199, 89, 1)',
        pointRadius: 5,
      }
    ],
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        pointLabels: {
          color: '#ffffff',
          font: {
            size: 12,
            weight: 'bold'
          }
        },
        ticks: {
          backdropColor: 'transparent',
          color: '#ffffff',
          showLabelBackdrop: false,
          z: 100
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            weight: 'bold'
          },
          color: '#ffffff'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 14
        },
        padding: 12,
        cornerRadius: 8
      }
    }
  };

  return (
    <div className="w-full rounded-xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 p-6 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-6">Desempenho por Jogo</h3>
          <div className="h-[400px]">
            <Bar data={performanceChartData} options={performanceOptions} />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {mockGameData.map((game, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold mb-2">{game.name}</h4>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>Resolução: {game.resolution}</p>
                  <p>Qualidade: {game.graphicsQuality}%</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900 p-6 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-6">Comparação com Concorrentes</h3>
          <div className="h-[450px]">
            <Radar data={radarChartData} options={radarOptions} />
          </div>
          <div className="mt-6">
            <p className="text-gray-400 mb-4">O iPhone 15 Pro supera os dispositivos da concorrência em todos os aspectos de desempenho de jogos, especialmente em FPS e qualidade gráfica graças ao novo chip A17 Pro.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Até 30% mais FPS que a concorrência em jogos exigentes</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Ray tracing em tempo real para efeitos de iluminação realistas</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Sistema de refrigeração avançado para manter o desempenho por mais tempo</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GamingPerfChart;