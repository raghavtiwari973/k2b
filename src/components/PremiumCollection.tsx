import { useState, useEffect } from 'react';
import { Crown, Briefcase, Headphones, Leaf, Gift, Sparkles, Star, X, ShoppingCart, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';

const premiumCards = [
  { title: 'Luxury Watches', desc: 'Elegant timepieces from world-renowned brands', icon: Crown },
  { title: 'Premium Eyewear', desc: 'Sophisticated frames from iconic fashion houses', icon: Sparkles },
  { title: 'Executive Desk', desc: 'Premium desk accessories for top leadership', icon: Briefcase },
  { title: 'Technology', desc: 'Cutting-edge tech gifts for modern executives', icon: Headphones },
  { title: 'Sustainable Luxury', desc: 'Eco-conscious premium gifting solutions', icon: Leaf },
  { title: 'Curated Hampers', desc: 'Bespoke hampers crafted with finest products', icon: Gift },
  { title: 'Joining Kits', desc: 'Welcome kits for new employees and leaders', icon: Gift },
  { title: 'Event Giveaways', desc: 'Promo merchandise for mass distribution and events', icon: Tag },
];

type Product = {
  name: string;
  images: string[]; // First image is the main one
};

const premiumProducts: Record<string, Product[]> = {
  'Luxury Watches': [
    { 
      name: 'Ethos: The Connoisseur\'s Collection', 
      images: ['/8.jpg ', '/9.jpg', '/12.jpg', '/13.jpg', '/14.jpg'] 
    },
    { 
      name: 'Michael Kors: Gold-Tone Chronograph', 
      images: ['/11.jpg'] 
    },
    { 
      name: 'Swatch: Steel & Blue Chronograph', 
      images: ['/10.jpg'] 
    },
  ],
  'Premium Eyewear': [
    { 
      name: 'Ray-Ban: The Aviator Classic', 
      images: ['/2.jpg', '/5.jpg'] 
    },
    { 
      name: 'Gucci: Signature Acetate Frames', 
      images: ['/3.jpg', '/6.jpg'] 
    },
    { 
      name: 'Carrera: Bold & Sport-Luxury Styles', 
      images: ['/1.jpg', '/4.jpg', '/7.jpg'] 
    },
  ],
  'Executive Desk': [
    { name: 'Premium Wooden Desk Organizers', images: ['https://i.pinimg.com/1200x/c0/d9/7a/c0d97a46b2e2f2c76939e840752656e4.jpg'] },
    { name: 'Personalized Executive Name Lamps', images: ['https://i.pinimg.com/1200x/e9/41/a7/e941a78a18baad0b3f975a9414e8b783.jpg'] },
    { name: 'Luxury LED Desk Clocks', images: ['https://i.pinimg.com/736x/6c/02/28/6c0228b14206d2c6f04c43305d60e2f1.jpg'] },
    { name: 'Premium Table Décor Accessories', images: ['https://i.pinimg.com/1200x/a9/0f/c5/a90fc571f4a705ac34b82b3b0d91274c.jpg'] },
    { name: 'Premium Leatherette Organizer', images: ['https://i.pinimg.com/1200x/37/0c/88/370c881efd5094e97e69b80ba5a92bb8.jpg'] },
    { name: 'Executive Notebook & Pen Set', images: ['https://i.pinimg.com/1200x/0a/25/41/0a2541d1cd4de5362a4816cf7ecd88f1.jpg'] },
    { name: 'Smart Desk Lamp', images: ['https://i.pinimg.com/736x/00/5c/42/005c4240fb4fecc8440b2973c27c6677.jpg'] },
  ],
  'Technology': [
    { name: 'Premium Metal USB Drives', images: ['https://i.pinimg.com/736x/8b/7e/2d/8b7e2d2b2dd170ef334bbfc4bef0eb5b.jpg'] },
    { name: 'Wireless Charging Stations', images: ['https://i.pinimg.com/736x/7e/b9/fe/7eb9fe3f0f4ba362cf381acd15694288.jpg'] },
    { name: 'Executive Power Banks', images: ['https://i.pinimg.com/736x/f4/53/fa/f453fa6579dcb16fe49df35f5dc84f48.jpg'] },
    { name: 'Wireless Charging Dock', images: ['https://i.pinimg.com/736x/95/a5/7e/95a57ee05c39ba2ceec4ba1857093cfd.jpg'] },
    { name: 'Bluetooth Speakers', images: ['https://i.pinimg.com/736x/1f/44/f0/1f44f0385ebb66764e22a868467dc09d.jpg'] },
  ],
  'Sustainable Luxury': [
    { name: 'Bamboo Bottle Gift Sets', images: ['https://i.pinimg.com/736x/c3/f8/b8/c3f8b8637c15b66f052c80a25b6f2541.jpg'] },
    { name: 'Eco-Friendly Executive Kits', images: ['https://i.pinimg.com/236x/d0/35/cc/d035cc4cfe2eb85dae597161c373f938.jpg'] },
    { name: 'Premium Wooden Gift Sets', images: ['https://i.pinimg.com/1200x/9c/64/29/9c6429d25b3ca765e1492fcc0f9e74a6.jpg'] },
    { name: 'Sustainable Corporate Gift Boxes', images: ['https://i.pinimg.com/1200x/98/6d/9c/986d9cf55035a660581a30a138b86862.jpg'] },
  ],
  'Curated Hampers': [
    { name: 'Executive Workstation Hamper', images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80'] },
    { name: 'Leadership Appreciation Hamper', images: ['https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80'] },
    { name: 'Festive Luxury Collection', images: ['https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80'] },
    { name: 'Premium Wellness Hamper', images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80'] },
  ],
  'Joining Kits': [
    { name: 'Employee Welcome Kits', images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80'] },
    { name: 'Employee Joining Kits', images: ['https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80'] },
    { name: 'Coffee Mugs', images: ['https://i.pinimg.com/736x/78/fc/6c/78fc6cc72efbcec6fd4471a2f5adc5af.jpg'] },
    { name: 'Keychains', images: ['https://i.pinimg.com/1200x/bf/36/12/bf36129637a8bdefb955407b4ea0680a.jpg'] },
  ],
  'Event Giveaways': [
    { name: 'Conference Kits', images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80'] },
    { name: 'Promotional Merchandise', images: ['https://i.pinimg.com/736x/78/87/f5/7887f5d56647313252ccb7565378c405.jpg'] },
    { name: 'Training Program Gifts', images: ['https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=500&q=80'] },
    { name: 'Lanyards', images: ['https://i.pinimg.com/1200x/0f/2c/4b/0f2c4bb8097cb247b5e9392b31983c55.jpg'] },
  ]
};

export default function PremiumCollection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedSubCategory, setSelectedSubCategory] = useState<typeof premiumCards[0] | null>(null);
  const [activeImage, setActiveImage] = useState<Record<string, string>>({});
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
            Designed for leadership teams, key clien and executive appreciation programs. Every gift speaks of unparalleled quality and profound thoughtfulness.
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
                className="p-2.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-slate-50 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {premiumProducts[selectedSubCategory.title]?.map((p) => {
                  const isAdded = cart.some(item => item.name === p.name);
                  return (
                    <div key={p.name} className="bg-white rounded-[20px] p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col">
                      <div className="w-full h-56 rounded-2xl overflow-hidden mb-4 relative bg-slate-100">
                        <img src={activeImage[p.name] || p.images[0]} alt={p.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      {p.images.length > 1 && (
                        <div className="flex gap-2 mb-4">
                          {p.images.map(img => (
                            <button 
                              key={img} 
                              onClick={() => setActiveImage(prev => ({ ...prev, [p.name]: img }))}
                              className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-colors ${activeImage[p.name] === img ? 'border-orange-500' : 'border-gray-200 hover:border-gray-400'}`}
                            >
                              <img src={img} alt="" className="w-full h-full object-contain" />
                            </button>
                          ))}
                        </div>
                      )}
                      <h4 className="font-manrope font-bold text-slate-800 text-sm mb-4 flex-1">{p.name}</h4>
                      <button 
                        onClick={() => isAdded ? removeFromCart(p.name) : addToCart({ name: p.name, image: p.images[0], tag: selectedSubCategory.title })}
                        className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2 ${
                          isAdded ? 'bg-[#D97706] text-white hover:bg-[#B45309]' : 'bg-[#7C2D12] text-white hover:bg-[#431407]'
                        }`}
                      >
                        <ShoppingCart className="w-4 h-4" /> {isAdded ? 'Added ✓' : 'Add to Quote'}
                      </button>
                    </div>
                  );
                })}

                {/* For More Options WhatsApp Card inside Popup */}
                <div className="bg-gradient-to-br from-[#7C2D12] to-[#431407] text-white rounded-[20px] p-5 shadow-sm border border-orange-900/30 flex flex-col justify-between items-center text-center group hover:shadow-lg transition-all min-h-[280px]">
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
    </section>
  );
}
