
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, isFavorite, onToggleFavorite }) => {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <div className="group flex flex-col gap-6 cursor-pointer relative" onClick={() => onClick(product)}>
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#F3E8FF] dark:bg-[#1E0B4B] shadow-[0_15px_35px_-5px_rgba(46,16,101,0.4)] dark:shadow-[0_15px_35px_-5px_rgba(109,40,217,0.2)] transition-shadow duration-300 group-hover:shadow-[0_20px_40px_-5px_rgba(46,16,101,0.6)] dark:group-hover:shadow-[0_0_30px_rgba(196,181,253,0.3)]">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        />
        
        {/* Sale Badge */}
        {hasDiscount && (
            <div className="absolute top-0 left-0 bg-[#6D28D9] dark:bg-[#C4B5FD] text-white dark:text-[#2E1065] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 z-20 shadow-[0_0_15px_rgba(109,40,217,0.5)]">
                Sale
            </div>
        )}

        {/* Favorite Button */}
        <button 
            onClick={(e) => onToggleFavorite(e, product.id)}
            className="absolute top-3 right-3 z-20 p-2 rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-colors focus:outline-none"
        >
            {isFavorite ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#6D28D9] dark:text-[#C4B5FD] drop-shadow-md">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white drop-shadow-md hover:scale-110 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            )}
        </button>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#2E1065]/10 dark:bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <button className="bg-white dark:bg-[#1E0B4B] text-[#2E1065] dark:text-[#E9D5FF] px-8 py-3 text-xs uppercase tracking-widest font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.3)] dark:shadow-[0_0_20px_rgba(196,181,253,0.3)]">
                View Item
            </button>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-serif text-[#2E1065] dark:text-[#E9D5FF] mb-2 group-hover:text-[#6D28D9] dark:group-hover:text-[#C4B5FD] transition-colors shadow-purple-200/50">{product.name}</h3>
        <p className="text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF] mb-3 uppercase tracking-widest">{product.category}</p>
        
        {/* Price Display */}
        <div className="flex justify-center items-baseline gap-2">
            {hasDiscount && (
                <span className="text-sm text-gray-400 dark:text-gray-600 line-through">${product.originalPrice}</span>
            )}
            <span className={`text-base font-medium ${hasDiscount ? 'text-[#6D28D9] dark:text-[#C4B5FD]' : 'text-[#2E1065] dark:text-[#E9D5FF]'}`}>
                ${product.price}
            </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
