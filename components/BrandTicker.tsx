
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const BRANDS = [
  {
    name: "LUMIÈRE",
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "OBSIDIAN",
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 9L12 22L22 9L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 9L22 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "AETHER",
    logo: (
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 9C9.5 9 11 6 15 6C19 6 20 10 17 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 14C4 10 9 10 9.5 12C10 14 15 14 16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 17C7 17 10 19 13 18C16 17 17 15 17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
       </svg>
    )
  },
  {
    name: "VELVET",
    logo: (
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M4 6L12 20L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
         <path d="M4 6H20" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeOpacity="0.5"/>
       </svg>
    )
  },
  {
    name: "SILHOUETTE",
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 21C7 16 12 16 12 12C12 8 7 8 7 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 21C17 16 12 16 12 12C12 8 17 8 17 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    name: "NOCTURNE",
    logo: (
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
       </svg>
    )
  },
  {
    name: "ECLIPSE",
    logo: (
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
         <path d="M16 12A8 8 0 0 0 4.8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
       </svg>
    )
  },
  {
    name: "SOLSTICE",
    logo: (
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4.93 4.93L7.05 7.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16.95 16.95L19.07 19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7.05 16.95L4.93 19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19.07 4.93L16.95 7.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
       </svg>
    )
  }
];

const BrandTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#2E1065] py-8 overflow-hidden border-t border-purple-900/50">
      <div className="flex w-max animate-scroll">
        {[...BRANDS, ...BRANDS].map((brand, index) => (
          <div key={`${brand.name}-${index}`} className="flex items-center mx-12 md:mx-20 group">
             {/* Logo */}
            <div className="text-purple-300 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                {brand.logo}
            </div>
            
            {/* Name */}
            <span className="ml-4 text-white/60 font-serif text-lg md:text-xl tracking-[0.2em] uppercase whitespace-nowrap group-hover:text-white transition-colors cursor-default">
              {brand.name}
            </span>

            {/* Separator */}
            <div className="w-1.5 h-1.5 bg-[#6D28D9] rounded-full ml-16 md:ml-32 opacity-30 group-hover:opacity-60 transition-opacity"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandTicker;
