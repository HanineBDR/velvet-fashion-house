
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { User, Order } from '../types';

// Mock database
const MOCK_USER: User = {
  id: 'u1',
  name: 'Boudour Hanine',
  email: 'boudour@velvet.com'
};

const MOCK_ORDERS: Order[] = [
  { id: 'ORD-7782-VL', date: 'Oct 12, 2025', status: 'Processing', total: 1345, items: 2 },
  { id: 'ORD-5541-VL', date: 'Sep 28, 2025', status: 'Delivered', total: 450, items: 1 },
  { id: 'ORD-1129-VL', date: 'Aug 15, 2025', status: 'Delivered', total: 890, items: 3 },
];

// Simulate backend delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const login = async (email: string, password: string): Promise<User> => {
  await delay(800);
  // Accept any login for demo purposes if email is provided
  if (email.includes('@')) {
    const name = email.split('@')[0];
    const user = {
      id: 'u_' + Date.now(),
      name: name.charAt(0).toUpperCase() + name.slice(1),
      email: email
    };
    localStorage.setItem('velvet_user', JSON.stringify(user));
    return user;
  }
  throw new Error('Invalid credentials');
};

export const logout = async (): Promise<void> => {
  await delay(400);
  localStorage.removeItem('velvet_user');
};

export const getCurrentUser = (): User | null => {
  const stored = localStorage.getItem('velvet_user');
  return stored ? JSON.parse(stored) : null;
};

export const getOrders = async (): Promise<Order[]> => {
  await delay(600);
  return MOCK_ORDERS;
};
