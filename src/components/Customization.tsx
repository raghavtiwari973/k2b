import { useState, useRef } from 'react';
import { Gift, Sparkles, Stamp, PenTool, Package, Mail } from 'lucide-react';

const customizationFeatures = [
  {
    icon: Stamp,
    title: 'Logo Branding',
    desc: 'Precision logo integration across all materials.',
    color: '#451A03',
    accent: '#F59E0B',
    animationClass: 'animate-stamp',
  },
  {
    icon: PenTool,
    title: 'Laser Engraving',
    desc: 'Deep etched, lasting impressions for luxury items.',
    color: '#1E3A8A',
    accent: '#3B82F6',
    animationClass: 'animate-draw',
  },
  {
    icon: Package,
    title: 'Custom Packaging',
    desc: 'Bespoke unboxing experiences designed for impact.',
    color: '#064E3B',
    accent: '#10B981',
    animationClass: 'animate-pack-box',
  },
  {
    icon: Mail,
    title: 'Personalized Cards',
    desc: 'Warm, tailored messages to solidify relationships.',
    color: '#831843',
    accent: '#EC4899',
    animationClass: 'animate-float-letter',
  },
  /*{
    icon: '🎪',
    title: 'Event-Specific Concepts',
    desc: 'Unique gifting experiences curated for specific events.',
    color: '#EDE9FE',
    accent: '#8B5CF6',
  },
  {
    icon: '🎄',
    title: 'Festive Collections',
    desc: 'Seasonal and celebration gifting for every occasion.',
    color: '#FEE2E2',
    accent: '#EF4444',
  },
  */ // Keeping it to 4 for a clean timeline layout
];

function CustomizationCard({ f, index }: { f: typeof customizationFeatures[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ rotateX: 0, rotateY: 0, isHovered: false });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15; // Max 15 deg tilt
    const rotateY = ((x - centerX) / centerX) * 15;

    setMouse({ rotateX, rotateY, isHovered: true });
  };

  const handleMouseLeave = () => {
    setMouse({ rotateX: 0, rotateY: 0, isHovered: false });
  };

  const Icon = f.icon;

  return (
    <div
      ref={cardRef}
      style={{ perspective: '1200px' }}
      className="relative group h-full z-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="h-full bg-[#0B1324]/80 backdrop-blur-2xl p-8 rounded-[32px] border border-white/10 transition-all duration-300 ease-out relative overflow-hidden flex flex-col"
        style={{
          transform: mouse.isHovered
            ? `rotateX(${mouse.rotateX}deg) rotateY(${mouse.rotateY}deg) scale3d(1.02, 1.02, 1.02)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
          boxShadow: mouse.isHovered ? '0 30px 60px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.2)'
        }}
      >
        {/* Gifting Theme: Corner Ribbon */}
        <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden rounded-tr-[32px] pointer-events-none" style={{ transform: 'translateZ(30px)' }}>
          <div 
            className="absolute top-6 -right-8 w-40 h-8 flex items-center justify-center font-sora text-[10px] font-extrabold text-white uppercase tracking-widest shadow-lg"
            style={{ background: f.accent, transform: 'rotate(45deg)' }}
          >
            Bespoke
          </div>
        </div>

        {/* Inner Content with Z-translation for 3D depth */}
        <div 
          className="relative z-10 flex flex-col h-full transition-transform duration-300 ease-out"
          style={{ transform: mouse.isHovered ? 'translateZ(50px)' : 'translateZ(0)' }}
        >
          {/* 3D Icon Container */}
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-8 shadow-inner relative"
            style={{ background: f.color }}
          >
            <div className="absolute inset-0 rounded-2xl border-2 border-white/10 mix-blend-overlay pointer-events-none" />
            <span className="drop-shadow-md group-hover:scale-110 transition-transform duration-500 inline-block">
              <span className={`inline-block ${f.animationClass}`}>
                <Icon className="w-10 h-10 transition-colors" style={{ color: f.accent, filter: `drop-shadow(0 4px 12px ${f.accent}80)` }} />
              </span>
            </span>
          </div>
          
          <div className="mt-auto">
            <p 
              className="font-manrope font-bold text-xs uppercase tracking-widest mb-3 transition-colors duration-300"
              style={{ color: f.accent }}
            >
              Step 0{index + 1}
            </p>
            <h3 className="font-sora font-extrabold text-white text-2xl mb-4">
              {f.title}
            </h3>
            <p className="font-dm text-white/60 text-sm leading-relaxed">
              {f.desc}
            </p>
          </div>
        </div>

        {/* Ambient Background Glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${f.accent}20 0%, transparent 70%)`,
            transform: 'translateZ(-1px)'
          }}
        />
      </div>
    </div>
  );
}

export default function Customization() {
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
    <section 
      id="customization" 
      className="relative py-24 lg:py-32 border-y border-gray-100 overflow-hidden animate-gradient-bg"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundImage: 'linear-gradient(-45deg, #020617, #0B1324, #170F2E, #020617)' }}
    >
      <style>{`
        @keyframes stamp {
          0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
          10% { transform: translateY(-8px) scale(1.05) rotate(-10deg); }
          20% { transform: translateY(6px) scale(0.9) rotate(0deg); }
          30% { transform: translateY(-2px) scale(1.02) rotate(0deg); }
          40% { transform: translateY(0) scale(1) rotate(0deg); }
        }
        .animate-stamp { animation: stamp 2.5s infinite; }
        @keyframes draw {
          0%, 100% { transform: rotate(0deg) translate(0, 0); }
          20% { transform: rotate(-15deg) translate(-6px, 3px); }
          40% { transform: rotate(10deg) translate(6px, -2px); }
          60% { transform: rotate(-10deg) translate(-3px, 2px); }
          80% { transform: rotate(5deg) translate(3px, -1px); }
        }
        .animate-draw { animation: draw 2s ease-in-out infinite; }
        @keyframes pack-box {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-4px) rotate(-5deg); }
          50% { transform: translateY(0) rotate(5deg); }
          75% { transform: translateY(-2px) rotate(-3deg); }
        }
        .animate-pack-box { animation: pack-box 2.5s ease-in-out infinite; }
        @keyframes float-letter {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-6px) rotate(8deg); }
          66% { transform: translateY(2px) rotate(-8deg); }
        }
        .animate-float-letter { animation: float-letter 4s ease-in-out infinite; }
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

      {/* Ambient Parallax Backgrounds for 3D depth */}
      <div className="absolute top-0 right-0 pointer-events-none -translate-y-1/3 translate-x-1/3">
        <div className="w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[100px] transition-transform duration-300 ease-out" style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)` }} />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none translate-y-1/3 -translate-x-1/4">
        <div className="w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[100px] transition-transform duration-300 ease-out" style={{ transform: `translate(${mousePos.x * -2}px, ${mousePos.y * -2}px)` }} />
      </div>

      {/* Floating gift/sparkle elements for theme */}
      <div className="absolute top-[20%] left-[10%] text-orange-300/40 animate-bounce transition-transform duration-300" style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}>
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-[20%] right-[10%] text-pink-300/40 animate-pulse transition-transform duration-300" style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)` }}>
        <Gift className="w-12 h-12" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 transition-transform duration-300 ease-out" style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}>
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-5 py-2 shadow-sm border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#D6A354]" />
            <span className="font-manrope text-sm font-bold uppercase tracking-widest text-white/80">The Art of Gifting</span>
          </div>
          <h2 className="font-sora font-black text-5xl md:text-6xl text-white mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-[#EC4899] to-[#D6A354]">Personalization</span>
          </h2>
          <p className="font-dm text-xl text-white/60 max-w-2xl mx-auto">
            From precision laser engraving to bespoke packaging, we ensure every gift is a perfect extension of your brand identity.
          </p>
        </div>

        {/* Workflow Timeline */}
        <div className="relative">
          {/* Timeline Connector Line */}
          <div className="hidden lg:block absolute top-[72px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D6A354]/30 to-transparent -z-10 transition-transform duration-300 ease-out" style={{ transform: `translate(${mousePos.x * -0.5}px, 0px)` }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {customizationFeatures.map((f, i) => (
              <CustomizationCard key={f.title} f={f} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
