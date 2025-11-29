/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick }) => {
  return (
    <section id="journal" className="bg-white dark:bg-[#05020a] py-32 px-6 md:px-12 transition-colors duration-500">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-8 border-b border-[#F3E8FF] dark:border-purple-900/20">
            <div>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#6D28D9] dark:text-[#A78BFA] mb-4">Editorial</span>
                <h2 className="text-4xl md:text-6xl font-serif text-[#2E1065] dark:text-[#E9D5FF]">Velvet Voices</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {JOURNAL_ARTICLES.map((article) => (
                <div key={article.id} className="group cursor-pointer flex flex-col text-left" onClick={() => onArticleClick(article)}>
                    <div className="w-full aspect-[4/3] overflow-hidden mb-8 bg-[#F3E8FF] dark:bg-[#1E0B4B] relative">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#2E1065]/0 group-hover:bg-[#2E1065]/10 dark:group-hover:bg-black/30 transition-colors duration-500"></div>
                    </div>
                    <div className="flex flex-col flex-1 text-left">
                        <span className="text-xs font-medium uppercase tracking-widest text-[#9CA3AF] mb-3">{article.date}</span>
                        <h3 className="text-2xl font-serif text-[#2E1065] dark:text-[#E9D5FF] mb-4 leading-tight group-hover:text-[#6D28D9] dark:group-hover:text-[#C4B5FD] transition-colors">{article.title}</h3>
                        <p className="text-[#4B5563] dark:text-[#9CA3AF] font-light leading-relaxed line-clamp-3">{article.excerpt}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;