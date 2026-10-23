import { useState, useEffect } from 'react';
import { Briefcase, Monitor, Package, PenTool, Layout, Layers, X, ShoppingCart, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';

const standardCards = [
  { title: 'Workspace Essentials', desc: 'Customized pen stands and organizers', icon: Briefcase },
  { title: 'Technology Essentials', desc: 'Branded USB drives and digital clocks', icon: Monitor },
  { title: 'Corporate Desk Kits', desc: 'Complete matching sets for employees', icon: Package },
  { title: 'Personalized Items', desc: 'Custom tailored professional accessories', icon: PenTool },
  { title: 'Office Essentials', desc: 'Branded pens and corporate diaries', icon: PenTool },
  { title: 'Desk Utilities', desc: 'Mouse pads and mobile holders', icon: Smartphone },
];

const standardProducts: Record<string, {name: string, image: string}[]> = {
  'Workspace Essentials': [
    { name: 'Customized Pen Stands', image: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=500&q=80' },
    { name: 'Desk Organizers', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80' },
    { name: 'Personalized Calendars', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=500&q=80' },
    { name: 'Sticky Notes & Productivity Kits', image: 'https://images.unsplash.com/photo-1531346878377-a541fa4cb5e3?w=500&q=80' },
    { name: 'Office Productivity Kits', image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=80' },
  ],
  'Technology Essentials': [
    { name: 'Card Style USB Drives', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&q=80' },
    { name: 'Digital Alarm Clocks', image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&q=80' },
    { name: 'Mobile Accessories', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&q=80' },
    { name: 'Branded Pendrives', image: 'https://images.unsplash.com/photo-1614944983059-e9eb7b3fcfe2?w=500&q=80' },
    { name: 'Mobile Stands', image: 'https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=500&q=80' },
  ],
  'Corporate Desk Kits': [
    { name: 'Corporate Desk Kits', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80' },
    { name: 'Utility Gift Sets', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80' },
    { name: 'Daily Utility Gift Boxes', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80' },
    { name: 'Insulated Bottles', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80' },
  ],
  'Personalized Items': [
    { name: 'Personalized Office Accessories', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80' },
    { name: 'Daily Utility Gift Boxes', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80' },
    { name: 'Premium Coffee Mugs', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80' },
    { name: 'Eco Stationery Kits', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=500&q=80' },
  ],
  'Office Essentials': [
    { name: 'Branded Pen Sets', image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=80' },
    { name: 'Notebooks', image: 'https://i.pinimg.com/736x/c9/d0/f0/c9d0f03c10197ba89ae6da57e03004d7.jpg' },
    { name: 'Diaries', image: 'https://i.pinimg.com/736x/83/f2/9f/83f29f0ba1c3955bfdbb4c2e6c1b5509.jpg' },
    { name: 'Desk Calendars', image: 'https://i.pinimg.com/736x/7b/bb/ae/7bbbae50aa88c1864193a4cdd7226d84.jpg' },
    { name: 'Sticky Notes', image: 'https://i.pinimg.com/736x/6e/c7/1b/6ec71b543f7fa90c408aecb5889a42e9.jpg' },
  ],
  'Desk Utilities': [
    { name: 'Mouse Pads', image: 'https://i.pinimg.com/736x/2b/dc/13/2bdc1376749b4e23a6eaf707a3375261.jpg' },
    { name: 'Mobile Holders', image: 'https://i.pinimg.com/736x/6a/48/cc/6a48cc09e3eceac5cfd5af77bdfbf5db.jpg' },
    { name: 'USB Drives', image: 'https://i.pinimg.com/736x/b1/7f/b2/b17fb2d41351f6f4d02d3b7296d49b6c.jpg' },
    { name: 'Desk Utilities', image: 'https://i.pinimg.com/736x/43/ba/bd/43babd24b1371756bac0f02515b8876f.jpg' },
  ]
};

export default function StandardCollection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedSubCategory, setSelectedSubCategory] = useState<typeof standardCards[0] | null>(null);
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
      className="py-16 lg:py-24 relative overflow-hidden animate-gradient-bg"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundImage: 'linear-gradient(135deg, rgba(248,250,252,0.8) 0%, rgba(255,255,255,0.8) 35%, rgba(241,245,249,0.8) 70%, rgba(248,250,252,0.8) 100%)' }}
    >
      <style>{`
        .glass-standard-card {
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 30px;
          box-shadow: 0 10px 40px rgba(15, 23, 42, 0.05);
          transition: all 0.4s ease;
        }
        .glass-standard-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(15, 23, 42, 0.1);
        }
        .standard-icon-wrap {
          background-color: #0F172A;
          border: 2px solid #3B82F6;
        }
        .elegant-script {
          font-family: 'Playfair Display', 'Didot', 'Georgia', serif;
          font-style: italic;
        }
      `}</style>

      {/* Abstract Organic Blob Shapes */}
      <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-[#BFDBFE] opacity-30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-[#93C5FD] opacity-20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[10%] left-[20%] w-[400px] h-[400px] bg-[#BFDBFE] opacity-30 blur-[100px] rounded-full pointer-events-none" />

      {/* Thin Luxury Blue Curves */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" preserveAspectRatio="none">
        <path d="M-100,200 C300,400 600,0 1200,250 C1800,500 2200,100 2600,300" stroke="#3B82F6" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
        <path d="M-100,600 C400,400 800,800 1400,550 C2000,300 2400,700 2800,600" stroke="#3B82F6" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Decorative Elements */}
      <div className="absolute top-[5%] right-[5%] opacity-10 blur-[1px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px) rotate(15deg)` }}>
        <Layers className="w-32 h-32 text-[#0F172A]" strokeWidth={1} />
      </div>
      <div className="absolute bottom-[15%] left-[5%] opacity-10 blur-[2px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px) rotate(-15deg)` }}>
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
          <h3 className="text-[#3B82F6] text-[20px] lg:text-[26px] font-medium mb-4 tracking-wide">
            Practical. Elegant. Memorable.
          </h3>
          <h2 className="text-[#0F172A] text-[40px] lg:text-[56px] font-bold mb-6 leading-tight tracking-tight">
            Standard Corporate Gifting
          </h2>
          <p className="text-[#3F3F3F] text-[16px] lg:text-[18px] leading-[1.8] max-w-[700px]">
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
                <div className="glass-standard-card p-8 h-full flex flex-col items-center text-center cursor-pointer group" onClick={() => setSelectedSubCategory(card)}>
                  <div className="standard-icon-wrap w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-[#0F172A] text-xl font-bold mb-3">{card.title}</h4>
                  <p className="text-[#3F3F3F] text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Standard Footer Line */}
        <div className="text-center mt-8 relative">
          <p className="text-[28px] lg:text-[42px] font-bold text-[#0F172A] mb-3 tracking-tight">
            Because Everyday Work Needs
          </p>
          <p className="elegant-script text-[36px] lg:text-[48px] text-[#3B82F6]">
            Everyday Elegance.
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {standardProducts[selectedSubCategory.title]?.map((p) => {
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
                          isAdded ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB]' : 'bg-[#0F172A] text-white hover:bg-[#020617]'
                        }`}
                      >
                        <ShoppingCart className="w-4 h-4" /> {isAdded ? 'Added ✓' : 'Add to Quote'}
                      </button>
                    </div>
                  );
                })}

                {/* For More Options WhatsApp Card inside Popup */}
                <div className="bg-gradient-to-br from-[#0F172A] to-[#020617] text-white rounded-[20px] p-5 shadow-sm border border-slate-800 flex flex-col justify-between items-center text-center group hover:shadow-lg transition-all min-h-[280px]">
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
    </section>
  );
}
