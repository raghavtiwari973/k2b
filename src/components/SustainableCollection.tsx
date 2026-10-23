import { useState } from 'react';
import { Leaf, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';

const allSustainableProducts = [
  // Eco Stationery
  { name: 'Eco Stationery Kits', tag: 'Eco Stationery', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=500&q=80' },
  { name: 'Recycled Paper Notebooks', tag: 'Eco Stationery', image: 'https://images.unsplash.com/photo-1531346878377-a541fa4cb5e3?w=500&q=80' },
  { name: 'Recycled Diaries', tag: 'Eco Stationery', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=500&q=80' },
  { name: 'Seed Paper Notebooks', tag: 'Eco Stationery', image: 'https://images.unsplash.com/photo-1531346878377-a541fa4cb5e3?w=500&q=80' },
  { name: 'Eco-Friendly Pens', tag: 'Eco Stationery', image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=80' },
  // Bamboo Drinkware
  { name: 'Bamboo Bottle Gift Sets', tag: 'Bamboo Drinkware', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80' },
  { name: 'Bamboo Coffee Mugs', tag: 'Bamboo Drinkware', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80' },
  { name: 'Reusable Steel Bottles', tag: 'Bamboo Drinkware', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80' },
  { name: 'Insulated Eco Bottles', tag: 'Bamboo Drinkware', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80' },
  // Wooden Accessories
  { name: 'Bamboo Desk Organizers', tag: 'Wooden Accessories', image: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=500&q=80' },
  { name: 'Wooden Pen Stands', tag: 'Wooden Accessories', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80' },
  { name: 'Wooden Mobile Stands', tag: 'Wooden Accessories', image: 'https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=500&q=80' },
  { name: 'Wooden USB Drives', tag: 'Wooden Accessories', image: 'https://images.unsplash.com/photo-1614944983059-e9eb7b3fcfe2?w=500&q=80' },
  // Plantable Merch
  { name: 'Plantable Seed Kits', tag: 'Plantable Merch', image: 'https://images.unsplash.com/photo-1416879598555-220b8fa017ea?w=500&q=80' },
  { name: 'Indoor Plant Gift Sets', tag: 'Plantable Merch', image: 'https://images.unsplash.com/photo-1416879598555-220b8fa017ea?w=500&q=80' },
  { name: 'Cotton Tote Bags', tag: 'Eco Merchandise', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80' },
  { name: 'Jute Bags', tag: 'Eco Merchandise', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80' },
  { name: 'Eco Event Kits', tag: 'Eco Merchandise', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80' },
];

export default function SustainableCollection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { cart, addToCart, removeFromCart } = useCart();

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
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(30, 75, 42, 0.06);
          transition: all 0.35s ease;
        }
        .glass-sustainable-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(30, 75, 42, 0.12);
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

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center"
      >
        {/* Section Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E4B2A]/10 text-[#1E4B2A] text-xs font-bold uppercase tracking-widest mb-4">
            <Leaf className="w-3.5 h-3.5 text-[#C89A3D]" />
            Eco-Friendly Collection
          </div>
          <h3 className="text-[#C89A3D] text-[20px] lg:text-[24px] font-medium mb-3 tracking-wide">
            Thoughtfully Crafted for a Greener Future
          </h3>
          <h2 className="text-[#1E4B2A] text-[36px] lg:text-[50px] font-bold mb-5 leading-tight tracking-tight">
            Sustainable Corporate Gifting
          </h2>
          <p className="text-[#3F3F3F] text-[15px] lg:text-[17px] leading-[1.8] max-w-[700px]">
            Explore our complete range of eco-conscious corporate gifts, from seed stationery and bamboo drinkware to sustainably crafted wooden items.
          </p>
        </div>

        {/* All Products Direct Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mb-20">
          {allSustainableProducts.map((p, i) => {
            const isAdded = cart.some(item => item.name === p.name);
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="glass-sustainable-card p-4 h-full flex flex-col group bg-white/70">
                  <div className="w-full h-48 rounded-2xl overflow-hidden mb-4 relative bg-slate-100">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <span className="absolute top-3 left-3 bg-[#1E4B2A]/85 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                  <h4 className="font-manrope font-bold text-slate-800 text-sm mb-4 flex-1">
                    {p.name}
                  </h4>
                  <button 
                    onClick={() => isAdded ? removeFromCart(p.name) : addToCart({ name: p.name, image: p.image, tag: p.tag })}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2 shadow-sm ${
                      isAdded ? 'bg-[#C89A3D] text-white hover:bg-[#B4842E]' : 'bg-[#1E4B2A] text-white hover:bg-[#11311B]'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" /> {isAdded ? 'Added ✓' : 'Add to Quote'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* For More Options WhatsApp CTA */}
        <div className="w-full flex justify-center mb-16">
          <a
            href="https://wa.me/918959817421?text=Hello%2C%20I%20would%20like%20to%20explore%20more%20options%20and%20catalogs%20for%20Sustainable%20Gifting."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1E4B2A] text-white font-manrope font-bold text-sm sm:text-base hover:bg-[#15341d] hover:scale-105 transition-all shadow-[0_10px_30px_rgba(30,75,42,0.25)] group"
          >
            <span className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </span>
            <span>Looking for More Sustainable Options? Chat on WhatsApp</span>
          </a>
        </div>

        {/* Sustainable Footer Line */}
        <div className="text-center mt-4 relative">
          <p className="text-[26px] lg:text-[38px] font-bold text-[#1E4B2A] mb-2 tracking-tight">
            Because Great Brands Don't Just Gift.
          </p>
          <p className="elegant-script text-[32px] lg:text-[44px] text-[#C89A3D]">
            They Inspire Responsibility.
          </p>
        </div>
      </motion.div>
    </section>
  );
}