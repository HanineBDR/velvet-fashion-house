/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { JournalArticle } from '../types';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#05020a] animate-fade-in-up transition-colors duration-500">
       {/* Hero Image for Article */}
       <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
          <img 
             src={article.image} 
             alt={article.title} 
             className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2E1065]/20 dark:bg-black/50"></div>
       </div>

       <div className="max-w-3xl mx-auto px-6 md:px-12 -mt-32 relative z-10 pb-32">
          <div className="bg-white dark:bg-[#1E0B4B] p-8 md:p-16 shadow-2xl shadow-[#2E1065]/10 dark:shadow-black/60 transition-colors duration-500">
             <div className="flex justify-between items-center mb-12 border-b border-gray-100 dark:border-purple-900/30 pb-8">
                <button 
                  onClick={onBack}
                  className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#6D28D9] dark:text-[#C4B5FD] hover:text-[#2E1065] dark:hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  Back to Journal
                </button>
                <span className="text-xs font-medium uppercase tracking-widest text-[#9CA3AF]">{article.date}</span>
             </div>

             <h1 className="text-4xl md:text-6xl font-serif text-[#2E1065] dark:text-[#E9D5FF] mb-12 leading-tight text-center">
               {article.title}
             </h1>

             <div className="prose prose-purple dark:prose-invert prose-lg mx-auto font-light leading-loose text-[#4B5563] dark:text-[#D1D5DB]">
               {article.content}
             </div>
             
             <div className="mt-16 pt-12 border-t border-gray-100 dark:border-purple-900/30 flex justify-center">
                 <span className="text-2xl font-serif italic text-[#2E1065] dark:text-[#C4B5FD]">Velvet</span>
             </div>
          </div>
       </div>
    </div>
  );
};

export default JournalDetail;