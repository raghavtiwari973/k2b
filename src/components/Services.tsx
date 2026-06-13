import React, { useState, useEffect, useRef } from 'react';
import { Gift, Briefcase, ShoppingBag, CheckCircle2, Leaf, X, ArrowRight } from 'lucide-react';
import PremiumCollection from './PremiumCollection';
import StandardCollection from './StandardCollection';
import RegularCollection from './RegularCollection';
import SustainableCollection from './SustainableCollection';


const categories = [
  {
    icon: Gift,
    title: 'Premium',
    subtitle: '',
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
  },
  {
    icon: Briefcase,
    title: 'Standard',
    subtitle: '',
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
  },
  {
    icon: ShoppingBag,
    title: 'Regular',
    subtitle: '',
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
  },
  {
    icon: Leaf,
    title: 'Sustainable',
    subtitle: '',
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
  },
];

function CategoryCard({ cat, onClick }: { cat: typeof categories[0], onClick: () => void }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isHovered: false });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg rotation
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setMousePos({ x: rotateX, y: rotateY, isHovered: true });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0, isHovered: false });
  };

  const Icon = cat.icon;

  return (
    <div 
      ref={cardRef}
      style={{ perspective: '1200px' }}
      className="relative cursor-pointer group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div
        style={{ 
          transform: mousePos.isHovered 
            ? `rotateX(${mousePos.x}deg) rotateY(${mousePos.y}deg) scale3d(1.02, 1.02, 1.02)` 
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d'
        }}
        className={`relative bg-gradient-to-br ${cat.bg} rounded-[28px] p-8 border border-gray-100 transition-transform duration-300 ease-out h-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] group-hover:shadow-[0_30px_50px_rgba(0,0,0,0.12)]`}
      >
        <div style={{ transform: mousePos.isHovered ? 'translateZ(50px)' : 'translateZ(0)', transformStyle: 'preserve-3d' }} className="transition-transform duration-300 ease-out relative z-10 h-full flex flex-col">
          <span className="absolute top-0 right-0 text-xs font-manrope font-bold px-3 py-1 rounded-full text-white shadow-md transition-transform duration-300" style={{ background: cat.accent, transform: mousePos.isHovered ? 'translateZ(40px) translateY(-5px) translateX(5px)' : 'translateZ(0)' }}>
            {cat.badge}
          </span>
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.iconBg} flex items-center justify-center mb-6 shadow-lg transition-transform duration-300`} style={{ transform: mousePos.isHovered ? 'translateZ(60px) scale(1.1)' : 'translateZ(0)' }}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <p className="font-dm text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2 transition-transform duration-300" style={{ transform: mousePos.isHovered ? 'translateZ(30px)' : 'translateZ(0)' }}>
            {cat.subtitle}
          </p>
          <h3 className="font-sora font-extrabold text-2xl text-slate-900 mb-3 transition-transform duration-300" style={{ transform: mousePos.isHovered ? 'translateZ(40px)' : 'translateZ(0)' }}>
            {cat.title}
          </h3>
          <p className="font-dm text-slate-500 text-sm leading-relaxed mb-6 flex-1 transition-transform duration-300" style={{ transform: mousePos.isHovered ? 'translateZ(20px)' : 'translateZ(0)' }}>
            {cat.description}
          </p>
          <ul className="space-y-2.5 mt-auto">
            {cat.features.map((f, i) => (
              <li key={f} className="flex items-center gap-2.5 transition-transform duration-300" style={{ transform: mousePos.isHovered ? `translateZ(${20 + (i * 5)}px)` : 'translateZ(0)' }}>
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: cat.accent }} />
                <span className="font-dm text-sm font-medium text-slate-700">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-10 pointer-events-none transition-transform duration-500 ease-out" style={{ background: cat.accent, transform: mousePos.isHovered ? 'translateZ(-30px) scale(1.2)' : 'translateZ(0) scale(1)' }} />
      </div>
    </div>
  );
}

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
    const handleCloseModals = () => {
      setSelectedCategory(null);
    };
    
    window.addEventListener('open-category', handleOpenCategory);
    window.addEventListener('close-modals', handleCloseModals);
    return () => {
      window.removeEventListener('open-category', handleOpenCategory);
      window.removeEventListener('close-modals', handleCloseModals);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-bg {
          animation: gradient-bg 15s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>
      <section id="collections" className="py-24 relative overflow-hidden animate-gradient-bg" style={{ backgroundImage: 'linear-gradient(-45deg, #ffffff, #f8fafc, #f1f5f9, #ffffff)' }}>
      {/* Animated Background Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
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
          {categories.map((cat) => (
            <CategoryCard 
              key={cat.title} 
              cat={cat} 
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-category', { detail: cat.title }));
              }} 
            />
          ))}
        </div>
        </div>
      </section>

      {/* Popup Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity" 
              onClick={() => setSelectedCategory(null)} 
            />
            
            {/* Modal Content */}
            <div className="relative w-full max-w-7xl max-h-[95vh] rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden animate-fade-in-up bg-white/40 backdrop-blur-3xl border border-white/60">
              
              {/* Floating Close Button */}
              <button 
                onClick={() => setSelectedCategory(null)} 
                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2.5 rounded-full bg-white/50 hover:bg-white/80 text-slate-800 backdrop-blur-md border border-white/50 shadow-sm transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Modal Body (Scrollable) */}
              <div className="overflow-y-auto custom-scrollbar w-full h-full">
                {selectedCategory.title === 'Premium' && <PremiumCollection />}
                {selectedCategory.title === 'Standard' && <StandardCollection />}
                {selectedCategory.title === 'Regular' && <RegularCollection />}
                {selectedCategory.title === 'Sustainable' && <SustainableCollection />}
              </div>
            </div>
          </div>
        )}
    </>
  );
}
