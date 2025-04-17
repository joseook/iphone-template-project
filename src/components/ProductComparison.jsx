import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ProductComparison = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState(products.slice(0, 3));

  // Certifique-se de que temos até 3 produtos para comparar
  const displayProducts = selectedProducts.slice(0, 3);

  // Categorias de comparação
  const comparisonCategories = [
    {
      name: 'Processador',
      getValue: (product) => {
        if (product.name.includes('Pro')) {
          return 'A17 Pro';
        } else if (product.name.includes('15')) {
          return 'A16 Bionic';
        }
        return 'A15 Bionic';
      }
    },
    {
      name: 'Tela',
      getValue: (product) => {
        if (product.name.includes('Pro Max')) {
          return '6.7" Super Retina XDR';
        } else if (product.name.includes('Pro')) {
          return '6.1" Super Retina XDR';
        } else if (product.name.includes('Plus')) {
          return '6.7" Super Retina XDR';
        }
        return '6.1" Super Retina XDR';
      }
    },
    {
      name: 'Câmera',
      getValue: (product) => {
        if (product.name.includes('Pro')) {
          return 'Sistema Pro de câmera tripla 48MP';
        }
        return 'Sistema de câmera dupla 12MP';
      }
    },
    {
      name: 'Bateria',
      getValue: (product) => {
        if (product.name.includes('Pro Max')) {
          return 'Até 29h de reprodução de vídeo';
        } else if (product.name.includes('Pro')) {
          return 'Até 23h de reprodução de vídeo';
        } else if (product.name.includes('Plus')) {
          return 'Até 26h de reprodução de vídeo';
        }
        return 'Até 20h de reprodução de vídeo';
      }
    },
    {
      name: 'Armazenamento',
      getValue: (product) => {
        if (product.name.includes('Pro')) {
          return '128GB / 256GB / 512GB / 1TB';
        }
        return '128GB / 256GB / 512GB';
      }
    },
    {
      name: 'Face ID',
      getValue: (product) => 'Sim',
      isBoolean: true
    },
    {
      name: 'Material',
      getValue: (product) => {
        if (product.name.includes('Pro')) {
          return 'Titânio';
        }
        return 'Alumínio';
      }
    },
    {
      name: 'USB-C',
      getValue: (product) => 'Sim',
      isBoolean: true
    },
    {
      name: 'MagSafe',
      getValue: (product) => 'Sim',
      isBoolean: true
    },
    {
      name: 'Dynamic Island',
      getValue: (product) => 'Sim',
      isBoolean: true
    },
    {
      name: 'Chip Ultra Wideband',
      getValue: (product) => 'Sim',
      isBoolean: true
    },
    {
      name: 'Botão de Ação',
      getValue: (product) => {
        if (product.name.includes('Pro')) {
          return 'Sim';
        }
        return 'Não';
      },
      isBoolean: true
    }
  ];

  const handleProductSelect = (productId) => {
    const product = products.find(p => p.id === productId);

    // Se o produto já está selecionado, remova-o
    if (selectedProducts.some(p => p.id === productId)) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
    }
    // Se não está selecionado e temos menos de 3 produtos, adicione-o
    else if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, product]);
    }
    // Se já temos 3 produtos, substitua o último
    else {
      const newSelected = [...selectedProducts];
      newSelected[2] = product;
      setSelectedProducts(newSelected);
    }
  };

  return (
    <div className="w-full bg-gray-900 rounded-xl p-6">
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Selecione os modelos para comparar</h3>
        <div className="flex flex-wrap gap-3">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => handleProductSelect(product.id)}
              className={`px-4 py-2 rounded-full border-2 ${selectedProducts.some(p => p.id === product.id)
                  ? 'border-white bg-white text-black'
                  : 'border-gray-700 text-white hover:border-gray-500'
                }`}
            >
              {product.name}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-4 bg-gray-800 rounded-tl-lg"></th>
              {displayProducts.map((product, index) => (
                <th
                  key={product.id}
                  className={`p-4 bg-gray-800 text-center ${index === displayProducts.length - 1 ? 'rounded-tr-lg' : ''}`}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-full mb-2"
                      style={{ backgroundColor: product.color }}
                    ></div>
                    <h3 className="font-bold">{product.name}</h3>
                    <p className="text-gray-400">${product.price}</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonCategories.map((category, categoryIndex) => (
              <tr key={category.name} className={categoryIndex % 2 === 0 ? 'bg-gray-800/50' : ''}>
                <td className="p-4 font-medium">{category.name}</td>
                {displayProducts.map((product) => {
                  const value = category.getValue(product);
                  return (
                    <td key={`${product.id}-${category.name}`} className="p-4 text-center">
                      {category.isBoolean ? (
                        value === 'Sim' ? (
                          <CheckIcon className="w-6 h-6 mx-auto text-green-500" />
                        ) : (
                          <XMarkIcon className="w-6 h-6 mx-auto text-red-500" />
                        )
                      ) : (
                        <span>{value}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="p-4 bg-gray-800 rounded-bl-lg"></td>
              {displayProducts.map((product, index) => (
                <td
                  key={product.id}
                  className={`p-4 bg-gray-800 text-center ${index === displayProducts.length - 1 ? 'rounded-br-lg' : ''}`}
                >
                  <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-100 transition-colors">
                    Comprar
                  </button>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ProductComparison; 