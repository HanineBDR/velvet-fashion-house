
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden my-24 group cursor-pointer shadow-2xl bg-black">
      {/* Background Video - Cinematic Midnight Theme */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-[3s] ease-in-out group-hover:scale-105"
        poster="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=2000"
      >
        <source src="https://videos.pexels.com/video-files/7653556/7653556-uhd_2160_1440_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Visibility Layer - Stronger Dark Scrim for text readability */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-700"></div>
      
      {/* Gradient for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0518] via-transparent to-[#0F0518]/30 opacity-100"></div>
      
      {/* Content - Centered for better visibility */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-20">
        <div className="animate-fade-in-up flex flex-col items-center max-w-4xl mx-auto">
            
            <div className="mb-8 flex items-center gap-6">
                <span className="h-[1px] w-12 md:w-20 bg-white/70"></span>
                <span className="text-white text-xs font-bold uppercase tracking-[0.4em] drop-shadow-lg">
                    Exclusive Drop
                </span>
                <span className="h-[1px] w-12 md:w-20 bg-white/70"></span>
            </div>

            <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-2 leading-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                Midnight
            </h2>
            <h2 className="text-5xl md:text-7xl font-serif italic text-[#C4B5FD] mb-10 leading-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] -mt-2 md:-mt-4">
                Collection
            </h2>
            
            <p className="text-gray-100 text-lg md:text-xl font-light mb-12 max-w-lg leading-relaxed drop-shadow-md">
                A curation of deep violets and obsidian blacks. <br/>
                Defined by darkness, refined by light.
            </p>
            
            <button className="group relative px-16 py-5 bg-white text-[#0F0518] text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#C4B5FD] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(196,181,253,0.5)]">
                View The Edit
            </button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
