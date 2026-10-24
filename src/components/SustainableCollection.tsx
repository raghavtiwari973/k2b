import { useState } from 'react';
import { Leaf, ShoppingCart, Sparkles, Coffee, TreePine, Package, Sprout, ArrowRight, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartContext';

const ecoCategories = [
  { name: 'All Eco Gifts', icon: Leaf, tag: 'All' },
  { name: 'Eco Stationery', icon: Sprout, tag: 'Eco Stationery' },
  { name: 'Bamboo Drinkware', icon: Coffee, tag: 'Bamboo Drinkware' },
  { name: 'Wooden Accessories', icon: TreePine, tag: 'Wooden Accessories' },
  { name: 'Eco Merchandise', icon: Package, tag: 'Eco Merchandise' },
  { name: 'Plantable Merch', icon: Sparkles, tag: 'Plantable Merch' },
];

interface SustainableProductItem {
  name: string;
  tag: string;
  image: string;
  price: string;
  moq: string;
  rating: number;
  reviews: number;
  badge?: string;
  hoverColor: string;
  borderCol: string;
  material: string;
}

const allSustainableProducts: SustainableProductItem[] = [
  // Eco Stationery
  { 
    name: 'Eco Stationery Executive Gift Set', 
    tag: 'Eco Stationery', 
    image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=600&q=80', 
    price: '₹349 - ₹599', 
    moq: '50 pcs', 
    rating: 4.9, 
    reviews: 142, 
    badge: 'Best Seller',
    material: '100% Recycled Kraft Paper',
    hoverColor: 'rgba(34, 197, 94, 0.25)', 
    borderCol: 'rgba(34, 197, 94, 0.7)' 
  },
  { 
    name: 'Eco-Friendly Stationery & Planter Pen Kits', 
    tag: 'Eco Stationery', 
    image: 'https://i.pinimg.com/236x/d0/35/cc/d035cc4cfe2eb85dae597161c373f938.jpg', 
    price: '₹199 - ₹399', 
    moq: '100 pcs', 
    rating: 4.8, 
    reviews: 98, 
    badge: 'Zero Plastic',
    material: 'Organic Seed Infused Paper',
    hoverColor: 'rgba(34, 197, 94, 0.25)', 
    borderCol: 'rgba(34, 197, 94, 0.7)' 
  },
  { 
    name: 'Recycled Hardbound Paper Notebooks', 
    tag: 'Eco Stationery', 
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80', 
    price: '₹249 - ₹450', 
    moq: '50 pcs', 
    rating: 4.9, 
    reviews: 87, 
    material: 'Bleach-Free Recycled Fibers',
    hoverColor: 'rgba(34, 197, 94, 0.25)', 
    borderCol: 'rgba(34, 197, 94, 0.7)' 
  },
  { 
    name: 'Handcrafted Recycled Desk Diaries', 
    tag: 'Eco Stationery', 
    image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=600&q=80', 
    price: '₹299 - ₹499', 
    moq: '50 pcs', 
    rating: 4.7, 
    reviews: 64, 
    material: 'Natural Jute Spine & Kraft Pages',
    hoverColor: 'rgba(34, 197, 94, 0.25)', 
    borderCol: 'rgba(34, 197, 94, 0.7)' 
  },
  { 
    name: 'Marigold & Basil Seed Paper Notebooks', 
    tag: 'Eco Stationery', 
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&q=80', 
    price: '₹220 - ₹380', 
    moq: '100 pcs', 
    rating: 5.0, 
    reviews: 110, 
    badge: '100% Plantable',
    material: 'Living Seeds Infused',
    hoverColor: 'rgba(34, 197, 94, 0.25)', 
    borderCol: 'rgba(34, 197, 94, 0.7)' 
  },
  { 
    name: 'Recycled Newspaper & Bamboo Pens Set', 
    tag: 'Eco Stationery', 
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&q=80', 
    price: '₹89 - ₹180', 
    moq: '200 pcs', 
    rating: 4.8, 
    reviews: 135, 
    material: 'Biodegradable Casing',
    hoverColor: 'rgba(34, 197, 94, 0.25)', 
    borderCol: 'rgba(34, 197, 94, 0.7)' 
  },
  // Bamboo Drinkware
  { 
    name: 'Bamboo Insulated Flask & Bottle Gift Set', 
    tag: 'Bamboo Drinkware', 
    image: 'https://i.pinimg.com/736x/c3/f8/b8/c3f8b8637c15b66f052c80a25b6f2541.jpg', 
    price: '₹699 - ₹1,299', 
    moq: '30 pcs', 
    rating: 4.9, 
    reviews: 178, 
    badge: 'Popular Gift',
    material: 'Natural Bamboo & 304 Steel',
    hoverColor: 'rgba(217, 119, 6, 0.25)', 
    borderCol: 'rgba(217, 119, 6, 0.7)' 
  },
  { 
    name: 'Thermal Double-Wall Eco Travel Tumbler', 
    tag: 'Bamboo Drinkware', 
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80', 
    price: '₹499 - ₹899', 
    moq: '50 pcs', 
    rating: 4.8, 
    reviews: 92, 
    material: 'Vacuum Insulated Stainless Bamboo',
    hoverColor: 'rgba(217, 119, 6, 0.25)', 
    borderCol: 'rgba(217, 119, 6, 0.7)' 
  },
  { 
    name: 'Artisanal Bamboo Fiber Coffee Mugs', 
    tag: 'Bamboo Drinkware', 
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80', 
    price: '₹249 - ₹499', 
    moq: '100 pcs', 
    rating: 4.7, 
    reviews: 73, 
    badge: 'BPA Free',
    material: 'Natural Bamboo Husk Composite',
    hoverColor: 'rgba(217, 119, 6, 0.25)', 
    borderCol: 'rgba(217, 119, 6, 0.7)' 
  },
  { 
    name: 'Eco-Matte Stainless Steel Hydration Bottle', 
    tag: 'Bamboo Drinkware', 
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80', 
    price: '₹449 - ₹750', 
    moq: '50 pcs', 
    rating: 4.9, 
    reviews: 119, 
    material: 'Food Grade Rust-Free Steel',
    hoverColor: 'rgba(217, 119, 6, 0.25)', 
    borderCol: 'rgba(217, 119, 6, 0.7)' 
  },
  { 
    name: 'Insulated Bamboo Cap Sports Bottle', 
    tag: 'Bamboo Drinkware', 
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80', 
    price: '₹549 - ₹920', 
    moq: '50 pcs', 
    rating: 4.8, 
    reviews: 84, 
    material: 'Natural Wood Grain Finish',
    hoverColor: 'rgba(217, 119, 6, 0.25)', 
    borderCol: 'rgba(217, 119, 6, 0.7)' 
  },
  // Wooden Accessories
  { 
    name: 'Executive Wooden Gift Box & Pen Stand', 
    tag: 'Wooden Accessories', 
    image: 'https://i.pinimg.com/1200x/9c/64/29/9c6429d25b3ca765e1492fcc0f9e74a6.jpg', 
    price: '₹599 - ₹1,150', 
    moq: '40 pcs', 
    rating: 5.0, 
    reviews: 156, 
    badge: 'Premium Handcrafted',
    material: 'Reclaimed Teak & Pine Wood',
    hoverColor: 'rgba(180, 83, 9, 0.25)', 
    borderCol: 'rgba(180, 83, 9, 0.7)' 
  },
  { 
    name: 'Eco-Conscious Desk Station & Memo Kits', 
    tag: 'Wooden Accessories', 
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=600&q=80', 
    price: '₹399 - ₹699', 
    moq: '50 pcs', 
    rating: 4.7, 
    reviews: 68, 
    material: 'Natural Polish Wood',
    hoverColor: 'rgba(180, 83, 9, 0.25)', 
    borderCol: 'rgba(180, 83, 9, 0.7)' 
  },
  { 
    name: 'Modular Bamboo Desk Organizer & Pen Cup', 
    tag: 'Wooden Accessories', 
    image: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=600&q=80', 
    price: '₹450 - ₹799', 
    moq: '50 pcs', 
    rating: 4.9, 
    reviews: 104, 
    material: 'Sustainably Harvested Bamboo',
    hoverColor: 'rgba(180, 83, 9, 0.25)', 
    borderCol: 'rgba(180, 83, 9, 0.7)' 
  },
  { 
    name: 'Minimalist Polished Wooden Pen Stand', 
    tag: 'Wooden Accessories', 
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=600&q=80', 
    price: '₹199 - ₹350', 
    moq: '100 pcs', 
    rating: 4.6, 
    reviews: 52, 
    material: 'Solid Seasoned Rubberwood',
    hoverColor: 'rgba(180, 83, 9, 0.25)', 
    borderCol: 'rgba(180, 83, 9, 0.7)' 
  },
  { 
    name: 'Ergonomic Wooden Mobile Phone Stand', 
    tag: 'Wooden Accessories', 
    image: 'https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=600&q=80', 
    price: '₹149 - ₹299', 
    moq: '100 pcs', 
    rating: 4.8, 
    reviews: 122, 
    badge: 'Staff Favorite',
    material: 'Laser Cut Solid Beechwood',
    hoverColor: 'rgba(180, 83, 9, 0.25)', 
    borderCol: 'rgba(180, 83, 9, 0.7)' 
  },
  { 
    name: 'Laser-Engraved Wooden USB Flash Drive', 
    tag: 'Wooden Accessories', 
    image: 'https://i.pinimg.com/736x/8b/7e/2d/8b7e2d2b2dd170ef334bbfc4bef0eb5b.jpg', 
    price: '₹349 - ₹599', 
    moq: '50 pcs', 
    rating: 4.9, 
    reviews: 89, 
    material: 'Natural Walnut Casing',
    hoverColor: 'rgba(180, 83, 9, 0.25)', 
    borderCol: 'rgba(180, 83, 9, 0.7)' 
  },
  // Plantable Merch & Hampers
  { 
    name: 'Luxury Sustainable Corporate Hamper Box', 
    tag: 'Eco Merchandise', 
    image: 'https://i.pinimg.com/1200x/98/6d/9c/986d9cf55035a660581a30a138b86862.jpg', 
    price: '₹899 - ₹1,899', 
    moq: '25 pcs', 
    rating: 5.0, 
    reviews: 210, 
    badge: 'Corporate Choice',
    material: 'Custom Brandable Eco Box',
    hoverColor: 'rgba(16, 185, 129, 0.25)', 
    borderCol: 'rgba(16, 185, 129, 0.7)' 
  },
  { 
    name: 'DIY Grow Your Plant Seed Planting Kit', 
    tag: 'Plantable Merch', 
    image: 'https://images.unsplash.com/photo-1503368540675-1e6f924db274?w=600&q=80', 
    price: '₹180 - ₹350', 
    moq: '100 pcs', 
    rating: 4.9, 
    reviews: 134, 
    badge: 'Grow Kit',
    material: 'Coco Peat & Organic Seeds',
    hoverColor: 'rgba(168, 85, 247, 0.25)', 
    borderCol: 'rgba(168, 85, 247, 0.7)' 
  },
  { 
    name: 'Purifying Indoor Succulent Plant Gift Pack', 
    tag: 'Plantable Merch', 
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80', 
    price: '₹299 - ₹599', 
    moq: '50 pcs', 
    rating: 4.8, 
    reviews: 95, 
    material: 'Ceramic Pot + Natural Soil',
    hoverColor: 'rgba(168, 85, 247, 0.25)', 
    borderCol: 'rgba(168, 85, 247, 0.7)' 
  },
  { 
    name: 'Heavy-Duty 100% Canvas Cotton Tote Bag', 
    tag: 'Eco Merchandise', 
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80', 
    price: '₹140 - ₹280', 
    moq: '100 pcs', 
    rating: 4.9, 
    reviews: 167, 
    badge: 'Plastic Free',
    material: 'Organic Unbleached Cotton',
    hoverColor: 'rgba(16, 185, 129, 0.25)', 
    borderCol: 'rgba(16, 185, 129, 0.7)' 
  },
  { 
    name: 'Natural Jute Conference Bag with Pockets', 
    tag: 'Eco Merchandise', 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80', 
    price: '₹189 - ₹350', 
    moq: '100 pcs', 
    rating: 4.7, 
    reviews: 88, 
    material: 'Biodegradable Golden Jute',
    hoverColor: 'rgba(16, 185, 129, 0.25)', 
    borderCol: 'rgba(16, 185, 129, 0.7)' 
  },
  { 
    name: 'Complete Eco Welcome Event Kit', 
    tag: 'Eco Merchandise', 
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80', 
    price: '₹499 - ₹999', 
    moq: '50 pcs', 
    rating: 5.0, 
    reviews: 182, 
    badge: 'Event Ready',
    material: 'Curated 5-Piece Eco Ensemble',
    hoverColor: 'rgba(16, 185, 129, 0.25)', 
    borderCol: 'rgba(16, 185, 129, 0.7)' 
  },
];

export default function SustainableCollection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState('All');
  const [quickViewProduct, setQuickViewProduct] = useState<SustainableProductItem | null>(null);
  const { cart, addToCart, removeFromCart } = useCart();

  const filteredProducts = activeFilter === 'All' 
    ? allSustainableProducts 
    : allSustainableProducts.filter(p => p.tag === activeFilter);

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
      style={{
        background: 'radial-gradient(ellipse at 50% 10%, #E8F5E9 0%, #F1F8E9 40%, #FAFAF9 80%, #FFFFFF 100%)'
      }}
    >
      <style>{`
        .ecom-product-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(226, 232, 240, 0.9);
          border-radius: 24px;
          box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ecom-product-card:hover {
          transform: translateY(-8px);
          background: #FFFFFF;
          border-color: var(--card-border, #10B981);
          box-shadow: 0 24px 48px -12px var(--card-hover, rgba(16, 185, 129, 0.3)), 0 6px 16px -4px rgba(15, 23, 42, 0.08);
        }
        .elegant-script {
          font-family: 'Playfair Display', 'Didot', 'Georgia', serif;
          font-style: italic;
        }
      `}</style>

      {/* Decorative Botanical Ambient Shapes */}
      <div className="absolute -top-[10%] -left-[10%] w-[550px] h-[550px] bg-[#86EFAC] opacity-25 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-[#BBF7D0] opacity-25 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[10%] left-[25%] w-[450px] h-[450px] bg-[#D9F99D] opacity-20 blur-[100px] rounded-full pointer-events-none" />

      {/* Thin Eco Luxury Curves */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" preserveAspectRatio="none">
        <path d="M-100,200 C300,400 600,0 1200,250 C1800,500 2200,100 2600,300" stroke="#16A34A" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
        <path d="M-100,600 C400,400 800,800 1400,550 C2000,300 2400,700 2800,600" stroke="#16A34A" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Decorative Floating Botanical Leaves */}
      <div className="absolute top-[6%] right-[6%] opacity-20 blur-[0.5px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px) rotate(15deg)` }}>
        <Leaf className="w-32 h-32 text-[#15803D]" strokeWidth={1} />
      </div>
      <div className="absolute bottom-[16%] left-[4%] opacity-20 blur-[1px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px) rotate(-15deg)` }}>
        <Sprout className="w-36 h-36 text-[#166534]" strokeWidth={1.2} />
      </div>
      <div className="absolute bottom-[6%] right-[8%] opacity-20 blur-[0.5px] pointer-events-none transition-transform duration-700" style={{ transform: `translate(${mousePos.x * 1}px, ${mousePos.y * 1}px) rotate(45deg)` }}>
        <Leaf className="w-24 h-24 text-[#65A30D]" strokeWidth={1} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center"
      >
        {/* Section Header with Refined High-Contrast Typography */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 backdrop-blur-md border border-emerald-300 shadow-sm text-[#064E3B] text-[13px] sm:text-[14px] font-bold mb-4 tracking-wide">
            <Leaf className="w-4 h-4 text-[#16A34A]" />
            100% Certified Eco-Conscious Catalog
          </span>
          <h2 className="text-[#064E3B] text-[36px] sm:text-[46px] lg:text-[54px] font-black mb-4 leading-tight tracking-tight drop-shadow-sm">
            Sustainable Corporate Store
          </h2>
          <p className="text-[#334155] text-[15px] sm:text-[17px] font-medium leading-[1.8] max-w-[720px]">
            Direct B2B wholesale pricing with custom company logo embossing on all eco-friendly merchandise. Verified carbon-neutral delivery.
          </p>
        </div>

        {/* E-Commerce Category Filter Tabs Container - Single Line & Left Aligned */}
        <div className="w-full mb-10 flex justify-start">
          <div className="inline-flex items-center gap-2 p-1.5 sm:p-2 rounded-full bg-white/90 backdrop-blur-2xl border-2 border-emerald-900/15 shadow-[0_12px_30px_rgba(6,78,59,0.1)] overflow-x-auto custom-scrollbar max-w-full flex-nowrap">
            {ecoCategories.map((c) => {
              const Icon = c.icon;
              const isActive = activeFilter === c.tag;
              return (
                <button
                  key={c.name}
                  onClick={() => setActiveFilter(c.tag)}
                  className={`inline-flex items-center gap-2 px-4.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-manrope font-extrabold transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#064E3B] to-[#15803D] text-white shadow-[0_8px_20px_rgba(21,128,61,0.4)] scale-102 border border-emerald-400/40' 
                      : 'bg-white hover:bg-emerald-50 text-[#0F172A] hover:text-[#064E3B] border border-slate-200 shadow-sm hover:scale-102'
                  }`}
                >
                  <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transition-colors ${
                    isActive ? 'bg-white/20 text-white' : 'bg-emerald-100 text-[#15803D]'
                  }`}>
                    <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </span>
                  <span className="tracking-tight">{c.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* E-Commerce Catalog Meta Info Bar */}
        <div className="w-full flex items-center justify-between px-2 mb-6 text-xs sm:text-sm font-medium text-slate-500">
          <span>Showing <strong className="text-slate-800 font-bold">{filteredProducts.length}</strong> eco-friendly products</span>
        </div>

        {/* E-Commerce Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mb-16">
          {filteredProducts.map((p, i) => {
            const isAdded = cart.some(item => item.name === p.name);
            return (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
              >
                <div 
                  className="ecom-product-card p-4 h-full flex flex-col group cursor-pointer relative"
                  style={{
                    ['--card-hover' as any]: p.hoverColor,
                    ['--card-border' as any]: p.borderCol,
                  }}
                  onClick={() => setQuickViewProduct(p)}
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
                          setQuickViewProduct(p);
                        }}
                        className="p-2.5 rounded-full bg-white text-slate-800 shadow-lg hover:bg-emerald-600 hover:text-white transition-all transform hover:scale-110"
                        title="Quick View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Product Title */}
                  <h4 className="font-manrope font-bold text-slate-900 text-[15px] leading-snug mb-1 group-hover:text-[#15803D] transition-colors line-clamp-2">
                    {p.name}
                  </h4>

                  {/* Material Feature */}
                  <p className="text-xs font-medium text-slate-500 mb-4 line-clamp-1">
                    🌱 {p.material}
                  </p>

                  {/* Add To Quote Action Button */}
                  <div className="mt-auto pt-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isAdded) {
                          removeFromCart(p.name);
                        } else {
                          addToCart({ name: p.name, image: p.image, tag: p.tag });
                        }
                      }}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-2 shadow-sm ${
                        isAdded 
                          ? 'bg-[#16A34A] text-white hover:bg-[#15803D] shadow-[0_4px_14px_rgba(22,163,74,0.3)]' 
                          : 'bg-[#064E3B] text-white hover:bg-[#043327] hover:shadow-[0_6px_20px_rgba(6,78,59,0.35)]'
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" /> {isAdded ? 'In Quote Bucket ✓' : 'Add to Quote'}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* WhatsApp Consultation Banner */}
        <div className="w-full flex justify-center mb-14">
          <a
            href="https://wa.me/918959817421?text=Hello%2C%20I%20would%20like%20to%20explore%20bulk%20wholesale%20catalogs%20for%20Sustainable%20Corporate%20Gifting."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#064E3B] to-[#15803D] text-white font-manrope font-bold text-sm sm:text-base hover:scale-105 transition-all shadow-[0_12px_35px_rgba(6,78,59,0.3)] group"
          >
            <span className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </span>
            <span>Looking for More Sustainable Options? Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* High-Contrast Frosted Glass Footer Banner */}
        <div className="text-center mt-4 relative px-8 py-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_rgba(20,83,45,0.08)] max-w-3xl">
          <p className="text-[26px] lg:text-[38px] font-extrabold text-[#064E3B] mb-2 tracking-tight drop-shadow-sm">
            Because Great Brands Don't Just Gift.
          </p>
          <p className="elegant-script text-[34px] lg:text-[46px] font-bold text-[#15803D] drop-shadow-sm">
            They Inspire Responsibility.
          </p>
        </div>
      </motion.div>

      {/* Quick View E-Commerce Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-8">
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
                  <span className="text-xs font-bold text-[#15803D] uppercase tracking-wider block mb-1">
                    {quickViewProduct.tag}
                  </span>
                  <h3 className="font-sora font-extrabold text-xl text-slate-900 mb-3">
                    {quickViewProduct.name}
                  </h3>

                  <div className="bg-slate-50 p-4 rounded-xl mb-6 border border-slate-100 space-y-2 text-xs text-slate-600">
                    <p><strong className="text-slate-800">Material:</strong> {quickViewProduct.material}</p>
                    <p><strong className="text-slate-800">Branding:</strong> Custom Laser Engraving & Screen Print Available</p>
                    <p><strong className="text-slate-800">Packaging:</strong> Eco-Friendly Kraft Gift Box</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <button 
                    onClick={() => {
                      const isAdded = cart.some(item => item.name === quickViewProduct.name);
                      if (isAdded) {
                        removeFromCart(quickViewProduct.name);
                      } else {
                        addToCart({ name: quickViewProduct.name, image: quickViewProduct.image, tag: quickViewProduct.tag });
                      }
                      setQuickViewProduct(null);
                    }}
                    className="w-full py-3 rounded-xl bg-[#064E3B] hover:bg-[#043327] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {cart.some(item => item.name === quickViewProduct.name) ? 'Remove from Quote' : 'Add to Quote Bucket'}
                  </button>

                  <a 
                    href={`https://wa.me/918959817421?text=Hello%2C%20I%20am%20interested%20in%20bulk%20quote%20for%20${encodeURIComponent(quickViewProduct.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl border border-emerald-600 text-emerald-800 hover:bg-emerald-50 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
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