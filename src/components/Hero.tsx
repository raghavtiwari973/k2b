import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Map mouse position to a rotation degree between -15 and +15
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
        @keyframes float-3d {
          0% { transform: translateY(0) rotateX(10deg) rotateY(-10deg); }
          50% { transform: translateY(-25px) rotateX(15deg) rotateY(-5deg); }
          100% { transform: translateY(0) rotateX(10deg) rotateY(-10deg); }
        }
        .animate-3d-float {
          animation: float-3d 8s ease-in-out infinite;
          transform-style: preserve-3d;
        }
        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-bg {
          animation: gradient-bg 15s ease infinite;
          background-size: 400% 400%;
        }
        @keyframes logo-spin-fast {
          0% { transform: translateZ(60px) rotateY(0deg) scale(1); animation-timing-function: ease-in; }
          10% { transform: translateZ(60px) rotateY(360deg) scale(1.15); animation-timing-function: ease-out; }
          20%, 100% { transform: translateZ(60px) rotateY(720deg) scale(1); }
        }
        .animate-logo-spin-fast {
          animation: logo-spin-fast 5s infinite;
        }
      `}</style>
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-24 overflow-hidden animate-gradient-bg"
        style={{ backgroundImage: 'linear-gradient(-45deg, #F8F9FA, #E9ECEF, #DEE2E6, #F8F9FA)' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Colorful 3D ambient light orbs with subtle mouse tracking */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse pointer-events-none transition-transform duration-300 ease-out" style={{ transform: `translate(${mousePos.x * 2}px, ${-mousePos.y * 2}px)` }} />
        <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse pointer-events-none transition-transform duration-300 ease-out" style={{ animationDelay: '2s', transform: `translate(${-mousePos.x * 3}px, ${mousePos.y * 3}px)` }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-teal-400/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse pointer-events-none transition-transform duration-300 ease-out" style={{ animationDelay: '4s', transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)` }} />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-[100px] mix-blend-multiply animate-pulse pointer-events-none transition-transform duration-300 ease-out" style={{ animationDelay: '1s', transform: `translate(${mousePos.x * 2.5}px, ${-mousePos.y * 2.5}px)` }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 py-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
            {/* Left Content (Spans 7 columns) */}
            <div className="lg:col-span-7 relative z-10 animate-fade-in-up order-2 lg:order-1">
              <h1 className="font-sora text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6 lg:mb-8">
                Your One-Stop <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 drop-shadow-sm">
                  Solution for Corporate Gifting
                </span>
              </h1>
            
              <p className="font-dm text-base md:text-lg lg:text-xl text-slate-500 max-w-xl leading-relaxed mb-8 lg:mb-10">
                Premium curated collections designed to appreciate leaders, delight clients, and build lasting relationships across India.
              </p>
            
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-10 lg:mb-12">
                <a href="#collections" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-manrope font-bold text-base hover:bg-slate-800 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1">
                  Explore Collections <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://key2brand.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full font-manrope font-bold text-base hover:border-slate-900 transition-all hover:-translate-y-1">
                  Talk to an Expert
                </a>
              </div>
            </div>

            {/* Right Visual (Spans 5 columns) */}
            <div className="lg:col-span-5 relative z-10 flex items-center justify-center order-1 lg:order-2 mt-4 lg:mt-0 mb-6 lg:mb-0">
              {/* Soft backdrop glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-violet-400/30 via-pink-400/20 to-orange-400/30 rounded-full blur-[80px] animate-pulse pointer-events-none transition-transform duration-300 ease-out" style={{ transform: `translate(calc(-50% + ${mousePos.x * -2}px), calc(-50% + ${mousePos.y * -2}px))` }} />

              {/* 3D Container Container with Perspective */}
              <div style={{ perspective: '1200px' }} className="w-full flex justify-center">
                {/* Interactive Cursor Wrapper */}
                <div 
                  style={{ 
                    transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
                    transformStyle: 'preserve-3d'
                  }} 
                  className="w-full flex justify-center transition-transform duration-200 ease-out"
                >
                  {/* Animated Floating 3D Object */}
                  <div className="relative w-[280px] sm:w-[340px] lg:w-full max-w-[420px] aspect-square rounded-full bg-white/30 backdrop-blur-xl border border-white/60 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] flex items-center justify-center p-6 sm:p-10 group transition-all duration-500 animate-3d-float">
                  
                  {/* Inner 3D Extruded Logo Box */}
                  <div 
                    className="relative w-full h-full bg-white rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.05),0_20px_40px_rgba(0,0,0,0.1)] flex items-center justify-center p-8 overflow-hidden transition-transform duration-700 group-hover:scale-105 animate-logo-spin-fast"
                  >
                    {/* Colorful gradients inside the white box */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-pink-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-violet-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                    
                    <img
                      src="/logo.png"
                      alt="K2B Logo"
                      className="relative z-20 w-full h-full object-contain filter drop-shadow-2xl rounded-full"
                    />
                  </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
