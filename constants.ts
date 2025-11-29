
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The Midnight Silk Gown',
    tagline: 'Elegance in motion.',
    description: 'A floor-length evening gown crafted from 100% mulberry silk in a deep midnight violet hue.',
    longDescription: 'Designed for the most exclusive evenings, the Midnight Silk Gown features a bias cut that drapes effortlessly over the body. The deep violet hue shifts subtly under evening light, while the open back adds a touch of modern allure to a classic silhouette.',
    price: 695,
    originalPrice: 895, // On Sale
    category: 'Dresses',
    imageUrl: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['100% Mulberry Silk', 'Bias Cut', 'Hand-finished Seams'],
    colors: ['#2E1065', '#000000', '#701a75'],
    reviews: [
      { id: 'r1', userName: 'Eleanor V.', rating: 5, comment: 'Absolutely breathtaking. The silk quality is unmatched.', date: 'Oct 10, 2025' },
      { id: 'r2', userName: 'Sarah J.', rating: 4, comment: 'Beautiful dress, but runs slightly small in the bust.', date: 'Sep 22, 2025' }
    ]
  },
  {
    id: 'p2',
    name: 'Royal Velvet Blazer',
    tagline: 'Structured softness.',
    description: 'A tailored blazer in crushed royal purple velvet with satin lapels.',
    longDescription: 'The centerpiece of our collection, this blazer bridges the gap between masculine tailoring and feminine softness. The crushed velvet catches the light, creating depth and drama, while the structured shoulders provide a powerful silhouette.',
    price: 450,
    category: 'Outerwear',
    imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1485230946387-43302e5648f3?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['Crushed Cotton Velvet', 'Satin Lapels', 'Gold-plated Buttons'],
    colors: ['#4C1D95', '#1e1b4b'],
    reviews: [
        { id: 'r3', userName: 'James D.', rating: 5, comment: 'The texture is incredible. Perfect for my gala event.', date: 'Oct 05, 2025' }
    ]
  },
  {
    id: 'p3',
    name: 'Amethyst Drop Earrings',
    tagline: 'Catch the light.',
    description: 'Raw amethyst stones set in recycled 18k gold.',
    longDescription: 'Each pair of Amethyst Drop Earrings is unique, featuring raw, uncut stones that highlight the natural beauty of the mineral. Suspended from delicate 18k gold chains, they move with you, catching the light with every turn.',
    price: 220,
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1630019852942-f89202989a51?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['Raw Amethyst', '18k Recycled Gold', 'Handcrafted'],
    colors: ['#9333ea', '#d8b4fe'],
    reviews: []
  },
  {
    id: 'p4',
    name: 'Cashmere Wrap Coat',
    tagline: 'Winter warmth.',
    description: 'An oversized wrap coat in a soft lavender cashmere blend.',
    longDescription: 'Wrap yourself in a cloud. Our Cashmere Wrap Coat is unlined for maximum drape and softness. The pale lavender tone acts as a perfect neutral for the winter season, brightening up grey days while keeping you incredibly warm.',
    price: 950,
    originalPrice: 1200, // On Sale
    category: 'Outerwear',
    imageUrl: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['Italian Cashmere Blend', 'Oversized Fit', 'Belted Waist'],
    colors: ['#e9d5ff', '#d1d5db', '#000000'],
    reviews: [
        { id: 'r4', userName: 'Coco C.', rating: 5, comment: 'Worth every penny. So soft it feels like a dream.', date: 'Oct 01, 2025' },
        { id: 'r5', userName: 'Maria K.', rating: 5, comment: 'The color is exactly as shown. Love it.', date: 'Sep 15, 2025' }
    ]
  },
  {
    id: 'p5',
    name: 'Obsidian Pumps',
    tagline: 'Walk on air.',
    description: 'Classic pointed-toe pumps in black suede with a signature purple sole.',
    longDescription: 'The essential shoe for the modern wardrobe. Crafted in Italy from butter-soft suede, these pumps feature a comfortable 85mm heel and our signature violet leather sole. Elegant enough for the boardroom, striking enough for the gala.',
    price: 395,
    category: 'Shoes',
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['Italian Suede', '85mm Heel', 'Memory Foam Insole'],
    colors: ['#000000', '#4C1D95'],
    reviews: [
        { id: 'r6', userName: 'Anna B.', rating: 3, comment: 'Beautiful shoes but a bit narrow for my feet.', date: 'Aug 30, 2025' }
    ]
  },
  {
    id: 'p6',
    name: 'The Pleated Midi',
    tagline: 'Flow and form.',
    description: 'A high-waisted pleated skirt in shimmering metallic plum fabric.',
    longDescription: 'Movement is key to the Pleated Midi. The metallic fibers woven into the plum fabric catch the light, creating a mesmerizing liquid effect. Pair it with a chunky knit for contrast or the matching blouse for a full look.',
    price: 280,
    category: 'Dresses',
    imageUrl: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['Sunray Pleats', 'Metallic Thread', 'Elastic Waistband'],
    colors: ['#701a75', '#000000', '#d8b4fe'],
    reviews: [
        { id: 'r7', userName: 'Sofia L.', rating: 4, comment: 'Stunning fabric. I get compliments every time I wear it.', date: 'Oct 11, 2025' }
    ]
  },
  {
    id: 'p7',
    name: 'Nocturne Crystal Clutch',
    tagline: 'Evening brilliance.',
    description: 'A hard-shell evening clutch encrusted with black Austrian crystals.',
    longDescription: 'When the sun goes down, the Nocturne Clutch comes out to play. Covered in over 2,000 hand-applied black Austrian crystals, it catches the faintest light in the room. Lined in soft purple silk to protect your essentials.',
    price: 350,
    category: 'Bags',
    imageUrl: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['Austrian Crystals', 'Silk Lining', 'Detachable Chain'],
    colors: ['#000000', '#C0C0C0'],
    reviews: []
  },
  {
    id: 'p8',
    name: 'Sapphire Silk Scarf',
    tagline: 'A touch of midnight.',
    description: 'A large square scarf in hand-rolled silk twill featuring our signature botanical print.',
    longDescription: 'The perfect finishing touch. Knot it around your neck, tie it to your bag, or wear it as a headscarf. The deep sapphire blue base is printed with night-blooming flowers in shades of violet and cream.',
    price: 180,
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=1000&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['100% Silk Twill', 'Hand-rolled Edges', '90cm x 90cm'],
    colors: ['#1e3a8a', '#2E1065'],
    reviews: [
        { id: 'r8', userName: 'Claire M.', rating: 5, comment: 'The print is exquisite. Truly a piece of art.', date: 'Oct 15, 2025' }
    ]
  },
  {
    id: 'p9',
    name: 'Pearl & Gold Hairpins',
    tagline: 'Delicate details.',
    description: 'A set of three gold-plated hairpins topped with freshwater pearls.',
    longDescription: 'Sometimes the smallest details make the biggest impact. These hairpins are crafted from gold-plated brass and topped with genuine freshwater pearls. Wear them stacked together or scattered for a romantic, ethereal look.',
    price: 120,
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1000&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1632297136009-887756e07c2c?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['Freshwater Pearls', 'Gold-plated Brass', 'Set of 3'],
    colors: ['#FFD700', '#E5E7EB'],
    reviews: []
  },
  {
    id: 'p10',
    name: 'The Obsidian Tote',
    tagline: 'Everyday luxury.',
    description: 'A structured everyday tote in pebbled black leather with gold hardware.',
    longDescription: 'Meet your new daily companion. The Obsidian Tote is spacious enough for a laptop yet sleek enough for dinner. Crafted from Italian pebbled leather that resists scratches, it features reinforced handles and our subtle gold-foil logo.',
    price: 550,
    category: 'Bags',
    imageUrl: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['Italian Pebbled Leather', 'Fits 13" Laptop', 'Protective Metal Feet'],
    colors: ['#000000', '#5B21B6'],
    reviews: []
  },
  {
    id: 'p11',
    name: 'Velvet Chain Crossbody',
    tagline: 'Quilted perfection.',
    description: 'A plush quilted velvet bag with a sliding chain strap.',
    longDescription: 'Soft to the touch and rich in color. This crossbody bag features our signature diamond quilting in royal purple velvet. The gold chain strap can be doubled to wear on the shoulder or lengthened for crossbody wear.',
    price: 320,
    category: 'Bags',
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['Quilted Velvet', 'Gold-tone Hardware', 'Interior Card Slot'],
    colors: ['#4C1D95', '#000000'],
    reviews: [
        { id: 'r9', userName: 'Diana P.', rating: 5, comment: 'So chic! The velvet is incredible.', date: 'Oct 18, 2025' }
    ]
  },
  {
    id: 'p12',
    name: 'Moonlight Mini Bag',
    tagline: 'Silver linings.',
    description: 'A structural mini top-handle bag in metallic silver leather.',
    longDescription: 'Small but mighty. The Moonlight Mini Bag is designed to hold just the essentials—phone, cardholder, lipstick. The metallic silver leather acts as a neutral for evening wear, adding a futuristic touch to classic silhouettes.',
    price: 295,
    category: 'Bags',
    imageUrl: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1000&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['Metallic Leather', 'Magnetic Closure', 'Top Handle'],
    colors: ['#C0C0C0', '#FFD700'],
    reviews: []
  },
  {
    id: 'p13',
    name: 'Celestial Signet Ring',
    tagline: 'Written in the stars.',
    description: 'A solid gold signet ring engraved with a sunburst diamond motif.',
    longDescription: 'Heirloom quality for the modern mystic. This chunky signet ring is cast in 18k solid gold and features a hand-engraved starburst setting holding a conflict-free white diamond.',
    price: 480,
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['18k Solid Gold', 'Conflict-free Diamond', 'Hand-Engraved'],
    colors: ['#FFD700'],
    reviews: []
  },
  {
    id: 'p14',
    name: 'Velvet Smoking Slippers',
    tagline: 'Lounge in luxury.',
    description: 'Men\'s style loafers in plush black velvet with tonal embroidery.',
    longDescription: 'Borrowed from the boys, perfected for you. These smoking slippers feature a Venetian cut and are crafted from our signature heavy velvet. The tonal black embroidery adds a subtle texture that reveals itself only upon closer inspection.',
    price: 325,
    category: 'Shoes',
    imageUrl: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1619859239860-2566166e996a?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['Silk Velvet Upper', 'Leather Sole', 'Hand Embroidered'],
    colors: ['#000000', '#2E1065'],
    reviews: []
  },
  {
    id: 'p15',
    name: 'The Gala Cape',
    tagline: 'Dramatic entrance.',
    description: 'A floor-length cape in sheer silk chiffon with a velvet collar.',
    longDescription: 'Add a layer of mystery to any evening look. This sheer chiffon cape floats around you as you move, while the structured velvet collar and gold clasp keep it securely in place. The perfect alternative to a heavy coat for gala season.',
    price: 520,
    category: 'Outerwear',
    imageUrl: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['Silk Chiffon', 'Velvet Collar', 'Gold Clasp'],
    colors: ['#000000', '#2E1065'],
    reviews: []
  },
  {
    id: 'p16',
    name: 'Velvet Padded Headband',
    tagline: 'Crown glory.',
    description: 'A voluminous padded headband wrapped in our signature silk velvet.',
    longDescription: 'The easiest way to elevate a simple look. This padded headband is inspired by Renaissance royalty and adds height and drama to any hairstyle. Comfortable enough for all-day wear.',
    price: 85,
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1582236894056-b8166a9ba298?q=80&w=1000&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1582236894056-b8166a9ba298?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1584617415518-12c826622b3e?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['Silk Velvet', 'Grosgrain Lining', 'Hand-finished'],
    colors: ['#4C1D95', '#000000'],
    reviews: []
  },
  {
    id: 'p17',
    name: 'Onyx Signet Ring',
    tagline: 'Modern heirloom.',
    description: 'A sleek square signet ring featuring a polished black onyx stone.',
    longDescription: 'Bold and architectural, this ring features a flat face of polished black onyx set in sterling silver. A unisex piece that adds a touch of edge to our romantic collection.',
    price: 195,
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1000&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop'
    ],
    features: ['Black Onyx', 'Sterling Silver', 'High Polish'],
    colors: ['#000000'],
    reviews: []
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "The Return of Velvet",
        date: "October 12, 2025",
        excerpt: "Why the fabric of royalty is making a modern comeback on the streets of Paris.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-gray-600" },
                "Velvet has always whispered of power. From the robes of medieval kings to the smoking jackets of the 19th century dandy, it is a fabric that demands to be touched, yet commands respect."
            ),
            React.createElement("p", { className: "mb-8 text-gray-600" },
                "This season, we are seeing a democratization of this regal textile. No longer confined to evening wear, velvet suits in bold jewel tones—emerald, amethyst, and ruby—are appearing in boardrooms and coffee shops alike."
            ),
            React.createElement("blockquote", { className: "border-l-2 border-[#6D28D9] pl-6 italic text-xl text-[#2E1065] my-10 font-serif" },
                "\"Fashion is not just about what you see. It is about what you feel.\""
            ),
            React.createElement("p", { className: "mb-6 text-gray-600" },
                "At Velvet, we source our fabrics from the historic mills of Lyon, ensuring that every blazer and gown carries with it centuries of craftsmanship."
            )
        )
    },
    {
        id: 2,
        title: "Color Theory: Royal Tones",
        date: "September 28, 2025",
        excerpt: "How deep purples and blues influence our mood and perception of authority.",
        image: "https://images.unsplash.com/photo-1550614000-4b9519e0956b?q=80&w=1000&auto=format&fit=crop",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-gray-600" },
                "Purple has historically been the color of spirit and status. Situated at the very end of the visible spectrum, it combines the stability of blue and the energy of red."
            ),
            React.createElement("p", { className: "mb-8 text-gray-600" },
                "Incorporating these tones into your wardrobe does more than just add color; it adds a psychological layer of mystery and creativity. A violet scarf or a plum handbag can be a subtle signal of confidence."
            ),
             React.createElement("div", { className: "my-12 p-8 bg-[#F3E8FF] text-[#2E1065] font-serif italic text-center" },
                React.createElement("p", null, "The color of dusk,"),
                React.createElement("p", null, "The shadow of the mountain,"),
                React.createElement("p", null, "The depth of the sea.")
            )
        )
    },
    {
        id: 3,
        title: "Sustainable Silk",
        date: "September 15, 2025",
        excerpt: "The journey from cocoon to couture: ethical sourcing in the modern age.",
        image: "https://images.unsplash.com/photo-1537832816519-0439d6799269?q=80&w=1000&auto=format&fit=crop",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-gray-600" },
                "True luxury cannot come at the cost of the environment. That is why our silk is sourced from organic sericulture farms that prioritize the health of the ecosystem."
            ),
            React.createElement("p", { className: "mb-8 text-gray-600" },
                "We use peace silk (Ahimsa silk) where possible, allowing the moth to emerge from the cocoon before harvesting. The result is a slightly more textured fabric with a much lighter conscience."
            )
        )
    }
];

export const BRAND_NAME = 'Velvet';
export const PRIMARY_COLOR = 'violet-950'; 
export const ACCENT_COLOR = 'violet-700';
