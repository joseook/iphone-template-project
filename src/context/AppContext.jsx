import React, { createContext, useContext, useState, useEffect } from 'react';
import { models, sizes } from '../constants';

// Create context
const AppContext = createContext();

// Custom hook for using the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  // State for user selections
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  
  // State for API data
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Method to update selected model
  const updateSelectedModel = (model) => {
    setSelectedModel(model);
  };

  // Method to update selected size
  const updateSelectedSize = (size) => {
    setSelectedSize(size);
  };

  // Method to fetch product data from API
  const fetchProductData = async () => {
    // Reset state
    setLoading(true);
    setError(null);
    
    try {
      // This is a placeholder for the API call
      // In a real implementation, we would make an actual fetch request
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - replace with actual API call later
      const mockData = {
        name: `iPhone 15 Pro ${selectedSize.label}`,
        color: selectedModel.title.split('in ')[1],
        price: selectedSize.value === 'small' ? 999 : 1199,
        storage: ['128GB', '256GB', '512GB', '1TB'],
        camera: '48MP main | 12MP ultra wide | 12MP telephoto',
        chip: 'A17 Pro chip',
        battery: 'Up to 23 hours video playback',
        availability: 'In Stock',
      };
      
      setProductData(mockData);
    } catch (err) {
      setError('Failed to fetch product data. Please try again.');
      console.error('Error fetching product data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch product data when selections change
  useEffect(() => {
    fetchProductData();
  }, [selectedModel, selectedSize]);

  // Context value
  const value = {
    selectedModel,
    selectedSize,
    productData,
    loading,
    error,
    updateSelectedModel,
    updateSelectedSize,
    fetchProductData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

