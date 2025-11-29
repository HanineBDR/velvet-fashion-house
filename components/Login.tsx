/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { login } from '../services/authService';
import { User } from '../types';

interface LoginProps {
  onLoginSuccess: (user: User) => void;
  onCancel: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess, onCancel }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // For this mock, signup and login use the same flow
      const user = await login(email, password);
      onLoginSuccess(user);
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white dark:bg-[#05020a] animate-fade-in-up transition-colors duration-500">
      
      {/* Left Image Section */}
      <div className="hidden lg:block w-1/2 relative bg-[#2E1065] overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1574291814206-363acdf2aa79?auto=format&fit=crop&q=80&w=1200" 
            alt="Fashion Model" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E1065] via-transparent to-transparent"></div>
        <div className="absolute bottom-24 left-12 right-12 text-white">
            <h2 className="text-5xl font-serif mb-6 leading-tight">Elevate your <br/> everyday.</h2>
            <p className="text-purple-200 font-light text-lg max-w-md">Join the Velvet Atelier for exclusive access to new collections and private sales.</p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center pt-24 pb-12 px-8">
        <div className="w-full max-w-md">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2E1065] dark:text-[#E9D5FF] mb-4">
                {isLogin ? 'Welcome Back' : 'Join Velvet'}
            </h2>
            <p className="text-[#4B5563] dark:text-[#9CA3AF] font-light">
                {isLogin ? 'Enter your details to access your account.' : 'Create an account to track your orders.'}
            </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
            <div>
                <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-gray-200 dark:border-purple-900/30 py-3 text-[#2E1065] dark:text-[#E9D5FF] placeholder-gray-400 outline-none focus:border-[#6D28D9] dark:focus:border-[#C4B5FD] transition-colors"
                required
                />
            </div>
            <div>
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-gray-200 dark:border-purple-900/30 py-3 text-[#2E1065] dark:text-[#E9D5FF] placeholder-gray-400 outline-none focus:border-[#6D28D9] dark:focus:border-[#C4B5FD] transition-colors"
                required
                />
            </div>

            {error && (
                <p className="text-red-500 text-xs text-center">{error}</p>
            )}

            <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-[#2E1065] dark:bg-[#C4B5FD] text-white dark:text-[#2E1065] uppercase tracking-widest text-sm font-bold hover:bg-[#4C1D95] dark:hover:bg-white transition-colors shadow-lg disabled:opacity-70"
            >
                {isLoading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
            </button>
            </form>

            <div className="mt-8 text-center space-y-4">
            <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-xs text-[#6D28D9] dark:text-[#C4B5FD] hover:text-[#2E1065] dark:hover:text-white transition-colors underline underline-offset-4"
            >
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
            
            <div>
                <button 
                    onClick={onCancel}
                    className="text-xs text-[#9CA3AF] hover:text-[#2E1065] dark:hover:text-white transition-colors"
                >
                    Return to Store
                </button>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;