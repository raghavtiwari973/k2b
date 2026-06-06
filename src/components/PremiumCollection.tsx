import { ArrowRight, CheckCircle2, Briefcase, Headphones, BookOpen, Zap, Crown } from 'lucide-react';

const premiumFeatures = [
  { title: 'Executive Desk Collection', desc: 'Premium desk accessories for top leadership' },
  { title: 'Technology Collection', desc: 'Cutting-edge tech gifts for modern executives' },
  { title: 'Sustainable Luxury Collection', desc: 'Eco-conscious premium gifting solutions' },
  { title: 'Curated Premium Gift Hampers', desc: 'Bespoke hampers crafted with finest products' },
];

const premiumProducts = [
  { name: 'Luxury Organizer', icon: Briefcase },
  { name: 'Audio Devices', icon: Headphones },
  { name: 'Executive Notebook', icon: BookOpen },
  { name: 'Wireless Charger', icon: Zap },
];

export default function PremiumCollection() {
  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background glowing decorations for luxury feel */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left – Product Grid Illustration */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Hero Card Span */}
              <div className="col-span-2 relative h-64 rounded-[24px] overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80" 
                  alt="Executive Gift Hamper" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <p className="font-manrope font-bold text-orange-400 text-xs uppercase tracking-widest mb-1.5">
                    Signature Series
                  </p>
                  <h3 className="font-sora font-extrabold text-white text-2xl mb-1">
                    Executive Gift Hamper
                  </h3>
                  <p className="font-dm text-slate-300 text-sm max-w-sm">
                    Curated for leaders who deserve the finest
                  </p>
                </div>
              </div>

              {/* Minimal Product Grid Items */}
              {premiumProducts.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.name}
                    className="bg-slate-800/50 border border-slate-700/50 rounded-[20px] p-5 hover:bg-slate-800 hover:border-orange-500/30 transition-all duration-300 group"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-slate-400 group-hover:text-orange-400 transition-colors" />
                    </div>
                    <p className="font-manrope font-bold text-white text-sm">{p.name}</p>
                    <p className="font-dm text-slate-500 text-xs mt-1">Premium Grade</p>
                  </div>
                );
              })}
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-slate-800 border border-slate-700 shadow-2xl rounded-2xl p-4 animate-float2">
              <p className="font-sora font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">250+</p>
              <p className="font-dm text-xs text-slate-400 mt-1">Premium SKUs</p>
            </div>
          </div>

          {/* Right – Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Crown className="w-4 h-4 text-orange-400" />
              <span className="font-manrope text-sm font-semibold text-orange-400">Premium Tier</span>
            </div>
            
            <h2 className="font-sora font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-tight">
              Premium
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Collection</span>
            </h2>
            
            <p className="font-dm text-slate-400 text-lg leading-relaxed mb-10">
              Designed for leadership teams, key clients, annual recognition awards, and executive
              appreciation programs. Every piece speaks of quality and thoughtfulness.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {premiumFeatures.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-4 bg-slate-800/50 rounded-[18px] p-4 border border-slate-700/50 hover:bg-slate-800 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="font-manrope font-bold text-white text-sm">{f.title}</p>
                    <p className="font-dm text-slate-400 text-xs mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => {
                  const el = document.getElementById('collections');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  window.dispatchEvent(new CustomEvent('open-category', { detail: 'Premium Collection' }));
                }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3.5 rounded-full font-manrope font-bold text-sm hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all hover:-translate-y-0.5"
              >
                View Collection
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white border border-slate-700 px-8 py-3.5 rounded-full font-manrope font-bold text-sm hover:bg-slate-700 transition-all hover:-translate-y-0.5">
                Request Catalogue
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
