import { useState, useRef, useEffect } from 'react';
import { Star, Quote, Gift, Sparkles, Heart } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Head of HR, TechCorp India',
    company: 'TechCorp India',
    initials: 'RS',
    color: 'from-orange-500 to-orange-600',
    review:
      "K2B delivered exceptional quality gifting solutions for our annual employee awards. The premium packaging and branding exceeded every expectation. Our team was absolutely delighted with the personalized gift boxes.",
    tags: ['Premium Quality', 'Timely Delivery'],
  },
  {
    name: 'Priya Nair',
    role: 'Marketing Director, FinEdge Solutions',
    company: 'FinEdge Solutions',
    initials: 'PN',
    color: 'from-blue-500 to-blue-600',
    review:
      "We partnered with K2B for our client appreciation event and the results were phenomenal. The custom branding was flawless, and every client specifically called out the premium feel of the gifts. Highly professional team.",
    tags: ['Branding Excellence', 'Professional Service'],
  },
  {
    name: 'Anil Mehta',
    role: 'CEO, GreenBuild Ventures',
    company: 'GreenBuild Ventures',
    initials: 'AM',
    color: 'from-emerald-500 to-emerald-600',
    review:
      "K2B's eco-friendly collection for our Diwali gifting was a massive hit. The sustainable packaging aligned perfectly with our brand values, and delivery across 15 cities was smooth and on time. Outstanding service!",
    tags: ['Eco-Friendly', 'Pan India Delivery'],
  },
];

function AnimatedCounter({ end, duration = 2000, decimals = 0 }: { end: number, duration?: number, decimals?: number }) {
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
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(easeProgress * end);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  // Handle formatting for large numbers (like 10,000)
  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();

  return <span ref={ref}>{displayValue}</span>;
}

function TestimonialCard({ t, index }: { t: typeof testimonials[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ rotateX: 0, rotateY: 0, isHovered: false });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setMouse({ rotateX, rotateY, isHovered: true });
  };

  const handleMouseLeave = () => {
    setMouse({ rotateX: 0, rotateY: 0, isHovered: false });
  };

  return (
    <div
      ref={cardRef}
      style={{ perspective: '1200px' }}
      className="relative group h-full z-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="h-full bg-white/5 backdrop-blur-xl p-8 lg:p-10 rounded-[40px] border border-white/10 transition-all duration-300 ease-out relative overflow-hidden flex flex-col"
        style={{
          transform: mouse.isHovered
            ? `rotateX(${mouse.rotateX}deg) rotateY(${mouse.rotateY}deg) scale3d(1.02, 1.02, 1.02)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
          boxShadow: mouse.isHovered ? '0 30px 60px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.1)'
        }}
      >
        {/* Subtle hover gradient background */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)`,
            transform: 'translateZ(-1px)'
          }}
        />

        {/* Inner Content translated forward for 3D effect */}
        <div className="relative z-10 flex flex-col h-full transition-transform duration-300 ease-out" style={{ transform: mouse.isHovered ? 'translateZ(40px)' : 'translateZ(0)' }}>
          <div className="w-12 h-12 rounded-2xl bg-[#0B1324] border border-white/5 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform shadow-lg">
            <Quote className="w-5 h-5 text-[#FF7A00]" />
          </div>

          <div className="flex items-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 text-[#FF7A00] fill-[#FF7A00] group-hover:scale-110 transition-transform" style={{ transitionDelay: `${s * 50}ms` }} />
            ))}
          </div>

          <p className="font-dm text-white/80 text-base lg:text-lg leading-relaxed flex-1 mb-8">
            "{t.review}"
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {t.tags.map((tag) => (
              <span
                key={tag}
                className="font-manrope text-xs font-bold tracking-widest uppercase text-white/50 bg-white/5 rounded-full px-3 py-1.5 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
            <div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-sora font-black text-sm flex-shrink-0 shadow-lg`}
            >
              {t.initials}
            </div>
            <div>
              <p className="font-sora font-bold text-white text-sm">{t.name}</p>
              <p className="font-dm text-white/50 text-xs mt-0.5">{t.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
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
        className="relative py-24 lg:py-32 overflow-hidden animate-gradient-bg"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundImage: 'linear-gradient(-45deg, #07111F, #0F172A, #1E293B, #07111F)' }}
      >
      {/* Ambient Parallax Backgrounds */}
      <div className="absolute top-[20%] left-[-10%] pointer-events-none">
        <div className="w-[800px] h-[800px] bg-[#D6A354]/5 rounded-full blur-[120px] transition-transform duration-300 ease-out" style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)` }} />
      </div>
      <div className="absolute bottom-[-10%] right-[-10%] pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#FF7A00]/5 rounded-full blur-[100px] transition-transform duration-300 ease-out" style={{ transform: `translate(${mousePos.x * -2}px, ${mousePos.y * -2}px)` }} />
      </div>

      {/* Floating Theme Elements */}
      <div className="absolute top-[10%] right-[10%] text-[#D6A354]/20 animate-pulse transition-transform duration-300 pointer-events-none" style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)` }}>
        <Star className="w-12 h-12" />
      </div>
      <div className="absolute bottom-[20%] left-[5%] text-[#FF7A00]/20 animate-bounce transition-transform duration-300 pointer-events-none" style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}>
        <Heart className="w-8 h-8" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24 transition-transform duration-300 ease-out" style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#D6A354]" />
            <span className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-white/80">Client Stories</span>
          </div>
          <h2 className="font-sora font-black text-5xl md:text-6xl text-white mb-6 tracking-tight">
            Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#D6A354]">Delight.</span>
          </h2>
          <p className="font-dm text-xl text-[#5E6B84] max-w-2xl mx-auto">
            Hear directly from the organizations that trust K2B to create unforgettable corporate gifting experiences.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* Bottom stats (Glassmorphic) */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: <><AnimatedCounter end={200} />+</>, label: 'Happy Clients' },
            { value: <><AnimatedCounter end={10000} />+</>, label: 'Gifts Delivered' },
            { value: <><AnimatedCounter end={4.9} decimals={1} />/5</>, label: 'Average Rating' },
            { value: <><AnimatedCounter end={100} />%</>, label: 'On-Time Delivery' },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/5 backdrop-blur-md rounded-[24px] p-6 lg:p-8 text-center border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
            >
              <p className="font-sora font-black text-3xl lg:text-4xl text-white mb-2">{s.value}</p>
              <p className="font-manrope font-bold text-xs uppercase tracking-widest text-[#5E6B84]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
