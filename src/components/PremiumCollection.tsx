import { useState, useEffect } from 'react';
import { Crown, Glasses, Briefcase, Headphones, Gift, UserPlus, Tag, Star, X, ShoppingCart, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartContext';

const premiumCards = [
  { 
    title: 'Luxury Watches', 
    desc: 'Elegant timepieces from world-renowned brands', 
    icon: Crown,
    hoverBg: 'rgba(217, 119, 6, 0.16)', // Warm Gold / Amber
    hoverBorder: 'rgba(245, 158, 11, 0.65)',
    hoverShadow: 'rgba(180, 83, 9, 0.35)',
    hoverTitle: '#92400E',
    iconBg: '#92400E'
  },
  { 
    title: 'Premium Eyewear', 
    desc: 'Sophisticated frames from iconic fashion houses', 
    icon: Glasses,
    hoverBg: 'rgba(14, 165, 233, 0.16)', // Sky / Azure
    hoverBorder: 'rgba(56, 189, 248, 0.65)',
    hoverShadow: 'rgba(2, 132, 199, 0.35)',
    hoverTitle: '#0369A1',
    iconBg: '#0369A1'
  },
  { 
    title: 'Executive Desk', 
    desc: 'Premium desk accessories for top leadership', 
    icon: Briefcase,
    hoverBg: 'rgba(120, 53, 15, 0.16)', // Deep Walnut / Bronze
    hoverBorder: 'rgba(180, 83, 9, 0.65)',
    hoverShadow: 'rgba(120, 53, 15, 0.35)',
    hoverTitle: '#78350F',
    iconBg: '#78350F'
  },
  { 
    title: 'Technology', 
    desc: 'Cutting-edge tech gifts for modern executives', 
    icon: Headphones,
    hoverBg: 'rgba(99, 102, 241, 0.16)', // Indigo / Royal Blue
    hoverBorder: 'rgba(129, 140, 248, 0.65)',
    hoverShadow: 'rgba(79, 70, 229, 0.35)',
    hoverTitle: '#4338CA',
    iconBg: '#4338CA'
  },
  { 
    title: 'Curated Hampers', 
    desc: 'Bespoke hampers crafted with finest products', 
    icon: Gift,
    hoverBg: 'rgba(225, 29, 72, 0.16)', // Crimson / Rose
    hoverBorder: 'rgba(244, 63, 94, 0.65)',
    hoverShadow: 'rgba(190, 18, 60, 0.35)',
    hoverTitle: '#BE123C',
    iconBg: '#BE123C'
  },
  { 
    title: 'Joining Kits', 
    desc: 'Welcome kits for new employees and leaders', 
    icon: UserPlus,
    hoverBg: 'rgba(16, 185, 129, 0.16)', // Emerald / Jade
    hoverBorder: 'rgba(52, 211, 153, 0.65)',
    hoverShadow: 'rgba(5, 150, 105, 0.35)',
    hoverTitle: '#047857',
    iconBg: '#047857'
  },
  { 
    title: 'Event Giveaways', 
    desc: 'Promo merchandise for mass distribution and events', 
    icon: Tag,
    hoverBg: 'rgba(168, 85, 247, 0.16)', // Violet / Purple
    hoverBorder: 'rgba(192, 132, 252, 0.65)',
    hoverShadow: 'rgba(147, 51, 234, 0.35)',
    hoverTitle: '#7E22CE',
    iconBg: '#7E22CE'
  },
];

type Product = {
  name: string;
  images: string[]; // First image is the main one
  material?: string;
  category?: string;
};

const premiumProducts: Record<string, Product[]> = {
  'Luxury Watches': [
    { 
      name: 'Michael Kors: Pyper Three-Hand Gold-Tone Alloy Watch (MK4593I)', 
      images: ['http://www.kamalwatch.com/cdn/shop/products/1232098-michaelkorspyperthreehandgoldtonealloywatchmk4593i.jpg?v=1685451647', '/11.jpg'],
      material: 'Gold-Tone Stainless Steel & Mineral Glass'
    },
    { 
      name: 'Michael Kors: Lennox Three-Hand Gold-Tone Watch (MK7229I)', 
      images: ['http://www.kamalwatch.com/cdn/shop/products/1230641-michaelkorslennoxthreehandgoldtonestainlesssteelwatchmk7229i.jpg?v=1685451345'],
      material: 'Gold-Tone Stainless Steel & Pavé Accents'
    },
    { 
      name: 'Michael Kors: Everest Chronograph Rose Gold-Tone Watch (MK7213)', 
      images: ['http://www.kamalwatch.com/cdn/shop/products/1230636-michaelkorseverestchronographrosegoldtonestainlesssteelwatchmk7213.jpg?v=1685451020'],
      material: 'Rose Gold-Tone Chronograph & Date Window'
    },
    { 
      name: 'Michael Kors: Accelerator Chronograph Watch for Men (MK9113)', 
      images: ['https://www.kamalwatch.com/cdn/shop/files/MP000000025626989_1316Wx1468H_202503091730081_1.jpg?v=1766227617&width=533'],
      material: 'Heavy Stainless Steel & Sport Chrono Dial'
    },
    { 
      name: 'Michael Kors: Analogue Gold-Tone Watch (MK5605)', 
      images: ['http://www.kamalwatch.com/cdn/shop/products/634769-michaelkorsanaloguegoldtonewatchforwomenmk5605.jpg?v=1685450748'],
      material: 'Signature Champagne Dial Gold Finish'
    },
    { 
      name: 'Tissot: PRX Chronograph 41mm Stainless Steel (T137.417.11.041.00)', 
      images: ['https://www.tissotwatches.com/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw26efbd62/product-pictures/9b1ad177-f195-46bb-8cfe-e2b07afd5a3a_T137-417-11-041-00_Shadow.png', '/10.jpg'],
      material: 'Swiss Quartz Calibre & Sapphire Crystal Glass'
    },
    { 
      name: 'Tissot: Desir Classic 29.6mm Luxury Watch (T152.223.11.496.00)', 
      images: ['https://www.tissotwatches.com/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw08add161/product-pictures/69c7ae7c-a66e-4e97-b514-bb2738461695_T152-223-11-496-00_Shadow.png'],
      material: 'Swiss Made 316L Stainless Steel'
    },
    { 
      name: 'Ethos: The Connoisseur\'s Special Edition Collection', 
      images: ['/8.jpg', '/9.jpg', '/12.jpg', '/13.jpg', '/14.jpg'],
      material: 'Curated Heritage Horology Selection'
    },
  ],
  'Premium Eyewear': [
    { 
      name: 'Carrera: Sport-Luxury Aviator Sunglasses for Men', 
      images: ['https://img.tatacliq.com/images/i22//437Wx649H/MP000000025151524_437Wx649H_202501270010461.jpeg', '/1.jpg', '/4.jpg'],
      material: 'Optyl & UV-Protected Polycarbonate'
    },
    { 
      name: 'Carrera: Executive Rectangular Polarized Sunglasses', 
      images: ['https://img.tatacliq.com/images/i9/658Wx734H/MP000000012879738_658Wx734H_202212170226311.jpeg', '/7.jpg'],
      material: 'Polarized Anti-Glare Premium Lenses'
    },
    { 
      name: 'Carrera: Navigator Urban Sunglasses Collection', 
      images: ['https://img.tatacliq.com/images/i31/437Wx649H/MP000000030773316_437Wx649H_202604221006301.jpeg'],
      material: 'Lightweight Alloy Frame & Silicone Pads'
    },
    { 
      name: 'Ray-Ban: The Aviator Classic', 
      images: ['/2.jpg', '/5.jpg'],
      material: 'Iconic Gold Metal & G-15 Crystal Green Lens'
    },
    { 
      name: 'Gucci: Signature Acetate Frames', 
      images: ['/3.jpg', '/6.jpg'],
      material: 'Italian Acetate with Gold Interlocking G'
    },
  ],
  'Executive Desk': [
    { name: 'Premium Wooden Desk Organizers', images: ['https://i.pinimg.com/1200x/c0/d9/7a/c0d97a46b2e2f2c76939e840752656e4.jpg'], material: 'Handcrafted Sheesham & Natural Oil' },
    { name: 'Personalized Executive Name Lamps', images: ['https://i.pinimg.com/1200x/e9/41/a7/e941a78a18baad0b3f975a9414e8b783.jpg'], material: 'Laser Cut Acrylic with Warm Wood Base' },
    { name: 'Luxury LED Desk Clocks', images: ['https://i.pinimg.com/736x/6c/02/28/6c0228b14206d2c6f04c43305d60e2f1.jpg'], material: 'Natural Walnut Grain Touch Control' },
    { name: 'Premium Table Décor Accessories', images: ['https://i.pinimg.com/1200x/a9/0f/c5/a90fc571f4a705ac34b82b3b0d91274c.jpg'], material: 'Brushed Brass Metal & Stone Base' },
    { name: 'Premium Leatherette Organizer', images: ['https://i.pinimg.com/1200x/37/0c/88/370c881efd5094e97e69b80ba5a92bb8.jpg'], material: 'Hand-Stitched Textured PU Leather' },
    { name: 'Executive Notebook & Pen Set', images: ['https://i.pinimg.com/1200x/0a/25/41/0a2541d1cd4de5362a4816cf7ecd88f1.jpg'], material: 'Gold Edge Paper & Heavy Roller Pen' },
    { name: 'Smart Desk Lamp', images: ['https://i.pinimg.com/736x/00/5c/42/005c4240fb4fecc8440b2973c27c6677.jpg'], material: 'Dimmable Warm Touch Aluminum' },
  ],
  'Technology': [
    { name: 'Premium Metal USB Drives', images: ['https://i.pinimg.com/736x/8b/7e/2d/8b7e2d2b2dd170ef334bbfc4bef0eb5b.jpg'], material: 'Zinc Alloy High-Speed 3.0' },
    { name: 'Wireless Charging Stations', images: ['https://i.pinimg.com/736x/7e/b9/fe/7eb9fe3f0f4ba362cf381acd15694288.jpg'], material: 'Fast 15W Qi-Certified Leather Pad' },
    { name: 'Executive Power Banks', images: ['https://i.pinimg.com/736x/f4/53/fa/f453fa6579dcb16fe49df35f5dc84f48.jpg'], material: '10000mAh Metallic Type-C PD' },
    { name: 'Wireless Charging Dock', images: ['https://i.pinimg.com/736x/95/a5/7e/95a57ee05c39ba2ceec4ba1857093cfd.jpg'], material: 'Multi-Device 3-in-1 Magnetic Dock' },
    { name: 'Bluetooth Speakers', images: ['https://i.pinimg.com/736x/1f/44/f0/1f44f0385ebb66764e22a868467dc09d.jpg'], material: 'Deep Bass Fabric & Aluminum Trim' },
  ],
  'Curated Hampers': [
    { name: 'Executive Workstation Hamper', images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80'], material: 'Bespoke Rigid Wooden Gift Box' },
    { name: 'Leadership Appreciation Hamper', images: ['https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80'], material: 'Satin Lined Luxury Gift Box' },
    { name: 'Festive Luxury Collection', images: ['https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80'], material: 'Handmade Foil-Embossed Packaging' },
    { name: 'Premium Wellness Hamper', images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80'], material: 'Organic Gourmet Essentials Box' },
  ],
  'Joining Kits': [
    { name: 'Employee Welcome Kits', images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80'], material: 'Custom Brand Embossed Gift Box' },
    { name: 'Employee Joining Kits', images: ['https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80'], material: 'Complete Onboarding 4-Item Pack' },
    { name: 'Coffee Mugs', images: ['https://i.pinimg.com/736x/78/fc/6c/78fc6cc72efbcec6fd4471a2f5adc5af.jpg'], material: 'Matte Ceramic with Wooden Coaster' },
    { name: 'Keychains', images: ['https://i.pinimg.com/1200x/bf/36/12/bf36129637a8bdefb955407b4ea0680a.jpg'], material: 'Genuine Leather with Gunmetal Ring' },
  ],
  'Event Giveaways': [
    { name: 'Conference Kits', images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80'], material: 'Water-Resistant Executive Portfolio' },
    { name: 'Promotional Merchandise', images: ['https://i.pinimg.com/736x/78/87/f5/7887f5d56647313252ccb7565378c405.jpg'], material: 'Custom Screen Printed Accessories' },
    { name: 'Training Program Gifts', images: ['https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=500&q=80'], material: 'Productivity Card & Pen Combo' },
    { name: 'Lanyards', images: ['https://i.pinimg.com/1200x/0f/2c/4b/0f2c4bb8097cb247b5e9392b31983c55.jpg'], material: 'Satin Smooth Ribbon with Metal Clip' },
  ]
};

export default function PremiumCollection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedSubCategory, setSelectedSubCategory] = useState<typeof premiumCards[0] | null>(null);
  const [activeImage, setActiveImage] = useState<Record<string, string>>({});
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    const handleClose = () => setSelectedSubCategory(null);
    window.addEventListener('close-modals', handleClose);
    return () => window.removeEventListener('close-modals', handleClose);
  }, []);

  useEffect(() => {
    // Reset active images when modal opens
    if (selectedSubCategory) {
      const initialActiveImages: Record<string, string> = {};
      premiumProducts[selectedSubCategory.title]?.forEach(p => { initialActiveImages[p.name] = p.images[0]; });
      setActiveImage(initialActiveImages);
    }
  }, [selectedSubCategory]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      className="relative py-16 lg:py-24 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image: Clean, Vibrant & High-Resolution Flat Lay (No foggy/milky cover) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="https://user47455.na.imgto.link/public/20261024/69e5c0a34528cd6061c8a497-premium-corporate-gifting-elegance.avif" 
          alt="Premium Corporate Gifting Elegance" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <style>{`
        .glass-premium-card {
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(28px) saturate(180%);
          -webkit-backdrop-filter: blur(28px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-top: 2px solid rgba(255, 255, 255, 0.95);
          border-left: 1.5px solid rgba(255, 255, 255, 0.9);
          border-radius: 32px;
          box-shadow: 0 15px 35px -5px rgba(67, 20, 7, 0.12), 
                      0 5px 15px rgba(0, 0, 0, 0.05),
                      inset 0 1px 2px rgba(255, 255, 255, 0.9);
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        /* Cursor Hover: Unique Color Shift & Soft Shadow for Each Card */
        .glass-premium-card:hover {
          transform: translateY(-10px) scale(1.02);
          background: var(--hover-bg, rgba(255, 255, 255, 0.65));
          backdrop-filter: blur(32px) saturate(200%);
          -webkit-backdrop-filter: blur(32px) saturate(200%);
          border-color: var(--hover-border, rgba(255, 255, 255, 0.95));
          box-shadow: 0 30px 60px -12px var(--hover-shadow, rgba(124, 45, 18, 0.35)),
                      0 12px 24px -8px rgba(67, 20, 7, 0.18),
                      inset 0 1px 2px rgba(255, 255, 255, 0.9);
        }
        .glass-premium-card .card-title {
          color: #431407;
          font-weight: 800;
          letter-spacing: -0.01em;
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.9);
        }
        .glass-premium-card .card-desc {
          color: #334155;
          font-weight: 600;
          line-height: 1.6;
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
        }
        .glass-premium-card:hover .card-title {
          color: var(--hover-title, #7C2D12) !important;
        }
        .glass-premium-card:hover .card-desc {
          color: #0F172A !important;
        }
        .glass-premium-card:hover .premium-icon-wrap {
          background: var(--icon-bg, #7C2D12);
          transform: scale(1.1);
          box-shadow: 0 12px 25px -4px var(--hover-shadow, rgba(124, 45, 18, 0.4));
        }
        .premium-icon-wrap {
          background-color: #7C2D12;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 18px rgba(67, 20, 7, 0.3);
          transition: all 0.4s ease;
        }
        .elegant-script {
          font-family: 'Playfair Display', 'Didot', 'Georgia', serif;
          font-style: italic;
        }
      `}</style>

      {/* Thin Luxury Gold Curves */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" preserveAspectRatio="none">
        <path d="M-100,200 C300,400 600,0 1200,250 C1800,500 2200,100 2600,300" stroke="#D97706" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
        <path d="M-100,600 C400,400 800,800 1400,550 C2000,300 2400,700 2800,600" stroke="#D97706" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Decorative Floating Icons */}
      <div className="absolute top-[5%] right-[5%] opacity-15 blur-[1px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px) rotate(15deg)` }}>
        <Star className="w-32 h-32 text-[#7C2D12]" strokeWidth={1} />
      </div>
      <div className="absolute bottom-[15%] left-[5%] opacity-15 blur-[2px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px) rotate(-15deg)` }}>
        <Crown className="w-40 h-40 text-[#9A3412]" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-[5%] right-[10%] opacity-20 blur-[1px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * 1}px, ${mousePos.y * 1}px) rotate(45deg)` }}>
        <Crown className="w-24 h-24 text-[#D97706]" strokeWidth={1} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center"
      >
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-amber-200/60 shadow-sm text-[#92400E] text-[15px] lg:text-[17px] font-bold mb-4 tracking-wide">
            Curated for Leaders Who Deserve the Finest
          </span>
          <h2 className="text-[#431407] text-[40px] lg:text-[56px] font-black mb-6 leading-tight tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
            Premium Corporate Gifting
          </h2>
          <p className="text-[#1E293B] text-[16px] lg:text-[18px] font-medium leading-[1.8] max-w-[700px] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            Designed for leadership teams, key clients and executive appreciation programs. Every gift speaks of unparalleled quality and profound thoughtfulness.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-24">
          {premiumCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: i * 0.1 }} 
                key={card.title}
              >
                <div 
                  className="glass-premium-card p-8 h-full flex flex-col items-center text-center cursor-pointer group" 
                  onClick={() => setSelectedSubCategory(card)}
                  style={{
                    ['--hover-bg' as any]: card.hoverBg,
                    ['--hover-border' as any]: card.hoverBorder,
                    ['--hover-shadow' as any]: card.hoverShadow,
                    ['--hover-title' as any]: card.hoverTitle,
                    ['--icon-bg' as any]: card.iconBg,
                  }}
                >
                  <div className="premium-icon-wrap w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="card-title text-xl font-bold mb-3 transition-colors duration-300">{card.title}</h4>
                  <p className="card-desc text-sm transition-colors duration-300">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium Footer Line with High-Contrast Glass Banner for Ultra-Readability */}
        <div className="text-center mt-6 relative px-8 py-6 rounded-3xl bg-white/55 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_rgba(67,20,7,0.08)] max-w-3xl">
          <p className="text-[26px] lg:text-[38px] font-extrabold text-[#431407] mb-2 tracking-tight drop-shadow-sm">
            Because Great Leaders Don't Just Work.
          </p>
          <p className="elegant-script text-[34px] lg:text-[46px] font-bold text-[#B45309] drop-shadow-sm">
            They Inspire Greatness.
          </p>
        </div>
      </motion.div>

      {/* Products Modal */}
      {selectedSubCategory && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-12">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedSubCategory(null)} 
          />
          <div className="relative w-full max-w-5xl max-h-[85vh] rounded-[28px] shadow-[0_25px_90px_rgba(0,0,0,0.35)] flex flex-col overflow-hidden animate-fade-in-up bg-[#FDFBF7]/95 backdrop-blur-2xl border border-amber-900/10">
            {/* Modal Header */}
            <div className="px-6 md:px-8 py-5 bg-white/80 backdrop-blur-xl border-b border-amber-900/10 flex items-center justify-between z-10 shrink-0">
              <div>
                <h3 className="font-sora font-extrabold text-2xl text-slate-900">{selectedSubCategory.title}</h3>
                <p className="font-dm text-sm text-[#9A3412] font-medium mt-0.5">{selectedSubCategory.desc}</p>
              </div>
              <button 
                onClick={() => setSelectedSubCategory(null)} 
                className="p-2.5 rounded-full bg-amber-50 hover:bg-amber-100 text-slate-600 transition-colors border border-amber-200/60"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Products Grid */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1 bg-[#FAF7F2]/60">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-4">
                {premiumProducts[selectedSubCategory.title]?.map((p) => {
                  const isAdded = cart.some(item => item.name === p.name);
                  return (
                    <div 
                      key={p.name} 
                      onClick={() => setQuickViewProduct({ ...p, category: selectedSubCategory.title })}
                      className="bg-white/90 hover:bg-white rounded-[24px] p-4 border border-slate-200/90 hover:border-amber-500 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.06),0_2px_6px_-1px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(217,119,6,0.22)] transition-all duration-300 group flex flex-col cursor-pointer hover:-translate-y-1.5 relative"
                    >
                      {/* Product Image Stage */}
                      <div className="w-full h-52 rounded-2xl overflow-hidden mb-3.5 relative bg-white border border-slate-200/80 p-2 flex items-center justify-center">
                        <img 
                          src={activeImage[p.name] || p.images[0]} 
                          alt={p.name} 
                          className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500" 
                        />

                        {/* Quick View Floating Action Overlay */}
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setQuickViewProduct({ ...p, category: selectedSubCategory.title });
                            }}
                            className="p-2.5 rounded-full bg-white text-slate-800 shadow-lg hover:bg-amber-600 hover:text-white transition-all transform hover:scale-110"
                            title="Quick View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Image Thumbnails if multiple */}
                      {p.images.length > 1 && (
                        <div className="flex gap-1.5 mb-2.5" onClick={(e) => e.stopPropagation()}>
                          {p.images.map(img => (
                            <button 
                              key={img} 
                              onClick={() => setActiveImage(prev => ({ ...prev, [p.name]: img }))}
                              className={`w-8 h-8 rounded-lg overflow-hidden border-2 transition-colors p-0.5 bg-slate-50 ${activeImage[p.name] === img ? 'border-amber-500' : 'border-slate-200 hover:border-amber-300'}`}
                            >
                              <img src={img} alt="" className="w-full h-full object-contain" />
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Product Title */}
                      <h4 className="font-manrope font-bold text-slate-900 text-[15px] leading-snug mb-1 group-hover:text-amber-700 transition-colors line-clamp-2">
                        {p.name}
                      </h4>

                      {/* Material / Spec Feature line */}
                      <p className="text-xs font-medium text-slate-500 mb-4 line-clamp-1">
                        👑 {p.material || 'Executive Luxury Finish'}
                      </p>

                      {/* Add To Quote Action Button */}
                      <div className="mt-auto pt-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            if (isAdded) {
                              removeFromCart(p.name);
                            } else {
                              addToCart({ name: p.name, image: p.images[0], tag: selectedSubCategory.title });
                            }
                          }}
                          className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-2 shadow-sm ${
                            isAdded 
                              ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-[0_4px_14px_rgba(217,119,6,0.3)]' 
                              : 'bg-[#7C2D12] text-white hover:bg-[#9A3412] hover:shadow-[0_6px_20px_rgba(124,45,18,0.25)]'
                          }`}
                        >
                          <ShoppingCart className="w-4 h-4" /> {isAdded ? 'Added ✓' : 'Add to Quote'}
                        </button>
                      </div>
                    </div>
                  );
                })}

                {/* WhatsApp More Options Card */}
                <div className="bg-gradient-to-br from-[#7C2D12] to-[#431407] text-white rounded-[24px] p-5 shadow-md border border-orange-950 flex flex-col justify-between items-center text-center group hover:shadow-xl transition-all min-h-[280px]">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center my-auto border border-white/20 group-hover:scale-110 transition-transform">
                    <span className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="font-sora font-bold text-white text-base mb-1.5">Looking for More?</h4>
                  <p className="font-dm text-xs text-orange-200/80 leading-relaxed">
                    Explore our complete executive catalog with bespoke custom branding options.
                  </p>
                </div>
                <a
                  href={`https://wa.me/918959817421?text=Hello%2C%20I%20want%20to%20explore%20more%20options%20for%20Premium%20-%20${encodeURIComponent(selectedSubCategory.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-manrope font-bold uppercase tracking-wide flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-105"
                >
                  <span>More Options on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Quick View E-Commerce Modal for Premium Collection */}
    <AnimatePresence>
      {quickViewProduct && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 sm:p-6 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setQuickViewProduct(null)}
          />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-100 flex flex-col sm:flex-row"
          >
            <button 
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-full sm:w-1/2 h-64 sm:h-auto bg-slate-50 relative p-6 flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-100">
              <div className="w-full h-48 sm:h-60 flex items-center justify-center">
                <img 
                  src={activeImage[quickViewProduct.name] || quickViewProduct.images[0]} 
                  alt={quickViewProduct.name} 
                  className="w-full h-full object-contain" 
                />
              </div>
              {quickViewProduct.images.length > 1 && (
                <div className="flex gap-2 mt-4">
                  {quickViewProduct.images.map((img: string) => (
                    <button
                      key={img}
                      onClick={() => setActiveImage(prev => ({ ...prev, [quickViewProduct.name]: img }))}
                      className={`w-11 h-11 rounded-lg overflow-hidden border-2 transition-colors p-1 bg-white ${
                        (activeImage[quickViewProduct.name] || quickViewProduct.images[0]) === img ? 'border-amber-600' : 'border-slate-200'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
                  {quickViewProduct.category || selectedSubCategory?.title || 'Executive Premium'}
                </span>
                <h3 className="font-sora font-extrabold text-xl text-slate-900 mb-3">
                  {quickViewProduct.name}
                </h3>

                <div className="bg-slate-50 p-4 rounded-xl mb-6 border border-slate-100 space-y-2 text-xs text-slate-600">
                  <p><strong className="text-slate-800">Material:</strong> {quickViewProduct.material || 'Executive Luxury Finish'}</p>
                  <p><strong className="text-slate-800">Branding:</strong> Custom Laser Engraving & Metal Embossing</p>
                  <p><strong className="text-slate-800">Packaging:</strong> Bespoke Executive Gift Box</p>
                </div>
              </div>

              <div className="space-y-2.5">
                <button 
                  onClick={() => {
                    const isAdded = cart.some(item => item.name === quickViewProduct.name);
                    if (isAdded) {
                      removeFromCart(quickViewProduct.name);
                    } else {
                      addToCart({
                        name: quickViewProduct.name,
                        image: quickViewProduct.images[0],
                        tag: quickViewProduct.category || selectedSubCategory?.title || 'Premium'
                      });
                    }
                    setQuickViewProduct(null);
                  }}
                  className="w-full py-3 rounded-xl bg-[#7C2D12] hover:bg-[#9A3412] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <ShoppingCart className="w-4 h-4" />
                  {cart.some(item => item.name === quickViewProduct.name) ? 'Remove from Quote' : 'Add to Quote Bucket'}
                </button>

                <a 
                  href={`https://wa.me/918959817421?text=Hello%2C%20I%20am%20interested%20in%20bulk%20quote%20for%20${encodeURIComponent(quickViewProduct.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl border border-amber-600 text-amber-900 hover:bg-amber-50 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    </section>
  );
}
