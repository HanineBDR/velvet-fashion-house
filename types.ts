
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number; // New field for discount logic
  category: 'Dresses' | 'Outerwear' | 'Shoes' | 'Accessories' | 'Bags';
  imageUrl: string;
  gallery?: string[];
  features: string[];
  colors?: string[];
  reviews?: Review[];
}

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered';
  total: number;
  items: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'product', product: Product }
  | { type: 'journal', article: JournalArticle }
  | { type: 'checkout' }
  | { type: 'login' }
  | { type: 'dashboard' };
