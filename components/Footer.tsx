
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-[#2E1065] pt-24 pb-12 px-6 text-[#E9D5FF]">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4">
          <h4 className="text-3xl font-serif text-white mb-6">Velvet</h4>
          <p className="max-w-xs font-light leading-relaxed text-purple-200/80">
            Defining modern elegance through heritage craftsmanship.
            Designed in Milan, worn worldwide.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold text-white mb-6 tracking-wide text-xs uppercase">Collection</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-white transition-colors underline-offset-4 hover:underline">New Arrivals</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-white transition-colors underline-offset-4 hover:underline">Dresses</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-white transition-colors underline-offset-4 hover:underline">Outerwear</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-white transition-colors underline-offset-4 hover:underline">Accessories</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-bold text-white mb-6 tracking-wide text-xs uppercase">Maison</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-white transition-colors underline-offset-4 hover:underline">Our Story</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-white transition-colors underline-offset-4 hover:underline">Atelier</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-white transition-colors underline-offset-4 hover:underline">Journal</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-bold text-white mb-6 tracking-wide text-xs uppercase">Newsletter</h4>
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="email@address.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
              className="bg-transparent border-b border-purple-400 py-2 text-lg outline-none focus:border-white transition-colors placeholder-purple-400/50 text-white disabled:opacity-50" 
            />
            <button 
              onClick={handleSubscribe}
              disabled={subscribeStatus !== 'idle' || !email}
              className="self-start text-xs font-bold uppercase tracking-widest mt-2 hover:text-white text-purple-300 disabled:cursor-default disabled:opacity-50 transition-colors"
            >
              {subscribeStatus === 'idle' && 'Join the list'}
              {subscribeStatus === 'loading' && 'Joining...'}
              {subscribeStatus === 'success' && 'Welcome'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-purple-800 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-purple-400/60">
        <p>© 2025 Velvet Fashion House. All rights reserved.</p>
        <p>Created by BOUDOUR Hanine</p>
      </div>
    </footer>
  );
};

export default Footer;
