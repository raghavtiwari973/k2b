import { useState, useEffect } from 'react';
import { Leaf, Droplets, Recycle, TreePine, X, ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';

const sustainableCards = [
  { title: 'Eco Stationery Kits', desc: 'Recycled paper and plantable pens', icon: Leaf },
  { title: 'Bamboo Drinkware', desc: 'Reusable and biodegradable materials', icon: Droplets },
  { title: 'Wooden Accessories', desc: 'Sustainably sourced desk items', icon: Recycle },
  { title: 'Plantable Merch', desc: 'Gifts that grow into beautiful plants', icon: TreePine },
];

const sustainableProducts: Record<string, {name: string, image: string}[]> = {
  'Eco Stationery Kits': [
    { name: 'Eco Stationery Kits', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=500&q=80' },
    { name: 'Recycled Paper Notebooks', image: 'https://images.unsplash.com/photo-1531346878377-a541fa4cb5e3?w=500&q=80' },
    { name: 'Recycled Diaries', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=500&q=80' },
    { name: 'Seed Paper Notebooks', image: 'https://images.unsplash.com/photo-1531346878377-a541fa4cb5e3?w=500&q=80' },
    { name: 'Eco-Friendly Pens', image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=80' },
  ],
  'Bamboo Drinkware': [
    { name: 'Bamboo Bottle Gift Sets', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80' },
    { name: 'Bamboo Coffee Mugs', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80' },
    { name: 'Reusable Steel Bottles', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80' },
    { name: 'Insulated Eco Bottles', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80' },
  ],
  'Wooden Accessories': [
    { name: 'Bamboo Desk Organizers', image: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=500&q=80' },
    { name: 'Wooden Pen Stands', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80' },
    { name: 'Wooden Mobile Stands', image: 'https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=500&q=80' },
    { name: 'Wooden USB Drives', image: 'https://images.unsplash.com/photo-1614944983059-e9eb7b3fcfe2?w=500&q=80' },
  ],
  'Plantable Merch': [
    { name: 'Plantable Seed Kits', image: 'https://images.unsplash.com/photo-1416879598555-220b8fa017ea?w=500&q=80' },
    { name: 'Indoor Plant Gift Sets', image: 'https://images.unsplash.com/photo-1416879598555-220b8fa017ea?w=500&q=80' },
    { name: 'Cotton Tote Bags', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80' },
    { name: 'Jute Bags', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80' },
    { name: 'Eco Event Kits', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80' },
  ]
};

export default function SustainableCollection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedSubCategory, setSelectedSubCategory] = useState<typeof sustainableCards[0] | null>(null);
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
      style={{ backgroundImage: 'linear-gradient(135deg, rgba(248,246,241,0.8) 0%, rgba(255,255,255,0.8) 35%, rgba(233,228,218,0.8) 70%, rgba(248,246,241,0.8) 100%)' }}
    >
      <style>{`
        .glass-sustainable-card {
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 30px;
          box-shadow: 0 10px 40px rgba(30, 75, 42, 0.05);
          transition: all 0.4s ease;
        }
        .glass-sustainable-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(30, 75, 42, 0.1);
        }
        .sustainable-icon-wrap {
          background-color: #1E4B2A;
          border: 2px solid #C89A3D;
        }
        .elegant-script {
          font-family: 'Playfair Display', 'Didot', 'Georgia', serif;
          font-style: italic;
        }
      `}</style>

      {/* Abstract Organic Blob Shapes */}
      <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-[#B9C7A6] opacity-30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-[#B9C7A6] opacity-20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[10%] left-[20%] w-[400px] h-[400px] bg-[#B9C7A6] opacity-30 blur-[100px] rounded-full pointer-events-none" />

      {/* Thin Luxury Gold Curves */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" preserveAspectRatio="none">
        <path d="M-100,200 C300,400 600,0 1200,250 C1800,500 2200,100 2600,300" stroke="#C89A3D" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
        <path d="M-100,600 C400,400 800,800 1400,550 C2000,300 2400,700 2800,600" stroke="#C89A3D" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Decorative Botanical Leaves */}
      <div className="absolute top-[5%] right-[5%] opacity-20 blur-[1px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px) rotate(15deg)` }}>
        <Leaf className="w-32 h-32 text-[#1E4B2A]" strokeWidth={1} />
      </div>
      <div className="absolute bottom-[15%] left-[5%] opacity-20 blur-[2px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px) rotate(-15deg)` }}>
        <Leaf className="w-40 h-40 text-[#5D7A4B]" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-[5%] right-[10%] opacity-20 blur-[1px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * 1}px, ${mousePos.y * 1}px) rotate(45deg)` }}>
        <Leaf className="w-24 h-24 text-[#C89A3D]" strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center animate-fade-in-up">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h3 className="text-[#C89A3D] text-[20px] lg:text-[26px] font-medium mb-4 tracking-wide">
            Thoughtfully Crafted for a Greener Future
          </h3>
          <h2 className="text-[#1E4B2A] text-[40px] lg:text-[56px] font-bold mb-6 leading-tight tracking-tight">
            Sustainable Corporate Gifting
          </h2>
          <p className="text-[#3F3F3F] text-[16px] lg:text-[18px] leading-[1.8] max-w-[700px]">
            Eco-friendly gifting solutions designed to create meaningful impressions while supporting sustainability and responsible business practices.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-24">
          {sustainableCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="glass-sustainable-card p-8 h-full flex flex-col items-center text-center cursor-pointer group" onClick={() => setSelectedSubCategory(card)}>
                  <div className="sustainable-icon-wrap w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-[#1E4B2A] text-xl font-bold mb-3">{card.title}</h4>
                  <p className="text-[#3F3F3F] text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sustainable Footer Line */}
        <div className="text-center mt-8 relative">
          <p className="text-[28px] lg:text-[42px] font-bold text-[#1E4B2A] mb-3 tracking-tight">
            Because Great Brands Don't Just Gift.
          </p>
          <p className="elegant-script text-[36px] lg:text-[48px] text-[#C89A3D]">
            They Inspire Responsibility.
          </p>
        </div>
      </div>

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
                {sustainableProducts[selectedSubCategory.title]?.map((p) => {
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
                          isAdded ? 'bg-[#C89A3D] text-white hover:bg-[#B4842E]' : 'bg-[#1E4B2A] text-white hover:bg-[#11311B]'
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