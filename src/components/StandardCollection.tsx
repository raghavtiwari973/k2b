import { useState, useEffect } from 'react';
import { Briefcase, Monitor, Package, Sparkles, BookOpen, Layout, Layers, X, ShoppingCart, Smartphone, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartContext';

const standardCards = [
  { 
    title: 'Workspace Essentials', 
    desc: 'Customized pen stands and organizers', 
    icon: Briefcase,
    hoverBg: 'rgba(59, 130, 246, 0.16)', // Royal Blue
    hoverBorder: 'rgba(96, 165, 250, 0.65)',
    hoverShadow: 'rgba(37, 99, 235, 0.35)',
    hoverTitle: '#1D4ED8',
    iconBg: '#1D4ED8'
  },
  { 
    title: 'Technology Essentials', 
    desc: 'Branded USB drives and digital clocks', 
    icon: Monitor,
    hoverBg: 'rgba(20, 184, 166, 0.16)', // Emerald / Teal
    hoverBorder: 'rgba(45, 212, 191, 0.65)',
    hoverShadow: 'rgba(13, 148, 136, 0.35)',
    hoverTitle: '#0F766E',
    iconBg: '#0F766E'
  },
  { 
    title: 'Corporate Desk Kits', 
    desc: 'Complete matching sets for employees', 
    icon: Package,
    hoverBg: 'rgba(249, 115, 22, 0.16)', // Warm Amber / Orange
    hoverBorder: 'rgba(251, 146, 60, 0.65)',
    hoverShadow: 'rgba(234, 88, 12, 0.35)',
    hoverTitle: '#C2410C',
    iconBg: '#C2410C'
  },
  { 
    title: 'Personalized Items', 
    desc: 'Custom tailored professional accessories', 
    icon: Sparkles,
    hoverBg: 'rgba(168, 85, 247, 0.16)', // Purple / Violet
    hoverBorder: 'rgba(192, 132, 252, 0.65)',
    hoverShadow: 'rgba(147, 51, 234, 0.35)',
    hoverTitle: '#7E22CE',
    iconBg: '#7E22CE'
  },
  { 
    title: 'Office Essentials', 
    desc: 'Branded pens and corporate diaries', 
    icon: BookOpen,
    hoverBg: 'rgba(236, 72, 153, 0.16)', // Rose / Pink
    hoverBorder: 'rgba(244, 114, 182, 0.65)',
    hoverShadow: 'rgba(219, 39, 119, 0.35)',
    hoverTitle: '#BE185D',
    iconBg: '#BE185D'
  },
  { 
    title: 'Desk Utilities', 
    desc: 'Mouse pads and mobile holders', 
    icon: Smartphone,
    hoverBg: 'rgba(16, 185, 129, 0.16)', // Fresh Jade / Green
    hoverBorder: 'rgba(52, 211, 153, 0.65)',
    hoverShadow: 'rgba(5, 150, 105, 0.35)',
    hoverTitle: '#047857',
    iconBg: '#047857'
  },
];

interface StandardProductItem {
  name: string;
  image: string;
  material?: string;
  category?: string;
}

const standardProducts: Record<string, StandardProductItem[]> = {
  'Workspace Essentials': [
    { name: 'Customized Wooden Pen Stands', image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=80', material: 'Crafted Solid Sheesham Wood' },
    { name: 'Multifunctional Desk Organizers', image: 'https://i.pinimg.com/1200x/c0/d9/7a/c0d97a46b2e2f2c76939e840752656e4.jpg', material: 'Premium Leatherette & MDF' },
    { name: 'Personalized Executive Calendars', image: 'https://i.pinimg.com/736x/7b/bb/ae/7bbbae50aa88c1864193a4cdd7226d84.jpg', material: 'Heavy Cardstock with Foil Print' },
    { name: 'Sticky Notes & Productivity Pads', image: 'https://i.pinimg.com/736x/6e/c7/1b/6ec71b543f7fa90c408aecb5889a42e9.jpg', material: 'Recycled Paper & Cardboard Box' },
    { name: 'Eco-Friendly Desk Station', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80', material: 'Natural Pine & Matte Finish' },
  ],
  'Technology Essentials': [
    { name: 'Branded USB Flash Drives & Pendrives', image: 'https://i.pinimg.com/736x/8b/7e/2d/8b7e2d2b2dd170ef334bbfc4bef0eb5b.jpg', material: 'Matte Metal Alloy & USB 3.0' },
    { name: 'Smart Digital Alarm Clocks with Temperature Display', image: 'https://i.pinimg.com/736x/6c/02/28/6c0228b14206d2c6f04c43305d60e2f1.jpg', material: 'Wood Grain LED Display' },
    { name: 'Universal Mobile Accessories & Fast Cables Kit', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&q=80', material: 'Braided Nylon & Aluminium Ends' },
    { name: 'Card-Style Business USB Drives', image: 'https://i.pinimg.com/736x/b1/7f/b2/b17fb2d41351f6f4d02d3b7296d49b6c.jpg', material: 'Sleek Slim ABS Plastic' },
    { name: 'Adjustable Metal Mobile & Tablet Stands', image: 'https://i.pinimg.com/736x/6a/48/cc/6a48cc09e3eceac5cfd5af77bdfbf5db.jpg', material: 'Aerospace Aluminum Alloy' },
  ],
  'Corporate Desk Kits': [
    { name: 'Executive Corporate Desk Kits', image: 'https://i.pinimg.com/1200x/0a/25/41/0a2541d1cd4de5362a4816cf7ecd88f1.jpg', material: 'Complete 5-in-1 Desk Combo' },
    { name: 'Utility Corporate Gift Sets', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80', material: 'Executive Gift Box Packaging' },
    { name: 'Double-Walled Insulated Bottle Sets', image: 'https://i.pinimg.com/736x/c3/f8/b8/c3f8b8637c15b66f052c80a25b6f2541.jpg', material: 'Food Grade 304 Stainless Steel' },
    { name: 'Premium Coffee Mug & Sipper Box', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80', material: 'Ceramic & Thermal Insulation' },
  ],
  'Personalized Items': [
    { name: 'Personalized Executive Office Accessories', image: 'https://i.pinimg.com/1200x/37/0c/88/370c881efd5094e97e69b80ba5a92bb8.jpg', material: 'Customized Laser Engraved' },
    { name: 'Premium Ceramic & Insulated Coffee Mugs', image: 'https://i.pinimg.com/736x/78/fc/6c/78fc6cc72efbcec6fd4471a2f5adc5af.jpg', material: 'High Gloss Ceramic Finish' },
    { name: 'Eco-Friendly Stationery & Planter Pen Kits', image: 'https://i.pinimg.com/236x/d0/35/cc/d035cc4cfe2eb85dae597161c373f938.jpg', material: 'Seed Infused Biodegradable' },
    { name: 'Custom Engraved Desk Clocks', image: 'https://i.pinimg.com/736x/00/5c/42/005c4240fb4fecc8440b2973c27c6677.jpg', material: 'Brushed Metallic Finish' },
  ],
  'Office Essentials': [
    { name: 'Branded Metal Executive Pen Sets', image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=80', material: 'Heavyweight Metal Rollerball' },
    { name: 'Corporate Hardbound Notebooks', image: 'https://i.pinimg.com/736x/c9/d0/f0/c9d0f03c10197ba89ae6da57e03004d7.jpg', material: '80 GSM Ivory Ruled Pages' },
    { name: 'Leatherette Executive Diaries', image: 'https://i.pinimg.com/736x/83/f2/9f/83f29f0ba1c3955bfdbb4c2e6c1b5509.jpg', material: 'PU Leather with Magnetic Clasp' },
    { name: 'Desk Planners & Annual Calendars', image: 'https://i.pinimg.com/736x/7b/bb/ae/7bbbae50aa88c1864193a4cdd7226d84.jpg', material: 'Spiral Bound Heavy Card' },
    { name: 'Eco Sticky Notes & Memo Dispenser', image: 'https://i.pinimg.com/736x/6e/c7/1b/6ec71b543f7fa90c408aecb5889a42e9.jpg', material: 'Self Adhesive Recycled Paper' },
  ],
  'Desk Utilities': [
    { name: 'Anti-Skid Premium Mouse Pads', image: 'https://i.pinimg.com/736x/2b/dc/13/2bdc1376749b4e23a6eaf707a3375261.jpg', material: 'Waterproof Textured PU Leather' },
    { name: 'Ergonomic Desktop Mobile Holders', image: 'https://i.pinimg.com/736x/6a/48/cc/6a48cc09e3eceac5cfd5af77bdfbf5db.jpg', material: 'Anti-Slip Weighted Base Metal' },
    { name: 'High-Speed Custom Metal Pendrives', image: 'https://i.pinimg.com/736x/b1/7f/b2/b17fb2d41351f6f4d02d3b7296d49b6c.jpg', material: 'Zinc Alloy Waterproof Body' },
    { name: 'Modular Desk Organizers & Cable Tidy', image: 'https://i.pinimg.com/736x/43/ba/bd/43babd24b1371756bac0f02515b8876f.jpg', material: 'Silicone & Solid Wood Base' },
  ]
};

export default function StandardCollection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedSubCategory, setSelectedSubCategory] = useState<typeof standardCards[0] | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<StandardProductItem | null>(null);
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    const handleClose = () => setSelectedSubCategory(null);
    window.addEventListener('close-modals', handleClose);
    return () => window.removeEventListener('close-modals', handleClose);
  }, []);

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
      className="py-16 lg:py-24 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image: 100% Pure, Vibrant & Clean (No Foggy / White Layer) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="https://user47455.na.imgto.link/public/20261024/391168867d6773003e0ebf4b-elegant-blue-corporate-gift-flat-lay.avif" 
          alt="Elegant Blue Corporate Gift Flat Lay" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <style>{`
        .glass-standard-card {
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(28px) saturate(180%);
          -webkit-backdrop-filter: blur(28px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-top: 2px solid rgba(255, 255, 255, 0.95);
          border-left: 1.5px solid rgba(255, 255, 255, 0.9);
          border-radius: 32px;
          box-shadow: 0 15px 35px -5px rgba(15, 23, 42, 0.12),
                      0 5px 15px rgba(0, 0, 0, 0.05),
                      inset 0 1px 2px rgba(255, 255, 255, 0.9);
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        /* Cursor Hover: Unique Color Shift & Soft Shadow for Each Card */
        .glass-standard-card:hover {
          transform: translateY(-10px) scale(1.02);
          background: var(--hover-bg, rgba(255, 255, 255, 0.65));
          backdrop-filter: blur(32px) saturate(200%);
          -webkit-backdrop-filter: blur(32px) saturate(200%);
          border-color: var(--hover-border, rgba(255, 255, 255, 0.95));
          box-shadow: 0 30px 60px -12px var(--hover-shadow, rgba(15, 23, 42, 0.35)),
                      0 12px 24px -8px rgba(15, 23, 42, 0.18),
                      inset 0 1px 2px rgba(255, 255, 255, 0.9);
        }
        .glass-standard-card .card-title {
          color: #0F172A;
          font-weight: 800;
          letter-spacing: -0.01em;
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.9);
        }
        .glass-standard-card .card-desc {
          color: #334155;
          font-weight: 600;
          line-height: 1.6;
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
        }
        .glass-standard-card:hover .card-title {
          color: var(--hover-title, #1D4ED8) !important;
        }
        .glass-standard-card:hover .card-desc {
          color: #020617 !important;
        }
        .glass-standard-card:hover .standard-icon-wrap {
          background: var(--icon-bg, #0F172A);
          transform: scale(1.1);
          box-shadow: 0 12px 25px -4px var(--hover-shadow, rgba(15, 23, 42, 0.4));
        }
        .standard-icon-wrap {
          background-color: #0F172A;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 18px rgba(15, 23, 42, 0.3);
          transition: all 0.4s ease;
        }
        .elegant-script {
          font-family: 'Playfair Display', 'Didot', 'Georgia', serif;
          font-style: italic;
        }
      `}</style>

      {/* Thin Luxury Blue Curves */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" preserveAspectRatio="none">
        <path d="M-100,200 C300,400 600,0 1200,250 C1800,500 2200,100 2600,300" stroke="#3B82F6" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
        <path d="M-100,600 C400,400 800,800 1400,550 C2000,300 2400,700 2800,600" stroke="#3B82F6" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Decorative Elements */}
      <div className="absolute top-[5%] right-[5%] opacity-15 blur-[1px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px) rotate(15deg)` }}>
        <Layers className="w-32 h-32 text-[#0F172A]" strokeWidth={1} />
      </div>
      <div className="absolute bottom-[15%] left-[5%] opacity-15 blur-[2px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px) rotate(-15deg)` }}>
        <Layout className="w-40 h-40 text-[#1E293B]" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-[5%] right-[10%] opacity-20 blur-[1px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * 1}px, ${mousePos.y * 1}px) rotate(45deg)` }}>
        <Briefcase className="w-24 h-24 text-[#3B82F6]" strokeWidth={1} />
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-blue-200/60 shadow-sm text-[#1D4ED8] text-[15px] lg:text-[17px] font-bold mb-4 tracking-wide">
            Practical. Elegant. Memorable.
          </span>
          <h2 className="text-[#0F172A] text-[40px] lg:text-[56px] font-black mb-6 leading-tight tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
            Standard Corporate Gifting
          </h2>
          <p className="text-[#1E293B] text-[16px] lg:text-[18px] font-medium leading-[1.8] max-w-[700px] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            Thoughtfully designed for managers, associates and event participants. Functional gifts that make a lasting impression in every workplace setting.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-24">
          {standardCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: i * 0.1 }} 
                key={card.title}
              >
                <div 
                  className="glass-standard-card p-8 h-full flex flex-col items-center text-center cursor-pointer group" 
                  onClick={() => setSelectedSubCategory(card)}
                  style={{
                    ['--hover-bg' as any]: card.hoverBg,
                    ['--hover-border' as any]: card.hoverBorder,
                    ['--hover-shadow' as any]: card.hoverShadow,
                    ['--hover-title' as any]: card.hoverTitle,
                    ['--icon-bg' as any]: card.iconBg,
                  }}
                >
                  <div className="standard-icon-wrap w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="card-title text-xl font-bold mb-3 transition-colors duration-300">{card.title}</h4>
                  <p className="card-desc text-sm transition-colors duration-300">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Standard Footer Line with High-Contrast Glass Banner for Ultra-Readability */}
        <div className="text-center mt-6 relative px-8 py-6 rounded-3xl bg-white/55 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.08)] max-w-3xl">
          <p className="text-[26px] lg:text-[38px] font-extrabold text-[#0F172A] mb-2 tracking-tight drop-shadow-sm">
            Because Everyday Work Needs
          </p>
          <p className="elegant-script text-[34px] lg:text-[46px] font-bold text-[#1D4ED8] drop-shadow-sm">
            Everyday Elegance.
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
          <div className="relative w-full max-w-6xl max-h-[88vh] rounded-[28px] shadow-[0_25px_90px_rgba(0,0,0,0.35)] flex flex-col overflow-hidden animate-fade-in-up bg-[#FDFBF7]/95 backdrop-blur-2xl border border-amber-900/10">
            {/* Modal Header */}
            <div className="px-6 md:px-8 py-5 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 flex items-center justify-between z-10 shrink-0">
              <div>
                <h3 className="font-sora font-extrabold text-2xl text-slate-900">{selectedSubCategory.title}</h3>
                <p className="font-dm text-sm text-slate-500 mt-0.5">{selectedSubCategory.desc}</p>
              </div>
              <button 
                onClick={() => setSelectedSubCategory(null)} 
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors border border-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Products Grid */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1 bg-[#FAF7F2]/60">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-4">
                {standardProducts[selectedSubCategory.title]?.map((p) => {
                  const isAdded = cart.some(item => item.name === p.name);
                  return (
                    <div 
                      key={p.name} 
                      onClick={() => setQuickViewProduct({ ...p, category: selectedSubCategory.title })}
                      className="bg-white/90 hover:bg-white rounded-[24px] p-4 border border-slate-200/90 hover:border-blue-500 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.06),0_2px_6px_-1px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.22)] transition-all duration-300 group flex flex-col cursor-pointer hover:-translate-y-1.5 relative"
                    >
                      {/* Product Image Stage */}
                      <div className="w-full h-52 rounded-2xl overflow-hidden mb-3.5 relative bg-slate-100/90 border border-slate-200/80">
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                        />

                        {/* Quick View Floating Action */}
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setQuickViewProduct({ ...p, category: selectedSubCategory.title });
                            }}
                            className="p-2.5 rounded-full bg-white text-slate-800 shadow-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
                            title="Quick View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Product Title */}
                      <h4 className="font-manrope font-bold text-slate-900 text-[15px] leading-snug mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {p.name}
                      </h4>

                      {/* Material / Spec Feature line */}
                      <p className="text-xs font-medium text-slate-500 mb-4 line-clamp-1">
                        ✨ {p.material || 'Premium Corporate Utility'}
                      </p>

                      {/* Add To Quote Action Button */}
                      <div className="mt-auto pt-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            if (isAdded) {
                              removeFromCart(p.name);
                            } else {
                              addToCart({ name: p.name, image: p.image, tag: selectedSubCategory.title });
                            }
                          }}
                          className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-2 shadow-sm ${
                            isAdded 
                              ? 'bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-[0_4px_14px_rgba(37,99,235,0.3)]' 
                              : 'bg-[#0F172A] text-white hover:bg-[#1E293B] hover:shadow-[0_6px_20px_rgba(15,23,42,0.25)]'
                          }`}
                        >
                          <ShoppingCart className="w-4 h-4" /> {isAdded ? 'Added ✓' : 'Add to Quote'}
                        </button>
                      </div>
                    </div>
                  );
                })}

                {/* WhatsApp More Options Card */}
                <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white rounded-[24px] p-5 shadow-md border border-slate-800 flex flex-col justify-between items-center text-center group hover:shadow-xl transition-all min-h-[280px]">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center my-auto border border-white/20 group-hover:scale-110 transition-transform">
                    <span className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="font-sora font-bold text-white text-base mb-1.5">Need More Options?</h4>
                  <p className="font-dm text-xs text-slate-300 leading-relaxed">
                    Discover additional corporate utility items and custom bulk packages.
                  </p>
                </div>
                <a
                  href={`https://wa.me/918959817421?text=Hello%2C%20I%20want%20to%20explore%20more%20options%20for%20Standard%20-%20${encodeURIComponent(selectedSubCategory.title)}.`}
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

      {/* Quick View E-Commerce Modal for Standard Collection */}
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
              
              <div className="w-full sm:w-1/2 h-64 sm:h-auto bg-slate-100 relative">
                <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-full object-cover" />
              </div>

              <div className="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    {quickViewProduct.category || selectedSubCategory?.title || 'Standard Collection'}
                  </span>
                  <h3 className="font-sora font-extrabold text-xl text-slate-900 mb-3">
                    {quickViewProduct.name}
                  </h3>

                  <div className="bg-slate-50 p-4 rounded-xl mb-6 border border-slate-100 space-y-2 text-xs text-slate-600">
                    <p><strong className="text-slate-800">Material:</strong> {quickViewProduct.material || 'Commercial High Grade'}</p>
                    <p><strong className="text-slate-800">Branding:</strong> Custom Laser Engraving & Screen Print Available</p>
                    <p><strong className="text-slate-800">Packaging:</strong> Premium Corporate Gift Box</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <button 
                    onClick={() => {
                      const isAdded = cart.some(item => item.name === quickViewProduct.name);
                      if (isAdded) {
                        removeFromCart(quickViewProduct.name);
                      } else {
                        addToCart({ name: quickViewProduct.name, image: quickViewProduct.image, tag: quickViewProduct.category || selectedSubCategory?.title || 'Standard' });
                      }
                      setQuickViewProduct(null);
                    }}
                    className="w-full py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {cart.some(item => item.name === quickViewProduct.name) ? 'Remove from Quote' : 'Add to Quote Bucket'}
                  </button>

                  <a 
                    href={`https://wa.me/918959817421?text=Hello%2C%20I%20am%20interested%20in%20bulk%20quote%20for%20${encodeURIComponent(quickViewProduct.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl border border-blue-600 text-blue-800 hover:bg-blue-50 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
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
