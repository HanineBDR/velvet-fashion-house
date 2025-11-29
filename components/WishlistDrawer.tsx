
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (id: string) => void;
  onMoveToBag: (product: Product) => void;
}

const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ isOpen, onClose, items, onRemoveItem, onMoveToBag }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-[#2E1065]/20 dark:bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-[450px] bg-white dark:bg-[#05020a] z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out border-l border-purple-100 dark:border-purple-900/20 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-purple-900/20">
          <h2 className="text-xl font-serif text-[#2E1065] dark:text-[#E9D5FF]">Your Wishlist ({items.length})</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-[#2E1065] dark:hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-[#6D28D9] dark:text-[#C4B5FD]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <p className="font-light text-[#4B5563] dark:text-[#9CA3AF]">Your wishlist is empty.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 animate-fade-in-up">
                <div className="w-24 h-32 bg-[#F3E8FF] dark:bg-[#1E0B4B] flex-shrink-0 relative overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  {item.originalPrice && item.originalPrice > item.price && (
                     <div className="absolute top-0 left-0 bg-[#6D28D9] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1">
                        Sale
                     </div>
                  )}
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                        <h3 className="font-serif text-[#2E1065] dark:text-[#E9D5FF] text-lg leading-tight">{item.name}</h3>
                    </div>
                    <div className="flex items-baseline gap-2 mt-1">
                        {item.originalPrice && item.originalPrice > item.price && (
                            <span className="text-xs text-gray-400 line-through">${item.originalPrice}</span>
                        )}
                        <span className="text-sm font-medium text-[#2E1065] dark:text-[#E9D5FF]">${item.price}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-xs text-[#9CA3AF] hover:text-red-500 transition-colors underline underline-offset-4"
                      >
                        Remove
                      </button>
                      <button 
                        onClick={() => onMoveToBag(item)}
                        className="text-xs font-bold uppercase tracking-widest text-[#6D28D9] dark:text-[#C4B5FD] hover:text-[#2E1065] dark:hover:text-white transition-colors border border-[#6D28D9] dark:border-[#C4B5FD] px-4 py-2 hover:bg-[#F3E8FF] dark:hover:bg-purple-900/30"
                      >
                        Add to Bag
                      </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistDrawer;
