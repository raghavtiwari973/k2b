import React, { useState, useEffect } from 'react';
import { Gift, Briefcase, ShoppingBag, CheckCircle2, Leaf, X, ArrowRight } from 'lucide-react';
import { useCart, Product } from './CartContext';

const premiumProducts = [
  // Executive Desk Collection
  { name: 'Premium Wooden Desk Organizers', image: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=500&q=80', tag: 'Desk' },
  { name: 'Personalized Executive Name Lamps', image: 'https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?w=500&q=80', tag: 'Desk' },
  { name: 'Luxury LED Desk Clocks', image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&q=80', tag: 'Desk' },
  { name: 'Premium Table Décor Accessories', image: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=500&q=80', tag: 'Desk' },
  { name: 'Premium Leatherette Organizer', image: 'https://images.unsplash.com/photo-1531346878377-a541fa4cb5e3?w=500&q=80', tag: 'Desk' },
  { name: 'Executive Notebook & Pen Set', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=500&q=80', tag: 'Stationery' },
  { name: 'Smart Desk Lamp', image: 'https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?w=500&q=80', tag: 'Desk' },
  // Technology Collection
  { name: 'Premium Metal USB Drives', image: 'https://images.unsplash.com/photo-1614944983059-e9eb7b3fcfe2?w=500&q=80', tag: 'Tech' },
  { name: 'Wireless Charging Stations', image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&q=80', tag: 'Tech' },
  { name: 'Wireless Charging Dock', image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&q=80', tag: 'Tech' },
  { name: 'Bluetooth Speakers', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80', tag: 'Tech' },
  { name: 'Executive Power Banks', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&q=80', tag: 'Tech' },
  // Sustainable Luxury Collection
  { name: 'Bamboo Bottle Gift Sets', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80', tag: 'Eco' },
  { name: 'Premium Wooden Gift Sets', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80', tag: 'Eco' },
  { name: 'Eco-Friendly Executive Kits', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80', tag: 'Eco' },
  { name: 'Sustainable Corporate Gift Boxes', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80', tag: 'Eco' },
  // Premium Lifestyle & Wellness Collection
  { name: 'Vacuum Flask Gift Set', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80', tag: 'Wellness' },
  { name: 'Aroma Diffuser', image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?w=500&q=80', tag: 'Wellness' },
  { name: 'Corporate Wellness Hamper', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80', tag: 'Wellness' },
  // Premium Gift Hampers
  { name: 'Executive Workstation Hamper', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80', tag: 'Hamper' },
  { name: 'Leadership Appreciation Hamper', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80', tag: 'Hamper' },
  { name: 'Festive Luxury Collection', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80', tag: 'Hamper' },
  { name: 'Premium Wellness Hamper', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80', tag: 'Hamper' },
];

const standardProducts = [
  // Workspace Essentials
  { name: 'Customized Pen Stands', image: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=500&q=80', tag: 'Workspace' },
  { name: 'Desk Organizers', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80', tag: 'Workspace' },
  { name: 'Personalized Calendars', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=500&q=80', tag: 'Workspace' },
  { name: 'Sticky Notes & Productivity Kits', image: 'https://images.unsplash.com/photo-1531346878377-a541fa4cb5e3?w=500&q=80', tag: 'Workspace' },
  { name: 'Desktop Organizers', image: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=500&q=80', tag: 'Workspace' },
  { name: 'Office Productivity Kits', image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=80', tag: 'Workspace' },
  // Technology Essentials
  { name: 'Card Style USB Drives', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&q=80', tag: 'Tech' },
  { name: 'Branded Pendrives', image: 'https://images.unsplash.com/photo-1614944983059-e9eb7b3fcfe2?w=500&q=80', tag: 'Tech' },
  { name: 'Digital Alarm Clocks', image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&q=80', tag: 'Tech' },
  { name: 'Digital Desk Clocks', image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&q=80', tag: 'Tech' },
  { name: 'Mobile Accessories', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&q=80', tag: 'Tech' },
  { name: 'Mobile Stands', image: 'https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=500&q=80', tag: 'Tech' },
  // Utility Gift Sets
  { name: 'Corporate Desk Kits', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80', tag: 'Utility' },
  { name: 'Personalized Office Accessories', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80', tag: 'Utility' },
  { name: 'Daily Utility Gift Boxes', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80', tag: 'Utility' },
  { name: 'Utility Gift Sets', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80', tag: 'Utility' },
  // Drinkware Collection
  { name: 'Insulated Bottles', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80', tag: 'Drinkware' },
  { name: 'Premium Coffee Mugs', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80', tag: 'Drinkware' },
  { name: 'Vacuum Bottles', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80', tag: 'Drinkware' },
  // Eco-Friendly Collection
  { name: 'Eco Stationery Kits', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=500&q=80', tag: 'Eco' },
  { name: 'Wooden USB Drives', image: 'https://images.unsplash.com/photo-1614944983059-e9eb7b3fcfe2?w=500&q=80', tag: 'Eco' },
  { name: 'Sustainable Office Essentials', image: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=500&q=80', tag: 'Eco' },
  { name: 'Recycled Paper Products', image: 'https://images.unsplash.com/photo-1531346878377-a541fa4cb5e3?w=500&q=80', tag: 'Eco' },
];

const regularProducts = [
  // Office Essentials
  { name: 'Branded Pen Sets', image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=80', tag: 'Office' },
  { name: 'Notebooks', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=500&q=80', tag: 'Office' },
  { name: 'Diaries', image: 'https://images.unsplash.com/photo-1531346878377-a541fa4cb5e3?w=500&q=80', tag: 'Office' },
  { name: 'Desk Calendars', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=500&q=80', tag: 'Office' },
  { name: 'Mouse Pads', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80', tag: 'Office' },
  { name: 'Sticky Notes', image: 'https://images.unsplash.com/photo-1531346878377-a541fa4cb5e3?w=500&q=80', tag: 'Office' },
  // Utility Products
  { name: 'USB Drives', image: 'https://images.unsplash.com/photo-1614944983059-e9eb7b3fcfe2?w=500&q=80', tag: 'Utility' },
  { name: 'Desk Accessories', image: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=500&q=80', tag: 'Utility' },
  { name: 'Mobile Holders', image: 'https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=500&q=80', tag: 'Utility' },
  { name: 'Productivity Kits', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80', tag: 'Utility' },
  // Event & Promotional Gifts
  { name: 'Conference Kits', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80', tag: 'Event' },
  { name: 'Training Program Gifts', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=500&q=80', tag: 'Event' },
  { name: 'Employee Welcome Kits', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80', tag: 'Event' },
  { name: 'Employee Joining Kits', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80', tag: 'Event' },
  { name: 'Promotional Merchandise', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80', tag: 'Event' },
  { name: 'Event Giveaways', image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=80', tag: 'Event' },
  // Everyday Corporate Gifts
  { name: 'Pens', image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=80', tag: 'Everyday' },
  { name: 'Keychains', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&q=80', tag: 'Everyday' },
  { name: 'Coffee Mugs', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80', tag: 'Everyday' },
  { name: 'Lanyards', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80', tag: 'Everyday' },
  { name: 'ID Card Holders', image: 'https://images.unsplash.com/photo-1531346878377-a541fa4cb5e3?w=500&q=80', tag: 'Everyday' },
  { name: 'Desk Utilities', image: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=500&q=80', tag: 'Everyday' },
];

const sustainableProducts = [
  // Eco Stationery
  { name: 'Eco Stationery Kits', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=500&q=80', tag: 'Office' },
  { name: 'Recycled Paper Notebooks', image: 'https://images.unsplash.com/photo-1531346878377-a541fa4cb5e3?w=500&q=80', tag: 'Office' },
  { name: 'Recycled Diaries', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=500&q=80', tag: 'Office' },
  { name: 'Seed Paper Notebooks', image: 'https://images.unsplash.com/photo-1531346878377-a541fa4cb5e3?w=500&q=80', tag: 'Office' },
  { name: 'Eco-Friendly Pens', image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=80', tag: 'Office' },
  // Sustainable Desk Accessories
  { name: 'Bamboo Desk Organizers', image: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=500&q=80', tag: 'Desk' },
  { name: 'Wooden Pen Stands', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80', tag: 'Desk' },
  { name: 'Wooden Mobile Stands', image: 'https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=500&q=80', tag: 'Desk' },
  { name: 'Wooden USB Drives', image: 'https://images.unsplash.com/photo-1614944983059-e9eb7b3fcfe2?w=500&q=80', tag: 'Desk' },
  // Eco Drinkware
  { name: 'Bamboo Bottle Gift Sets', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80', tag: 'Drinkware' },
  { name: 'Reusable Steel Bottles', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80', tag: 'Drinkware' },
  { name: 'Insulated Eco Bottles', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80', tag: 'Drinkware' },
  { name: 'Bamboo Coffee Mugs', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80', tag: 'Drinkware' },
  // Sustainable Gift Sets
  { name: 'Eco-Friendly Executive Kits', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80', tag: 'Gift Set' },
  { name: 'Sustainable Office Essentials', image: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=500&q=80', tag: 'Gift Set' },
  { name: 'Green Corporate Gift Boxes', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80', tag: 'Gift Set' },
  { name: 'Eco Wellness Kit', image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?w=500&q=80', tag: 'Gift Set' },
  // Environment-Friendly Merchandise
  { name: 'Cotton Tote Bags', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80', tag: 'Merch' },
  { name: 'Jute Bags', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80', tag: 'Merch' },
  { name: 'Plantable Seed Kits', image: 'https://images.unsplash.com/photo-1416879598555-220b8fa017ea?w=500&q=80', tag: 'Merch' },
  { name: 'Indoor Plant Gift Sets', image: 'https://images.unsplash.com/photo-1416879598555-220b8fa017ea?w=500&q=80', tag: 'Merch' },
  { name: 'Eco Event Kits', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80', tag: 'Merch' },
];

function ProductCard({ product }: { product: Product }) {
  const { cart, addToCart, removeFromCart } = useCart();
  const isAdded = cart.some((p) => p.name === product.name);

  return (
    <div className="bg-[#FFFFFF] rounded-[32px] p-5 shadow-[0px_10px_30px_rgba(0,0,0,0.08)] border border-[#EAEAEA] flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
      {/* Image (Approx 45% of card height) */}
      <div className="w-full h-[150px] flex-shrink-0 mb-4 rounded-[24px] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col flex-1">
        {/* Name & Verification Badge */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <h3 className="text-[#1A1A1A] text-sm font-bold tracking-tight truncate">
            {product.name}
          </h3>
          <svg className="w-4 h-4 text-[#34C759] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Description */}
        <p className="text-[#777777] text-xs leading-relaxed line-clamp-2 pr-1">
          Premium {product.tag.toLowerCase()} product focusing on simplicity & usability.
        </p>

        {/* Statistics Row */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#777777]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            <span className="text-[#1A1A1A] font-semibold text-xs">312</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#777777]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            <span className="text-[#1A1A1A] font-semibold text-xs">48</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-5 flex justify-end">
          <button 
            onClick={(e) => { e.stopPropagation(); isAdded ? removeFromCart(product.name) : addToCart(product); }}
            className={`flex items-center justify-center px-4 py-1.5 border rounded-full font-semibold text-xs shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0px_6px_16px_rgba(0,0,0,0.08)] active:scale-95 transition-all duration-200 ${isAdded ? 'bg-orange-500 border-orange-500 text-white hover:bg-orange-600' : 'bg-[#FFFFFF] border-[#EAEAEA] text-[#222222] hover:bg-[#FDFDFD]'}`}
          >
            {isAdded ? 'Added ✓' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
}

const categories = [
  {
    icon: Gift,
    title: 'Premium Collection',
    subtitle: 'For Leaders & Key Clients',
    description:
      'Luxury gifts curated for CXOs, leadership teams, business partners, and key clients.',
    features: [
      'Executive Desk Collection',
      'Technology Collection',
      'Sustainable Luxury Collection',
      'Premium Gift Hampers',
    ],
    accent: '#F97316',
    bg: 'from-orange-50 to-amber-50',
    iconBg: 'from-orange-500 to-orange-600',
    badge: 'Most Popular',
    products: premiumProducts,
  },
  {
    icon: Briefcase,
    title: 'Standard Collection',
    subtitle: 'For Managers & Partners',
    description:
      'Elegant gifting solutions for managers, associates, partners, and event participants.',
    features: [
      'Workspace Essentials',
      'Technology Essentials',
      'Utility Gift Sets',
      'Eco-Friendly Collection',
    ],
    accent: '#0F172A',
    bg: 'from-slate-50 to-gray-50',
    iconBg: 'from-slate-700 to-slate-800',
    badge: 'Best Value',
    products: standardProducts,
  },
  {
    icon: ShoppingBag,
    title: 'Regular Collection',
    subtitle: 'For Bulk & Events',
    description:
      'Smart gifting solutions designed for employee engagement and bulk corporate requirements.',
    features: [
      'Office Essentials',
      'Event Giveaways',
      'Joining Kits',
      'Promotional Merchandise',
    ],
    accent: '#10B981',
    bg: 'from-emerald-50 to-teal-50',
    iconBg: 'from-emerald-500 to-emerald-600',
    badge: 'Budget Friendly',
    products: regularProducts,
  },
  {
    icon: Leaf,
    title: 'Sustainable Collection',
    subtitle: 'Eco-Friendly Options',
    description:
      'Environmentally conscious gifting choices that reflect your commitment to sustainability.',
    features: [
      'Eco Stationery Kits',
      'Bamboo Drinkware',
      'Wooden Accessories',
      'Plantable Merch',
    ],
    accent: '#8B5CF6',
    bg: 'from-violet-50 to-purple-50',
    iconBg: 'from-violet-500 to-purple-600',
    badge: 'Eco Friendly',
    products: sustainableProducts,
  },
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null);

  useEffect(() => {
    if (selectedCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCategory]);

  // Listen for custom events to open a specific category modal
  useEffect(() => {
    const handleOpenCategory = (e: any) => {
      const cat = categories.find((c) => c.title === e.detail);
      if (cat) setSelectedCategory(cat);
    };
    window.addEventListener('open-category', handleOpenCategory);
    return () => window.removeEventListener('open-category', handleOpenCategory);
  }, []);

  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-5">
            <span className="font-manrope text-sm font-semibold text-orange-600">Our Collections</span>
          </div>
          <h2 className="font-sora font-extrabold text-4xl lg:text-5xl text-slate-900 mb-4">
            Our Gifting Categories
          </h2>
          <p className="font-dm text-lg text-slate-500">
            Solutions tailored for every business gifting requirement.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className={`relative bg-gradient-to-br ${cat.bg} rounded-[28px] p-8 border border-gray-100 card-hover cursor-pointer group overflow-hidden`}
              >
                {/* Badge */}
                <span
                  className="absolute top-6 right-6 text-xs font-manrope font-bold px-3 py-1 rounded-full text-white"
                  style={{ background: cat.accent }}
                >
                  {cat.badge}
                </span>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.iconBg} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <p className="font-dm text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                  {cat.subtitle}
                </p>
                <h3 className="font-sora font-extrabold text-2xl text-slate-900 mb-3">
                  {cat.title}
                </h3>
                <p className="font-dm text-slate-500 text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5">
                  {cat.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: cat.accent }} />
                      <span className="font-dm text-sm font-medium text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* View All Products Button */}
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedCategory(cat); }}
                  className="mt-8 w-full py-3.5 px-5 bg-white/60 hover:bg-white rounded-2xl flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group/btn relative z-10"
                >
                  <span className="font-manrope font-bold text-sm text-slate-800">View All Products</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-50 group-hover/btn:bg-slate-900 group-hover/btn:text-white transition-colors duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>

                {/* Background decoration */}
                <div
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-10"
                  style={{ background: cat.accent }}
                />
              </div>
            );
          })}
        </div>

        {/* Popup Modal */}
        {selectedCategory && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
              onClick={() => setSelectedCategory(null)} 
            />
            
            {/* Modal Content */}
            <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#F5F5F5] rounded-[32px] shadow-2xl flex flex-col overflow-hidden animate-fade-in-up border border-[#EAEAEA]">
              {/* Modal Header */}
              <div className="px-6 md:px-8 py-6 bg-white border-b border-[#EAEAEA] flex items-center justify-between z-10 shrink-0">
                <div>
                  <h3 className="font-sora font-extrabold text-2xl text-slate-900">{selectedCategory.title}</h3>
                  <p className="font-dm text-sm text-slate-500 mt-1">{selectedCategory.products.length} Products Available</p>
                </div>
                <button 
                  onClick={() => setSelectedCategory(null)} 
                  className="p-2.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Modal Body (Scrollable) */}
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {selectedCategory.products.map((p) => (
                    <ProductCard key={p.name} product={p} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
