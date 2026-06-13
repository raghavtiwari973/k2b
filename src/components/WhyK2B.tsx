import { useState, useRef, useEffect } from 'react';
import { Package, Palette, Truck, Building2, Gift, Sparkles } from 'lucide-react';

function AnimatedCounter({ end, duration = 2000 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease-out effect
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return <span ref={ref}>{count}</span>;
}

function BentoCard({ children, className, containerClassName }: { children: React.ReactNode, className?: string, containerClassName?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ rotateX: 0, rotateY: 0, isHovered: false });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5; // Subtle 5 deg tilt for large cards
    const rotateY = ((x - centerX) / centerX) * 5;

    setMouse({ rotateX, rotateY, isHovered: true });
  };

  const handleMouseLeave = () => {
    setMouse({ rotateX: 0, rotateY: 0, isHovered: false });
  };

  return (
    <div
      ref={cardRef}
      style={{ perspective: '1200px' }}
      className={`group z-10 ${containerClassName}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`transition-all duration-300 ease-out relative h-full w-full ${className}`}
        style={{
          transform: mouse.isHovered
            ? `rotateX(${mouse.rotateX}deg) rotateY(${mouse.rotateY}deg) scale3d(1.02, 1.02, 1.02)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="h-full w-full transition-transform duration-300 ease-out" style={{ transform: mouse.isHovered ? 'translateZ(30px)' : 'translateZ(0)' }}>
            {children}
        </div>
      </div>
    </div>
  );
}

export default function WhyK2B() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <>
      <style>{`
        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-bg {
          animation: gradient-bg 15s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>
      <section 
        id="why-k2b" 
        className="relative py-24 lg:py-32 overflow-hidden animate-gradient-bg"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundImage: 'linear-gradient(-45deg, #F8F7F4, #F1F5F9, #E2E8F0, #F8F7F4)' }}
      >
      {/* Ambient Parallax Backgrounds for 3D depth */}
      <div className="absolute top-[10%] left-[-10%] pointer-events-none">
        <div className="w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] transition-transform duration-300 ease-out" style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)` }} />
      </div>
      <div className="absolute bottom-[-10%] right-[-10%] pointer-events-none">
        <div className="w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] transition-transform duration-300 ease-out" style={{ transform: `translate(${mousePos.x * -2}px, ${mousePos.y * -2}px)` }} />
      </div>

      {/* Floating gift/sparkle elements for theme */}
      <div className="absolute top-[15%] right-[15%] text-orange-400/30 animate-pulse transition-transform duration-300 pointer-events-none" style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px) rotate(15deg)` }}>
        <Gift className="w-16 h-16" />
      </div>
      <div className="absolute bottom-[20%] left-[10%] text-blue-400/30 animate-bounce transition-transform duration-300 pointer-events-none" style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}>
        <Sparkles className="w-10 h-10" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24 transition-transform duration-300 ease-out" style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}>
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 shadow-sm border border-gray-100 mb-6">
            <Gift className="w-4 h-4 text-[#FF7A00]" />
            <span className="font-manrope text-sm font-bold uppercase tracking-widest text-slate-700">Why Choose Us</span>
          </div>
          <h2 className="font-sora font-black text-5xl md:text-6xl text-[#0B1324] mb-6 tracking-tight">
            Enterprise Ready. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#D6A354]">Boutique Care.</span>
          </h2>
          <p className="font-dm text-xl text-[#5E6B84] max-w-2xl mx-auto">
            We provide scalable, pan-India corporate gifting solutions tailored with extreme precision.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Block 1: Curated Product Selection (Spans 2 cols) */}
          <BentoCard containerClassName="md:col-span-2 lg:col-span-2" className="bg-[#0B1324]/80 backdrop-blur-2xl border border-white/5 rounded-[40px] p-10 lg:p-14 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7A00]/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10 h-full flex flex-col justify-between pointer-events-none">
              <Package className="w-12 h-12 text-[#FF7A00] mb-8 group-hover:scale-110 transition-transform drop-shadow-[0_0_15px_rgba(255,122,0,0.4)]" />
              <div>
                <p className="font-sora font-black text-6xl text-white mb-2"><AnimatedCounter end={500} />+</p>
                <p className="font-manrope font-bold text-xs uppercase tracking-widest text-[#FF7A00] mb-6">Premium Products</p>
                <h3 className="font-sora font-bold text-2xl text-white mb-3">Curated Selection</h3>
                <p className="font-dm text-[#5E6B84] text-base leading-relaxed">Carefully selected products across hundreds of categories, quality-tested for every tier.</p>
              </div>
            </div>
          </BentoCard>

          {/* Block 2: Custom Branding */}
          <BentoCard containerClassName="md:col-span-1 lg:col-span-1" className="bg-gradient-to-br from-[#FF7A00]/90 to-[#E66A00]/90 backdrop-blur-2xl border border-white/20 rounded-[40px] p-10 overflow-hidden shadow-xl shadow-orange-500/20">
            <div className="relative z-10 h-full flex flex-col justify-between pointer-events-none">
              <Palette className="w-10 h-10 text-white mb-8 group-hover:rotate-12 transition-transform" />
              <div>
                <p className="font-sora font-black text-5xl text-white mb-2"><AnimatedCounter end={100} />%</p>
                <p className="font-manrope font-bold text-xs uppercase tracking-widest text-orange-200 mb-4">Brand Aligned</p>
                <h3 className="font-sora font-bold text-xl text-white mb-2">Bespoke Design</h3>
                <p className="font-dm text-white/80 text-sm leading-relaxed">Full customization — logos, packaging, and personalized messaging.</p>
              </div>
            </div>
          </BentoCard>

          {/* Block 3: Delivery */}
          <BentoCard containerClassName="md:col-span-3 lg:col-span-1" className="bg-white/50 backdrop-blur-2xl border border-white/60 rounded-[40px] p-10 overflow-hidden shadow-xl hover:shadow-2xl hover:border-emerald-200 transition-colors">
             <div className="relative z-10 h-full flex flex-col justify-between pointer-events-none">
              
              {/* Animated Delivery Visual */}
              <div className="relative w-full h-24 mb-8 rounded-[24px] bg-white/40 backdrop-blur-md flex items-end pb-4 overflow-hidden border border-white/50">
                <style>{`
                  @keyframes truck-drive {
                    0% { left: -20%; opacity: 0; transform: translateY(0); }
                    10% { transform: translateY(-2px); }
                    20% { left: 15%; opacity: 1; transform: translateY(0); }
                    40% { left: 15%; opacity: 1; transform: translateY(0); }
                    50% { transform: translateY(-2px); }
                    60% { left: 65%; opacity: 1; transform: translateY(0); }
                    80% { left: 65%; opacity: 1; transform: translateY(0); }
                    90% { transform: translateY(-2px); }
                    100% { left: 110%; opacity: 0; transform: translateY(0); }
                  }
                  @keyframes box-pickup {
                    0%, 20% { opacity: 1; transform: translateY(0) scale(1); }
                    25%, 100% { opacity: 0; transform: translateY(-10px) scale(0.5); }
                  }
                  @keyframes box-drop {
                    0%, 60% { opacity: 0; transform: translateY(-10px) scale(0.5); }
                    65%, 100% { opacity: 1; transform: translateY(0) scale(1); }
                  }
                `}</style>
                
                <div className="absolute bottom-4 left-4 right-4 h-[2px] bg-emerald-200/50 rounded-full" />
                
                <div className="absolute bottom-4 left-[22%] z-10" style={{ animation: 'box-pickup 4s ease-in-out infinite' }}>
                  <Package className="w-5 h-5 text-orange-500 fill-orange-100" />
                </div>
                <div className="absolute bottom-4 left-[72%] z-10" style={{ animation: 'box-drop 4s ease-in-out infinite' }}>
                  <Gift className="w-5 h-5 text-emerald-500 fill-emerald-100" />
                </div>
                <div className="absolute bottom-4 z-20" style={{ animation: 'truck-drive 4s ease-in-out infinite' }}>
                  <Truck className="w-8 h-8 text-[#0B1324] fill-white drop-shadow-sm" />
                </div>
              </div>

              <div>
                <p className="font-sora font-black text-4xl text-[#0B1324] mb-2">Pan India</p>
                <p className="font-manrope font-bold text-xs uppercase tracking-widest text-[#10b981] mb-4">Delivery Network</p>
                <h3 className="font-sora font-bold text-xl text-[#0B1324] mb-2">Seamless Execution</h3>
                <p className="font-dm text-[#5E6B84] text-sm leading-relaxed">From concept to packaging and final delivery—we handle everything.</p>
              </div>
            </div>
          </BentoCard>

          {/* Block 4: Corporate Expertise (Spans Full Width on lg, 3 on md) */}
          <BentoCard containerClassName="md:col-span-3 lg:col-span-4" className="bg-white/50 backdrop-blur-2xl border border-white/60 rounded-[40px] p-10 lg:p-14 shadow-xl hover:shadow-2xl hover:border-blue-200 transition-colors">
            <div className="h-full w-full flex flex-col lg:flex-row items-center justify-between gap-8 pointer-events-none">
            <div className="flex-1">
              <Building2 className="w-12 h-12 text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-sora font-bold text-3xl text-[#0B1324] mb-3">Enterprise Grade Expertise</h3>
              <p className="font-dm text-[#5E6B84] text-lg max-w-2xl leading-relaxed">Years of experience crafting gifting strategies specifically for organizations — from rapidly growing startups to Fortune 500 enterprises.</p>
            </div>
            <div className="flex-shrink-0 text-center lg:text-right">
               <p className="font-sora font-black text-[80px] leading-none text-[#0B1324]"><AnimatedCounter end={200} /><span className="text-[#3B82F6]">+</span></p>
               <p className="font-manrope font-bold text-sm uppercase tracking-widest text-[#5E6B84] mt-2">Active Corporate Clients</p>
            </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
    </>
  );
}
