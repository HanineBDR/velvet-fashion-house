/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { User, Order } from '../types';
import { getOrders } from '../services/authService';

interface DashboardProps {
  user: User;
  onLogout: () => void;
  onContinueShopping: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout, onContinueShopping }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (e) {
        console.error("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#F9FAFB] dark:bg-[#05020a] animate-fade-in-up transition-colors duration-500">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-[#2E1065] dark:text-[#E9D5FF] mb-4">My Account</h1>
            <p className="text-[#4B5563] dark:text-[#9CA3AF] font-light text-lg">Welcome back, {user.name}</p>
          </div>
          <div className="flex gap-6">
            <button 
              onClick={onContinueShopping}
              className="px-6 py-3 border border-[#2E1065] dark:border-[#E9D5FF] text-[#2E1065] dark:text-[#E9D5FF] text-xs font-bold uppercase tracking-widest hover:bg-[#2E1065] dark:hover:bg-[#E9D5FF] hover:text-white dark:hover:text-[#2E1065] transition-colors"
            >
              Shop Collection
            </button>
            <button 
              onClick={onLogout}
              className="px-6 py-3 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/30 text-xs font-bold uppercase tracking-widest hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Card */}
          <div className="lg:col-span-1 space-y-8">
             <div className="bg-white dark:bg-[#1E0B4B] p-8 shadow-sm border border-purple-50 dark:border-purple-900/20">
                <h3 className="text-lg font-serif text-[#2E1065] dark:text-[#E9D5FF] mb-6 border-b border-gray-100 dark:border-purple-900/30 pb-4">Profile Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="block text-xs text-[#9CA3AF] uppercase tracking-widest mb-1">Name</span>
                    <span className="text-[#4B5563] dark:text-[#D1D5DB]">{user.name}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#9CA3AF] uppercase tracking-widest mb-1">Email</span>
                    <span className="text-[#4B5563] dark:text-[#D1D5DB]">{user.email}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#9CA3AF] uppercase tracking-widest mb-1">Member ID</span>
                    <span className="text-[#4B5563] dark:text-[#D1D5DB] font-mono text-sm">{user.id}</span>
                  </div>
                </div>
                <button className="mt-8 text-xs font-bold text-[#6D28D9] dark:text-[#C4B5FD] uppercase tracking-widest hover:text-[#2E1065] dark:hover:text-white">Edit Details</button>
             </div>

             <div className="bg-[#2E1065] dark:bg-[#120429] p-8 text-white">
                <h3 className="text-lg font-serif mb-4">Velvet Concierge</h3>
                <p className="font-light text-purple-200 text-sm mb-6 leading-relaxed">Need assistance with a recent order or styling advice? Our concierge team is available 24/7.</p>
                <button className="text-xs font-bold uppercase tracking-widest text-white border-b border-white pb-1 hover:text-purple-200 hover:border-purple-200 transition-colors">Contact Us</button>
             </div>
          </div>

          {/* Orders */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-[#1E0B4B] p-8 shadow-sm border border-purple-50 dark:border-purple-900/20 h-full">
              <h3 className="text-lg font-serif text-[#2E1065] dark:text-[#E9D5FF] mb-8 border-b border-gray-100 dark:border-purple-900/30 pb-4">Order History</h3>
              
              {loading ? (
                <div className="flex items-center justify-center h-48">
                   <div className="w-1.5 h-1.5 bg-[#6D28D9] dark:bg-[#C4B5FD] rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-[#6D28D9] dark:bg-[#C4B5FD] rounded-full animate-bounce delay-75 mx-1"></div>
                   <div className="w-1.5 h-1.5 bg-[#6D28D9] dark:bg-[#C4B5FD] rounded-full animate-bounce delay-150"></div>
                </div>
              ) : orders.length > 0 ? (
                <div className="space-y-6">
                  {orders.map(order => (
                    <div key={order.id} className="group border border-gray-100 dark:border-purple-900/20 p-6 hover:border-purple-200 dark:hover:border-purple-700 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                           <span className="font-medium text-[#2E1065] dark:text-[#E9D5FF]">{order.id}</span>
                           <span className={`px-2 py-0.5 text-[10px] uppercase tracking-widest rounded-full ${
                             order.status === 'Processing' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300' :
                             order.status === 'Delivered' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                             'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300'
                           }`}>{order.status}</span>
                        </div>
                        <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">Placed on {order.date} • {order.items} items</p>
                      </div>
                      <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                        <span className="font-serif text-lg text-[#2E1065] dark:text-[#E9D5FF]">${order.total}</span>
                        <button className="text-xs font-bold text-[#6D28D9] dark:text-[#C4B5FD] uppercase tracking-widest hover:text-[#2E1065] dark:hover:text-white">View Invoice</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-[#4B5563] dark:text-[#9CA3AF] mb-4">You haven't placed any orders yet.</p>
                  <button onClick={onContinueShopping} className="text-[#6D28D9] dark:text-[#C4B5FD] underline underline-offset-4">Start Shopping</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;