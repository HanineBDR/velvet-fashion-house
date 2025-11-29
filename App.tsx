
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandTicker from './components/BrandTicker';
import ProductGrid from './components/ProductGrid';
import PromoBanner from './components/PromoBanner';
import NewsletterPopup from './components/NewsletterPopup';
import About from './components/About';
import Journal from './components/Journal';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import JournalDetail from './components/JournalDetail';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import FadeInSection from './components/FadeInSection';
import { Product, ViewState, User } from './types';
import { getCurrentUser, logout } from './services/authService';
import { PRODUCTS } from './constants';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  
  // Favorites State
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('velvet_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = (productId: string) => {
    let newFavs;
    if (favorites.includes(productId)) {
        newFavs = favorites.filter(id => id !== productId);
    } else {
        newFavs = [...favorites, productId];
    }
    setFavorites(newFavs);
    localStorage.setItem('velvet_favorites', JSON.stringify(newFavs));
  };

  // Get Product Objects from Favorite IDs
  const favoriteProducts = PRODUCTS.filter(p => favorites.includes(p.id));
  
  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('velvet_theme');
    return saved ? saved === 'dark' : false;
  });

  // Apply Dark Mode Class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('velvet_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('velvet_theme', 'light');
    }
  }, [isDarkMode]);

  // Initialize user from mock storage
  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (view.type !== 'home') {
      setView({ type: 'home' });
      setTimeout(() => scrollToSection(targetId), 0);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
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
        // Ignore
      }
    }
  };

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setView({ type: 'home' });
  };

  const isFullScreenView = ['checkout', 'login', 'dashboard'].includes(view.type);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#F9F5FF] to-[#F3E8FF] dark:from-[#05020a] dark:via-[#1a0b2e] dark:to-[#05020a] font-sans text-[#2E1065] dark:text-[#E9D5FF] selection:bg-[#C4B5FD] selection:text-[#2E1065] transition-colors duration-500">
      {!isFullScreenView && (
        <Navbar 
            onNavClick={handleNavClick} 
            cartCount={cartItems.length}
            onOpenCart={() => setIsCartOpen(true)}
            onOpenWishlist={() => setIsWishlistOpen(true)}
            user={user}
            onLoginClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'login' });
            }}
            onDashboardClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'dashboard' });
            }}
            isDarkMode={isDarkMode}
            onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        />
      )}

      {/* Navigation for full screen views */}
      {isFullScreenView && view.type !== 'checkout' && (
         <Navbar 
            onNavClick={handleNavClick} 
            cartCount={cartItems.length}
            onOpenCart={() => setIsCartOpen(true)}
            onOpenWishlist={() => setIsWishlistOpen(true)}
            user={user}
            onLoginClick={() => setView({ type: 'login' })}
            onDashboardClick={() => setView({ type: 'dashboard' })}
            isDarkMode={isDarkMode}
            onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
         />
      )}
      
      <main>
        {view.type === 'home' && (
          <>
            <Hero />
            
            <FadeInSection>
              <BrandTicker />
            </FadeInSection>
            
            <FadeInSection delay="0.2s">
              <ProductGrid 
                onProductClick={(p) => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setView({ type: 'product', product: p });
                }} 
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            </FadeInSection>

            {/* AD: Promo Banner */}
            <FadeInSection>
               <PromoBanner />
            </FadeInSection>
            
            <FadeInSection>
              <About />
            </FadeInSection>
            
            <FadeInSection>
              <Journal onArticleClick={(a) => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setView({ type: 'journal', article: a });
              }} />
            </FadeInSection>

            {/* AD: Popup */}
            <NewsletterPopup />
          </>
        )}

        {view.type === 'product' && (
          <ProductDetail 
            product={view.product} 
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('products'), 50);
            }}
            onAddToCart={addToCart}
            isFavorite={favorites.includes(view.product.id)}
            onToggleFavorite={toggleFavorite}
          />
        )}

        {view.type === 'journal' && (
          <JournalDetail 
            article={view.article} 
            onBack={() => setView({ type: 'home' })}
          />
        )}

        {view.type === 'checkout' && (
            <Checkout 
                items={cartItems}
                onBack={() => setView({ type: 'home' })}
            />
        )}

        {view.type === 'login' && (
            <Login 
                onLoginSuccess={(u) => {
                    setUser(u);
                    setView({ type: 'dashboard' });
                }}
                onCancel={() => setView({ type: 'home' })}
            />
        )}

        {view.type === 'dashboard' && user && (
            <Dashboard 
                user={user}
                onLogout={handleLogout}
                onContinueShopping={() => {
                    setView({ type: 'home' });
                    setTimeout(() => scrollToSection('products'), 50);
                }}
            />
        )}
      </main>

      {!isFullScreenView && (
        <FadeInSection>
          <Footer onLinkClick={handleNavClick} />
        </FadeInSection>
      )}
      
      {view.type !== 'checkout' && <Assistant />}
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onCheckout={() => {
            setIsCartOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setView({ type: 'checkout' });
        }}
      />
      
      <WishlistDrawer 
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={favoriteProducts}
        onRemoveItem={toggleFavorite}
        onMoveToBag={(product) => {
            addToCart(product);
        }}
      />
    </div>
  );
}

export default App;
