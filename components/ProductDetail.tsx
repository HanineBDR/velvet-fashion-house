
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';
import { Product, Review } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  isFavorite: boolean;
  onToggleFavorite: (productId: string) => void;
}

const StarIcon: React.FC<{ filled: boolean; onClick?: () => void; size?: string }> = ({ filled, onClick, size = "w-4 h-4" }) => (
  <svg 
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`${size} ${filled ? 'text-[#6D28D9] dark:text-[#C4B5FD]' : 'text-gray-300 dark:text-gray-600'} ${onClick ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
  >
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart, isFavorite, onToggleFavorite }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(product.imageUrl);
  
  // Review State
  const [reviews, setReviews] = useState<Review[]>(product.reviews || []);
  const [newReviewRating, setNewReviewRating] = useState(0);
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [reviewFormError, setReviewFormError] = useState('');

  // Reset state when product changes
  useEffect(() => {
    setActiveImage(product.imageUrl);
    setSelectedSize(null);
    setSelectedColor(product.colors && product.colors.length > 0 ? product.colors[0] : null);
    setReviews(product.reviews || []);
    setNewReviewRating(0);
    setNewReviewName('');
    setNewReviewComment('');
  }, [product]);
  
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const showSizes = ['Dresses', 'Outerwear', 'Shoes'].includes(product.category);

  // Combine main image and gallery for the thumbnail list
  const allImages = [product.imageUrl, ...(product.gallery || [])];
  // Remove duplicates
  const uniqueImages = Array.from(new Set(allImages));

  // Calculate Average Rating
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1)
    : null;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReviewRating === 0) {
        setReviewFormError('Please select a rating.');
        return;
    }
    if (!newReviewName.trim() || !newReviewComment.trim()) {
        setReviewFormError('Please fill in all fields.');
        return;
    }

    const newReview: Review = {
        id: `r-${Date.now()}`,
        userName: newReviewName,
        rating: newReviewRating,
        comment: newReviewComment,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    setReviews([newReview, ...reviews]);
    setNewReviewRating(0);
    setNewReviewName('');
    setNewReviewComment('');
    setReviewFormError('');
  };

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-[#05020a] animate-fade-in-up transition-colors duration-500">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pb-24">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#9CA3AF] hover:text-[#6D28D9] dark:hover:text-[#C4B5FD] transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          
          {/* Left: Main Image & Gallery */}
          <div className="flex flex-col gap-6">
            <div className="w-full aspect-[3/4] bg-[#F3E8FF] dark:bg-[#1E0B4B] overflow-hidden shadow-[0_25px_50px_-12px_rgba(46,16,101,0.5)] dark:shadow-[0_25px_50px_-12px_rgba(109,40,217,0.3)] relative transition-shadow duration-500">
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-cover animate-fade-in-up transition-all duration-500"
              />
              {hasDiscount && (
                <div className="absolute top-4 left-4 bg-[#6D28D9] dark:bg-[#C4B5FD] text-white dark:text-[#2E1065] text-xs font-bold uppercase tracking-widest px-4 py-2 z-20">
                    Sale
                </div>
              )}
            </div>
            
            {/* Gallery Thumbnails */}
            {uniqueImages.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                    {uniqueImages.map((img, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setActiveImage(img)}
                            className={`aspect-[3/4] overflow-hidden border-2 transition-all duration-300 ${
                                activeImage === img 
                                  ? 'border-[#6D28D9] dark:border-[#C4B5FD] opacity-100' 
                                  : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                        >
                            <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            )}
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center max-w-xl">
             <div className="flex justify-between items-start mb-2">
                 <span className="text-sm font-bold text-[#6D28D9] dark:text-[#A78BFA] uppercase tracking-widest">{product.category}</span>
                 {/* Rating Summary */}
                 <div className="flex items-center gap-1">
                     <span className="text-[#2E1065] dark:text-[#E9D5FF] font-medium">{averageRating || 'New'}</span>
                     <StarIcon filled={true} size="w-3 h-3" />
                     {reviews.length > 0 && (
                         <span className="text-xs text-gray-400 ml-1">({reviews.length})</span>
                     )}
                 </div>
             </div>
             
             <div className="flex justify-between items-start mb-4">
                 <h1 className="text-4xl md:text-5xl font-serif text-[#2E1065] dark:text-[#E9D5FF] leading-tight flex-1">{product.name}</h1>
                 
                 {/* Favorite Button */}
                 <button 
                    onClick={() => onToggleFavorite(product.id)}
                    className="p-2 -mt-2 ml-4 rounded-full hover:bg-gray-100 dark:hover:bg-purple-900/20 transition-colors"
                    title={isFavorite ? "Remove from favorites" : "Add to favorites"}
                 >
                    {isFavorite ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#6D28D9] dark:text-[#C4B5FD]">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#2E1065] dark:text-[#E9D5FF]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    )}
                 </button>
             </div>

             <div className="flex items-baseline gap-4 mb-8">
                {hasDiscount && (
                    <span className="text-xl text-gray-400 dark:text-gray-600 line-through">${product.originalPrice}</span>
                )}
                <span className={`text-2xl font-light ${hasDiscount ? 'text-[#6D28D9] dark:text-[#C4B5FD]' : 'text-[#2E1065] dark:text-[#E9D5FF]'}`}>
                    ${product.price}
                </span>
             </div>
             
             <p className="text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed font-light text-lg mb-8 border-b border-gray-100 dark:border-purple-900/30 pb-8">
               {product.longDescription || product.description}
             </p>

             {/* Color Selector */}
             {product.colors && product.colors.length > 0 && (
                 <div className="mb-6">
                    <span className="block text-xs font-bold uppercase tracking-widest text-[#2E1065] dark:text-[#E9D5FF] mb-4">Select Color</span>
                    <div className="flex gap-4">
                        {product.colors.map((color, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedColor(color)}
                                className={`w-8 h-8 rounded-full shadow-sm transition-all duration-300 relative ${
                                    selectedColor === color ? 'ring-2 ring-offset-2 ring-[#6D28D9] dark:ring-[#C4B5FD] scale-110' : 'hover:scale-110'
                                }`}
                                style={{ backgroundColor: color }}
                                title={color}
                            />
                        ))}
                    </div>
                 </div>
             )}

             {/* Size Selector */}
             {showSizes && (
                <div className="mb-8">
                  <span className="block text-xs font-bold uppercase tracking-widest text-[#2E1065] dark:text-[#E9D5FF] mb-4">Select Size</span>
                  <div className="flex gap-4 flex-wrap">
                    {sizes.map(size => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${
                          selectedSize === size 
                            ? 'border-[#2E1065] dark:border-[#E9D5FF] bg-[#2E1065] dark:bg-[#E9D5FF] text-white dark:text-[#2E1065]' 
                            : 'border-gray-200 dark:border-purple-900/30 text-gray-500 dark:text-gray-400 hover:border-[#6D28D9] dark:hover:border-[#C4B5FD] hover:text-[#6D28D9] dark:hover:text-[#C4B5FD]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
             )}

             <div className="flex flex-col gap-4">
               <button 
                 onClick={() => onAddToCart(product)}
                 className="w-full py-5 bg-[#2E1065] dark:bg-[#E9D5FF] text-white dark:text-[#2E1065] uppercase tracking-widest text-sm font-bold hover:bg-[#4C1D95] dark:hover:bg-[#FFFFFF] transition-colors shadow-lg hover:shadow-xl"
               >
                 Add to Bag — ${product.price}
               </button>
               <ul className="mt-8 space-y-3 text-sm text-[#4B5563] dark:text-[#D1D5DB]">
                 {product.features.map((feature, idx) => (
                   <li key={idx} className="flex items-center gap-3">
                     <span className="w-1.5 h-1.5 bg-[#6D28D9] dark:bg-[#A78BFA] rounded-full"></span>
                     {feature}
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-gray-100 dark:border-purple-900/30 pt-16 lg:grid lg:grid-cols-12 lg:gap-24">
            {/* Reviews List */}
            <div className="lg:col-span-7 mb-16 lg:mb-0">
                <h2 className="text-3xl font-serif text-[#2E1065] dark:text-[#E9D5FF] mb-8">Client Reviews</h2>
                
                {reviews.length > 0 ? (
                    <div className="space-y-10">
                        {reviews.map(review => (
                            <div key={review.id} className="pb-8 border-b border-gray-50 dark:border-purple-900/20 last:border-0">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="font-bold text-[#2E1065] dark:text-[#E9D5FF] mb-1">{review.userName}</h4>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <StarIcon key={star} filled={star <= review.rating} size="w-3 h-3" />
                                            ))}
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-400 uppercase tracking-widest">{review.date}</span>
                                </div>
                                <p className="text-[#4B5563] dark:text-[#D1D5DB] font-light leading-relaxed">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-8 text-[#9CA3AF] italic">
                        No reviews yet. Be the first to review this piece.
                    </div>
                )}
            </div>

            {/* Write Review Form */}
            <div className="lg:col-span-5">
                <div className="bg-[#F9FAFB] dark:bg-[#1E0B4B]/50 p-8 md:p-12 rounded-sm border border-gray-100 dark:border-purple-900/20">
                    <h3 className="text-xl font-serif text-[#2E1065] dark:text-[#E9D5FF] mb-6">Write a Review</h3>
                    <form onSubmit={handleSubmitReview} className="space-y-6">
                        
                        {/* Rating Input */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[#4B5563] dark:text-[#9CA3AF] mb-3">Rating</label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <StarIcon 
                                        key={star} 
                                        filled={star <= newReviewRating} 
                                        onClick={() => setNewReviewRating(star)}
                                        size="w-6 h-6"
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                value={newReviewName}
                                onChange={(e) => setNewReviewName(e.target.value)}
                                className="w-full bg-transparent border-b border-gray-200 dark:border-purple-900/30 py-3 text-[#2E1065] dark:text-[#E9D5FF] placeholder-gray-400 outline-none focus:border-[#6D28D9] dark:focus:border-[#C4B5FD] transition-colors"
                            />
                        </div>

                        <div>
                            <textarea 
                                placeholder="Share your thoughts..." 
                                rows={4}
                                value={newReviewComment}
                                onChange={(e) => setNewReviewComment(e.target.value)}
                                className="w-full bg-transparent border-b border-gray-200 dark:border-purple-900/30 py-3 text-[#2E1065] dark:text-[#E9D5FF] placeholder-gray-400 outline-none focus:border-[#6D28D9] dark:focus:border-[#C4B5FD] transition-colors resize-none"
                            />
                        </div>

                        {reviewFormError && (
                            <p className="text-red-500 text-xs">{reviewFormError}</p>
                        )}

                        <button 
                            type="submit"
                            className="w-full py-4 bg-[#2E1065] dark:bg-[#C4B5FD] text-white dark:text-[#2E1065] uppercase tracking-widest text-xs font-bold hover:bg-[#4C1D95] dark:hover:bg-white transition-colors"
                        >
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
