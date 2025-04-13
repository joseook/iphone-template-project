import axios from 'axios';

const RAWG_API_KEY = 'YOUR_RAWG_API_KEY'; // Move this to .env file in production
const RAWG_BASE_URL = 'https://api.rawg.io/api';

export const fetchGames = async () => {
  try {
    const response = await axios.get(`${RAWG_BASE_URL}/games`, {
      params: {
        key: RAWG_API_KEY,
        platforms: '21', // iOS platform ID
        ordering: '-rating',
        page_size: 10
      }
    });

    return response.data.results.map(game => ({
      id: game.id,
      name: game.name,
      image: game.background_image,
      rating: game.rating,
      // Simulated performance metrics since RAWG doesn't provide these
      performance: {
        fps: Math.floor(Math.random() * (120 - 30) + 30),
        resolution: ['1080p', '1440p', '2160p'][Math.floor(Math.random() * 3)],
        batteryLife: (Math.random() * (8 - 2) + 2).toFixed(1) + 'h'
      }
    }));
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
};

export const fetchGameDetails = async (gameId) => {
  try {
    const response = await axios.get(`${RAWG_BASE_URL}/games/${gameId}`, {
      params: {
        key: RAWG_API_KEY
      }
    });

    return {
      ...response.data,
      performance: {
        fps: Math.floor(Math.random() * (120 - 30) + 30),
        resolution: ['1080p', '1440p', '2160p'][Math.floor(Math.random() * 3)],
        batteryLife: (Math.random() * (8 - 2) + 2).toFixed(1) + 'h'
      }
    };
  } catch (error) {
    console.error('Error fetching game details:', error);
    throw error;
  }
};