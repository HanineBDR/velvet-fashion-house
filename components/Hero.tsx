
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Manual scroll calculation to account for fixed header
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError in restricted environments
      }
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#2E1065]">
      
      {/* Background Video - Cinematic Fashion */}
      <div className="absolute inset-0 w-full h-full">
        <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover scale-105"
            poster="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=2000"
        >
            {/* High-quality Pexels Fashion Video (Woman in Black/Purple atmosphere) */}
            <source src="https://videos.pexels.com/video-files/6981413/6981413-uhd_2160_1440_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        
        {/* Deep Violet Overlay for brand tint */}
        <div className="absolute inset-0 bg-[#2E1065]/50 mix-blend-multiply"></div>
        {/* Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E1065] via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="animate-fade-in-up w-full md:w-2/3 lg:w-1/2 flex flex-col items-center">
          
          {/* Lavender Logo - Animated */}
          <div className="mb-8 p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(233,213,255,0.2)] hover:scale-105 transition-transform duration-500">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E9D5FF] opacity-90">
                <path className="animate-draw-path delay-0" d="M12 21V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path className="animate-draw-path delay-100" d="M12 6C12 5 13 4 13 4C13 4 14 5 14 6C14 7 13 8 12 8C11 8 10 7 10 6C10 5 11 4 11 4C11 4 12 5 12 6Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.5"/>
                <path className="animate-draw-path delay-300" d="M12 10C12 10 14.5 9.5 15 10.5C15.5 11.5 14 12 13 12.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path className="animate-draw-path delay-500" d="M12 12C12 12 9.5 11.5 9 12.5C8.5 13.5 10 14 11 14.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path className="animate-draw-path delay-700" d="M12 14C12 14 14.5 13.5 15 14.5C15.5 15.5 14 16 13 16.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path className="animate-draw-path delay-1000" d="M12 16C12 16 9.5 15.5 9 16.5C8.5 17.5 10 18 11 18.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>

          <span className="block text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/90 mb-8 backdrop-blur-sm bg-white/10 px-6 py-2 rounded-full mx-auto w-fit border border-white/20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Fall / Winter 2025
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-normal text-white tracking-tight mb-8 drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Velvet <span className="italic text-[#E9D5FF]">&</span> Vine
          </h1>
          <p className="text-lg md:text-xl text-[#E9D5FF] font-light leading-relaxed mb-12 text-shadow-sm max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Where heritage craftsmanship meets modern silhouette. <br/>
            Drape yourself in the color of kings.
          </p>
          
          <a 
            href="#products" 
            onClick={(e) => handleNavClick(e, 'products')}
            className="group relative px-12 py-5 bg-white text-[#2E1065] rounded-none text-sm font-bold uppercase tracking-widest hover:bg-[#F3E8FF] transition-all duration-500 overflow-hidden shadow-xl inline-block animate-fade-in-up" style={{ animationDelay: '0.8s' }}
          >
            <span className="relative z-10">Discover Collection</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
