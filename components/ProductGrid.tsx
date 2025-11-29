
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from './ProductCard';

const categories = ['All', 'Dresses', 'Outerwear', 'Bags', 'Shoes', 'Accessories'];

interface ProductGridProps {
  onProductClick: (product: Product) => void;
  favorites: string[];
  onToggleFavorite: (productId: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick, favorites, onToggleFavorite }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Calculate price bounds from actual products
  const minPrice = Math.min(...PRODUCTS.map(p => p.price));
  const maxPrice = Math.max(...PRODUCTS.map(p => p.price));
  
  // State for the slider handles
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), priceRange[1] - 50); // Keep 50 unit gap
    setPriceRange([value, priceRange[1]]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), priceRange[0] + 50); // Keep 50 unit gap
    setPriceRange([priceRange[0], value]);
  };

  const filteredProducts = useMemo(() => {
    let result = activeCategory === 'All' 
      ? [...PRODUCTS] 
      : PRODUCTS.filter(p => p.category === activeCategory);

    // Apply Price Filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort by price low to high by default for clean display
    result.sort((a, b) => a.price - b.price);

    return result;
  }, [activeCategory, priceRange]);

  // Calculate percentage for slider track background
  const getPercent = (value: number) => Math.round(((value - minPrice) / (maxPrice - minPrice)) * 100);

  const handleFavoriteClick = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    onToggleFavorite(productId);
  };

  return (
    <section id="products" className="py-24 px-6 md:px-12 bg-transparent transition-colors duration-500">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6D28D9] dark:text-[#A78BFA] drop-shadow-sm">Latest Arrivals</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#2E1065] dark:text-[#E9D5FF] drop-shadow-md">The Collection</h2>
          
          {/* Controls Container */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-5xl gap-12 pt-12 border-b border-gray-100 dark:border-purple-900/20 pb-12">
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-6 md:gap-8 justify-center md:justify-start">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm uppercase tracking-widest pb-2 transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'text-[#2E1065] dark:text-[#E9D5FF] font-bold border-b-2 border-[#6D28D9] dark:border-[#A78BFA]' 
                      : 'text-[#9CA3AF] dark:text-[#6B7280] hover:text-[#6D28D9] dark:hover:text-[#C4B5FD] border-b-2 border-transparent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Price Range Slider */}
            <div className="w-full md:w-64 flex flex-col gap-4">
               <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-[#2E1065] dark:text-[#E9D5FF]">
                  <span>Filter Price</span>
                  <span>${priceRange[0]} — ${priceRange[1]}</span>
               </div>
               
               <div className="relative w-full h-1 bg-gray-100 dark:bg-purple-900/30 rounded-full mt-2">
                  {/* Track Background */}
                  <div 
                    className="absolute h-full bg-[#6D28D9] dark:bg-[#A78BFA] rounded-full opacity-30"
                    style={{ 
                        left: `${getPercent(priceRange[0])}%`, 
                        width: `${getPercent(priceRange[1]) - getPercent(priceRange[0])}%` 
                    }}
                  />
                  
                  {/* Min Input */}
                  <input 
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[0]}
                    onChange={handleMinChange}
                    className="range-slider-input"
                  />
                  
                  {/* Max Input */}
                  <input 
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[1]}
                    onChange={handleMaxChange}
                    className="range-slider-input"
                  />
               </div>
            </div>

          </div>
        </div>

        {/* Large Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 min-h-[500px]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={onProductClick}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={handleFavoriteClick}
              />
            ))
          ) : (
             <div className="col-span-full flex flex-col items-center justify-center text-center py-20 opacity-50">
                <p className="font-serif text-2xl text-[#2E1065] dark:text-[#E9D5FF] mb-2">No items found</p>
                <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF]">Try adjusting your price range or category.</p>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
