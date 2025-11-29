
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';
import { User } from '../types';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  user: User | null;
  onLoginClick: () => void;
  onDashboardClick: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onNavClick, 
  cartCount, 
  onOpenCart, 
  onOpenWishlist,
  user, 
  onLoginClick, 
  onDashboardClick,
  isDarkMode,
  onToggleDarkMode
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const handleCartClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      onOpenCart();
  }

  // Determine text color based on state. 
  // Initial (transparent header over dark hero): White text.
  // Scrolled: Purple text in Light Mode, Lavender text in Dark Mode.
  const textColorClass = (scrolled || mobileMenuOpen) 
    ? 'text-[#2E1065] dark:text-[#E9D5FF]' 
    : 'text-white';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled || mobileMenuOpen 
            ? 'bg-white/95 dark:bg-[#0F0518]/90 backdrop-blur-md py-4 shadow-sm border-b border-purple-100 dark:border-purple-900/20' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, ''); // Pass empty string to just reset to home
            }}
            className={`text-3xl font-serif font-bold transition-all duration-700 hover:tracking-[0.2em] relative group ${textColorClass}`}
          >
            {BRAND_NAME}
            {/* Underline effect */}
            <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-500 group-hover:w-full ${scrolled ? 'bg-[#2E1065] dark:bg-[#E9D5FF]' : 'bg-white'}`}></span>
          </a>
          
          {/* Center Links - Desktop */}
          <div className={`hidden md:flex items-center gap-12 text-sm font-medium tracking-widest uppercase transition-colors duration-500 ${textColorClass}`}>
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:opacity-70 transition-opacity">Collection</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:opacity-70 transition-opacity">Atelier</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:opacity-70 transition-opacity">Journal</a>
          </div>

          {/* Right Actions */}
          <div className={`flex items-center gap-6 z-50 relative transition-colors duration-500 ${textColorClass}`}>
            
            {/* Dark Mode Toggle */}
            <button
                onClick={onToggleDarkMode}
                className="hover:opacity-70 transition-opacity focus:outline-none"
                aria-label="Toggle Dark Mode"
            >
                {isDarkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                )}
            </button>

            {/* Wishlist Button */}
            <button
                onClick={onOpenWishlist}
                className="hover:opacity-70 transition-opacity focus:outline-none"
                aria-label="Wishlist"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </button>

            {/* User Account / Login */}
            {user ? (
               <button 
                onClick={() => { setMobileMenuOpen(false); onDashboardClick(); }}
                className="flex items-center gap-2 hover:opacity-70 transition-opacity"
               >
                  <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">Hi, {user.name.split(' ')[0]}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
               </button>
            ) : (
                <button 
                  onClick={() => { setMobileMenuOpen(false); onLoginClick(); }}
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </button>
            )}

            <button 
              onClick={handleCartClick}
              className="text-sm font-medium uppercase tracking-widest hover:opacity-70 transition-opacity hidden sm:block"
            >
              Bag ({cartCount})
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className={`block md:hidden focus:outline-none transition-colors duration-500 ${textColorClass}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
               {mobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
               )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white dark:bg-[#0F0518] z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
          <div className="flex flex-col items-center space-y-8 text-xl font-serif font-medium text-[#2E1065] dark:text-[#E9D5FF]">
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#6D28D9] dark:hover:text-[#C4B5FD] transition-colors">Collection</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#6D28D9] dark:hover:text-[#C4B5FD] transition-colors">Atelier</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-[#6D28D9] dark:hover:text-[#C4B5FD] transition-colors">Journal</a>
            <button 
                onClick={() => { setMobileMenuOpen(false); onOpenWishlist(); }}
                className="hover:text-[#6D28D9] dark:hover:text-[#C4B5FD] transition-colors"
            >
                Wishlist
            </button>
            <button 
                onClick={() => { setMobileMenuOpen(false); user ? onDashboardClick() : onLoginClick(); }}
                className="hover:text-[#6D28D9] dark:hover:text-[#C4B5FD] transition-colors"
            >
                {user ? 'My Account' : 'Sign In'}
            </button>
            <button 
                onClick={handleCartClick} 
                className="hover:text-[#6D28D9] dark:hover:text-[#C4B5FD] transition-colors text-base uppercase tracking-widest font-sans mt-8"
            >
                Bag ({cartCount})
            </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;
