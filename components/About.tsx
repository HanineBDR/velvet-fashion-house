
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#F3E8FF]/50 dark:bg-[#1E0B4B]/50 transition-colors duration-500 backdrop-blur-sm">
      
      {/* Introduction / Story */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-16 md:gap-32">
            <div className="md:w-1/3 sticky top-32">
                {/* Decorative Bar */}
                <div className="w-24 h-1 bg-[#2E1065] dark:bg-[#E9D5FF] mb-8"></div>
                
                <h2 className="text-4xl md:text-7xl font-serif text-[#2E1065] dark:text-[#E9D5FF] leading-none mb-6">
                    Woven <br/> with <br/> <span className="italic text-[#6D28D9] dark:text-[#C4B5FD]">intention.</span>
                </h2>
            </div>
            
            <div className="md:w-2/3 max-w-2xl">
                <p className="text-lg md:text-xl text-[#4B5563] dark:text-[#D1D5DB] font-light leading-relaxed mb-8 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-[#2E1065] dark:first-letter:text-[#E9D5FF]">
                    Velvet was founded on a simple desire: to bring the drama and romance of haute couture into the modern wardrobe. We believe that what you wear is a form of armor, a way to present your truest self to the world.
                </p>
                <p className="text-lg md:text-xl text-[#4B5563] dark:text-[#D1D5DB] font-light leading-relaxed mb-8">
                    Our atelier works exclusively with family-owned mills in Italy and France. From the heavy drape of our silk to the deep pile of our signature cotton velvet, every fabric is chosen for its ability to age beautifully.
                </p>
                <img 
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200" 
                    alt="Velvet Atelier" 
                    className="w-full h-[400px] object-cover mt-12 shadow-2xl shadow-purple-900/10 dark:shadow-black/40"
                />
                <p className="text-sm font-medium uppercase tracking-widest text-[#6D28D9] dark:text-[#C4B5FD] mt-6 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-current"></span>
                    The Velvet Atelier, Milan
                </p>
            </div>
        </div>
      </div>

      {/* Philosophy Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200" 
             alt="Fabric Texture" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-[#2E1065]/10 dark:bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-white dark:bg-[#0F0518]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6D28D9] dark:text-[#C4B5FD] mb-6 flex items-center gap-3">
             <span className="w-6 h-[1px] bg-current"></span>
             Materiality
           </span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#2E1065] dark:text-[#E9D5FF] leading-tight">
             The touch of <br/> luxury.
           </h3>
           <p className="text-lg text-[#4B5563] dark:text-[#9CA3AF] font-light leading-relaxed mb-12 max-w-md">
             We reject fast fashion. Every Velvet garment is constructed with French seams, silk linings, and hand-finished hems. These are pieces designed to be passed down, not thrown away.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#2E1065] dark:bg-[#120429] text-white relative overflow-hidden">
           {/* Abstract decorative circle */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#6D28D9] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
           
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4B5FD] mb-6 flex items-center gap-3 relative z-10">
             <span className="w-6 h-[1px] bg-current"></span>
             The Palette
           </span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-white leading-tight relative z-10">
             Royal by nature.
           </h3>
           <p className="text-lg text-[#E9D5FF] font-light leading-relaxed mb-12 max-w-md relative z-10">
             Our signature palette is drawn from the mineral world—Amethyst, Obsidian, Sapphire. Deep, saturated tones that flatter every complexion and command attention without saying a word.
           </p>
        </div>
        <div className="relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200" 
             alt="Woman in purple dress" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
           />
        </div>
      </div>
    </section>
  );
};

export default About;
