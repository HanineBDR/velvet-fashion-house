
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';

const NewsletterPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after 4 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('velvet_popup_seen');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('velvet_popup_seen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0F0518]/80 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white dark:bg-[#1E0B4B] w-full max-w-4xl h-[500px] shadow-2xl flex overflow-hidden animate-fade-in-up rounded-sm">
        <button 
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 text-gray-500 hover:text-[#2E1065] dark:text-gray-400 dark:hover:text-white transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        {/* Image Side */}
        <div className="hidden md:block w-1/2 relative">
            <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
                alt="Velvet Fashion" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#2E1065]/20"></div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center text-center">
            {submitted ? (
                <div className="animate-fade-in-up">
                    <h3 className="text-3xl font-serif text-[#2E1065] dark:text-[#E9D5FF] mb-4">Welcome.</h3>
                    <p className="text-[#4B5563] dark:text-[#9CA3AF]">Your code <strong>VELVET15</strong> has been sent to your inbox.</p>
                </div>
            ) : (
                <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6D28D9] dark:text-[#C4B5FD] mb-4 block">The Inner Circle</span>
                    <h3 className="text-4xl font-serif text-[#2E1065] dark:text-[#E9D5FF] mb-4 leading-tight">
                        Unlock 15% Off
                    </h3>
                    <p className="text-[#4B5563] dark:text-[#9CA3AF] font-light mb-8 leading-relaxed">
                        Join our newsletter to receive an exclusive welcome gift, early access to new drops, and invites to private sales.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-gray-50 dark:bg-[#0F0518] border border-gray-200 dark:border-purple-900/30 px-4 py-3 text-center outline-none focus:border-[#6D28D9] dark:focus:border-[#C4B5FD] transition-colors text-[#2E1065] dark:text-[#E9D5FF]"
                        />
                        <button 
                            type="submit"
                            className="w-full bg-[#2E1065] dark:bg-[#C4B5FD] text-white dark:text-[#2E1065] py-3 uppercase tracking-widest text-xs font-bold hover:bg-[#4C1D95] dark:hover:bg-white transition-colors"
                        >
                            Join & Get Code
                        </button>
                    </form>
                    <p className="text-[10px] text-gray-400 mt-6 uppercase tracking-wider">
                        By signing up, you agree to our Terms.
                    </p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
