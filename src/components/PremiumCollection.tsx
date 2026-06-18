import { useState, useEffect } from 'react';
import { Crown, Briefcase, Headphones, Leaf, Gift, Sparkles, Star, X, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';

const premiumCards = [
  { title: 'Executive Desk', desc: 'Premium desk accessories for top leadership', icon: Briefcase },
  { title: 'Technology', desc: 'Cutting-edge tech gifts for modern executives', icon: Headphones },
  { title: 'Sustainable Luxury', desc: 'Eco-conscious premium gifting solutions', icon: Leaf },
  { title: 'Curated Hampers', desc: 'Bespoke hampers crafted with finest products', icon: Gift },
];

const premiumProducts: Record<string, {name: string, image: string}[]> = {
  'Executive Desk': [
    { name: 'Premium Wooden Desk Organizers', image: 'https://i.pinimg.com/1200x/c0/d9/7a/c0d97a46b2e2f2c76939e840752656e4.jpg' },
    { name: 'Personalized Executive Name Lamps', image: 'https://i.pinimg.com/1200x/e9/41/a7/e941a78a18baad0b3f975a9414e8b783.jpg' },
    { name: 'Luxury LED Desk Clocks', image: 'https://i.pinimg.com/736x/6c/02/28/6c0228b14206d2c6f04c43305d60e2f1.jpg' },
    { name: 'Premium Table Décor Accessories', image: 'https://i.pinimg.com/1200x/a9/0f/c5/a90fc571f4a705ac34b82b3b0d91274c.jpg' },
    { name: 'Premium Leatherette Organizer', image: 'https://i.pinimg.com/1200x/37/0c/88/370c881efd5094e97e69b80ba5a92bb8.jpg' },
    { name: 'Executive Notebook & Pen Set', image: 'https://i.pinimg.com/1200x/0a/25/41/0a2541d1cd4de5362a4816cf7ecd88f1.jpg' },
    { name: 'Smart Desk Lamp', image: 'https://i.pinimg.com/736x/00/5c/42/005c4240fb4fecc8440b2973c27c6677.jpg' },
  ],
  'Technology': [
    { name: 'Premium Metal USB Drives', image: 'https://i.pinimg.com/736x/8b/7e/2d/8b7e2d2b2dd170ef334bbfc4bef0eb5b.jpg' },
    { name: 'Wireless Charging Stations', image: 'https://i.pinimg.com/736x/7e/b9/fe/7eb9fe3f0f4ba362cf381acd15694288.jpg' },
    { name: 'Executive Power Banks', image: 'https://i.pinimg.com/736x/f4/53/fa/f453fa6579dcb16fe49df35f5dc84f48.jpg' },
    { name: 'Wireless Charging Dock', image: 'https://i.pinimg.com/736x/95/a5/7e/95a57ee05c39ba2ceec4ba1857093cfd.jpg' },
    { name: 'Bluetooth Speakers', image: 'https://i.pinimg.com/736x/1f/44/f0/1f44f0385ebb66764e22a868467dc09d.jpg' },
  ],
  'Sustainable Luxury': [
    { name: 'Bamboo Bottle Gift Sets', image: 'https://i.pinimg.com/736x/c3/f8/b8/c3f8b8637c15b66f052c80a25b6f2541.jpg' },
    { name: 'Eco-Friendly Executive Kits', image: 'https://i.pinimg.com/236x/d0/35/cc/d035cc4cfe2eb85dae597161c373f938.jpg' },
    { name: 'Premium Wooden Gift Sets', image: 'https://i.pinimg.com/1200x/9c/64/29/9c6429d25b3ca765e1492fcc0f9e74a6.jpg' },
    { name: 'Sustainable Corporate Gift Boxes', image: 'https://i.pinimg.com/1200x/98/6d/9c/986d9cf55035a660581a30a138b86862.jpg' },
  ],
  'Curated Hampers': [
    { name: 'Executive Workstation Hamper', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80' },
    { name: 'Leadership Appreciation Hamper', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80' },
    { name: 'Festive Luxury Collection', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80' },
    { name: 'Premium Wellness Hamper', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80' },
  ]
};

export default function PremiumCollection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedSubCategory, setSelectedSubCategory] = useState<typeof premiumCards[0] | null>(null);
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
      className="relative py-16 lg:py-24 overflow-hidden animate-gradient-bg"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundImage: 'linear-gradient(135deg, rgba(255,247,237,0.8) 0%, rgba(255,255,255,0.8) 35%, rgba(255,237,213,0.8) 70%, rgba(255,247,237,0.8) 100%)' }}
    >
      <style>{`
        .glass-premium-card {
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 30px;
          box-shadow: 0 10px 40px rgba(124, 45, 18, 0.05);
          transition: all 0.4s ease;
        }
        .glass-premium-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(124, 45, 18, 0.1);
        }
        .premium-icon-wrap {
          background-color: #7C2D12;
          border: 2px solid #D97706;
        }
        .elegant-script {
          font-family: 'Playfair Display', 'Didot', 'Georgia', serif;
          font-style: italic;
        }
      `}</style>

      {/* Abstract Organic Blob Shapes */}
      <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-[#FDE68A] opacity-30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-[#FDBA74] opacity-20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[10%] left-[20%] w-[400px] h-[400px] bg-[#FDE68A] opacity-30 blur-[100px] rounded-full pointer-events-none" />

      {/* Thin Luxury Gold Curves */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" preserveAspectRatio="none">
        <path d="M-100,200 C300,400 600,0 1200,250 C1800,500 2200,100 2600,300" stroke="#D97706" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
        <path d="M-100,600 C400,400 800,800 1400,550 C2000,300 2400,700 2800,600" stroke="#D97706" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Decorative Elements */}
      <div className="absolute top-[5%] right-[5%] opacity-20 blur-[1px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px) rotate(15deg)` }}>
        <Star className="w-32 h-32 text-[#7C2D12]" strokeWidth={1} />
      </div>
      <div className="absolute bottom-[15%] left-[5%] opacity-20 blur-[2px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px) rotate(-15deg)` }}>
        <Crown className="w-40 h-40 text-[#9A3412]" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-[5%] right-[10%] opacity-20 blur-[1px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * 1}px, ${mousePos.y * 1}px) rotate(45deg)` }}>
        <Sparkles className="w-24 h-24 text-[#D97706]" strokeWidth={1} />
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
          <h3 className="text-[#D97706] text-[20px] lg:text-[26px] font-medium mb-4 tracking-wide">
            Curated for Leaders Who Deserve the Finest
          </h3>
          <h2 className="text-[#7C2D12] text-[40px] lg:text-[56px] font-bold mb-6 leading-tight tracking-tight">
            Premium Corporate Gifting
          </h2>
          <p className="text-[#3F3F3F] text-[16px] lg:text-[18px] leading-[1.8] max-w-[700px]">
            Designed for leadership teams, key clients, and executive appreciation programs. Every gift speaks of unparalleled quality and profound thoughtfulness.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-24">
          {premiumCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: i * 0.1 }} 
                key={card.title}
              >
                <div className="glass-premium-card p-8 h-full flex flex-col items-center text-center cursor-pointer group" onClick={() => setSelectedSubCategory(card)}>
                  <div className="premium-icon-wrap w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-[#7C2D12] text-xl font-bold mb-3">{card.title}</h4>
                  <p className="text-[#3F3F3F] text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium Footer Line */}
        <div className="text-center mt-8 relative">
          <p className="text-[28px] lg:text-[42px] font-bold text-[#7C2D12] mb-3 tracking-tight">
            Because Great Leaders Don't Just Work.
          </p>
          <p className="elegant-script text-[36px] lg:text-[48px] text-[#D97706]">
            They Inspire Greatness.
          </p>
        </div>
      </motion.div>

      {/* Products Modal */}
      {selectedSubCategory && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-12">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedSubCategory(null)} 
          />
          <div className="relative w-full max-w-5xl max-h-[85vh] rounded-[24px] shadow-[0_20px_80px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden animate-fade-in-up bg-white">
            <div className="px-6 md:px-8 py-6 bg-white border-b border-gray-100 flex items-center justify-between z-10 shrink-0">
              <div>
                <h3 className="font-sora font-extrabold text-2xl text-slate-900">{selectedSubCategory.title}</h3>
                <p className="font-dm text-sm text-slate-500 mt-1">{selectedSubCategory.desc}</p>
              </div>
              <button 
                onClick={() => setSelectedSubCategory(null)} 
                className="p-2.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-slate-50 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {premiumProducts[selectedSubCategory.title]?.map((p) => {
                  const isAdded = cart.some(item => item.name === p.name);
                  return (
                    <div key={p.name} className="bg-white rounded-[20px] p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col">
                      <div className="w-full h-48 rounded-2xl overflow-hidden mb-4 relative bg-slate-100">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <h4 className="font-manrope font-bold text-slate-800 text-sm mb-4 flex-1">{p.name}</h4>
                      <button 
                        onClick={() => isAdded ? removeFromCart(p.name) : addToCart({ name: p.name, image: p.image, tag: selectedSubCategory.title })}
                        className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2 ${
                          isAdded ? 'bg-[#D97706] text-white hover:bg-[#B45309]' : 'bg-[#7C2D12] text-white hover:bg-[#431407]'
                        }`}
                      >
                        <ShoppingCart className="w-4 h-4" /> {isAdded ? 'Added ✓' : 'Add to Quote'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
