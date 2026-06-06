import { ArrowRight, ShieldCheck, Gift } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#FDFBF9] pt-24 overflow-hidden"
    >
      {/* Subtle background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-orange-200/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-amber-200/30 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content (Spans 7 columns) */}
          <div className="lg:col-span-7 relative z-10 animate-fade-in-up order-2 lg:order-1">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-orange-100 shadow-sm mb-8">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="font-dm text-sm font-semibold text-slate-700">Redefining Corporate Gifting</span>
            </div>
            
            <h1 className="font-sora text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6 lg:mb-8">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Gifting</span><br />
            Collections
            </h1>
            
            <p className="font-dm text-base md:text-lg lg:text-xl text-slate-500 max-w-xl leading-relaxed mb-8 lg:mb-10">
              Premium curated collections designed to appreciate leaders, delight clients, and build lasting relationships across India.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-10 lg:mb-12">
              <a href="#collections" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-manrope font-bold text-base hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-1">
                Explore Collections <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full font-manrope font-bold text-base hover:border-slate-900 transition-all hover:-translate-y-1">
                Talk to an Expert
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 pt-8 border-t border-slate-200/60">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-sora font-bold text-slate-900">Premium</p>
                  <p className="font-dm text-sm text-slate-500">Quality Assured</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <Gift className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-sora font-bold text-slate-900">Bespoke</p>
                  <p className="font-dm text-sm text-slate-500">Custom Branding</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual (Spans 5 columns) */}
          <div className="lg:col-span-5 relative z-10 flex items-center justify-center order-1 lg:order-2 mt-4 lg:mt-0 mb-6 lg:mb-0">
            {/* Soft backdrop glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-400/30 rounded-full blur-[80px] animate-pulse pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-amber-300/30 rounded-full blur-[60px] animate-pulse delay-700 pointer-events-none" />

            {/* Premium Glass Card Container */}
            <div className="relative w-[260px] sm:w-[320px] lg:w-full max-w-[400px] aspect-square rounded-full bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_30px_60px_rgba(249,115,22,0.15)] flex items-center justify-center p-5 sm:p-8 group hover:-translate-y-2 transition-all duration-500">
              {/* Inner White Logo Box */}
              <div className="relative w-full h-full bg-white rounded-full shadow-sm border border-slate-50 flex items-center justify-center p-8 overflow-hidden">
                {/* Subtle corner gradients inside the white box */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-50 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
                
                <img
                  src="/logo-1.png"
                  alt="K2B Logo"
                  className="relative z-10 w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
