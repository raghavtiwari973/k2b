import React, { useState } from 'react';
import { Mail, Phone, Send, X, Gift, Sparkles, Globe } from 'lucide-react';
import { useCart } from './CartContext';

export default function CTA() {
  const { cart, removeFromCart } = useCart();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const phone = form.get('phone');
    const email = form.get('email');
    const company = form.get('company');
    const message = form.get('message');

    const productList = cart.map((p) => `- ${p.name}`).join('\n');
    const subject = encodeURIComponent(`Gifting Enquiry from ${company || name}`);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCompany: ${company}\n\nRequirements:\n${message}\n\nSelected Products:\n${productList.length > 0 ? productList : 'None selected'}`);

    window.location.href = `mailto:key2brand360@gmail.com?subject=${subject}&body=${body}`;
  };

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
        id="contact" 
        className="bg-white"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="rounded-t-[40px] lg:rounded-t-[80px] pt-24 lg:pt-32 pb-24 px-6 lg:px-8 relative overflow-hidden mt-10 shadow-[0_-20px_40px_rgba(0,0,0,0.05)] animate-gradient-bg"
          style={{ backgroundImage: 'linear-gradient(-45deg, #07111F, #0F172A, #1E293B, #07111F)' }}
        >
        
        {/* Ambient Premium Lighting */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.1)_0%,transparent_60%)] blur-[120px] pointer-events-none transition-transform duration-300 ease-out" style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)` }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(214,163,84,0.1)_0%,transparent_60%)] blur-[120px] pointer-events-none transition-transform duration-300 ease-out" style={{ transform: `translate(${mousePos.x * -2}px, ${mousePos.y * -2}px)` }} />

        {/* Floating Theme Elements */}
        <div className="absolute top-[15%] left-[5%] text-[#FF7A00]/20 animate-bounce transition-transform duration-300 pointer-events-none" style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}>
          <Gift className="w-16 h-16" />
        </div>
        <div className="absolute bottom-[20%] right-[40%] text-[#D6A354]/20 animate-pulse transition-transform duration-300 pointer-events-none" style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)` }}>
          <Sparkles className="w-10 h-10" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
            {/* Left Content */}
            <div className="transition-transform duration-300 ease-out" style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 shadow-lg">
                <Gift className="w-4 h-4 text-[#FF7A00]" />
                <span className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-white">Let's Create Together</span>
              </div>

              <h2 className="font-sora font-black text-5xl md:text-6xl lg:text-[72px] text-white mb-6 leading-[1.05] tracking-tight">
                Build Something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#D6A354]">Memorable.</span>
              </h2>

              <p className="font-dm text-white/60 text-xl leading-relaxed mb-12 max-w-lg">
                From bulk orders to highly bespoke luxury gifts, our experts are ready to curate the perfect experience for your brand.
              </p>

              {/* Direct Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href="https://wa.me/918959817421" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white group bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#FF7A00]" />
                  </div>
                  <div>
                    <p className="font-dm text-xs text-white/50 uppercase tracking-widest mb-1">WhatsApp Us</p>
                    <p className="font-manrope font-bold text-lg">+91 8959817421</p>
                  </div>
                </a>
                
                <a href="mailto:key2brand360@gmail.com" className="flex items-center gap-4 text-white group bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#D6A354]/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#D6A354]" />
                  </div>
                  <div>
                    <p className="font-dm text-xs text-white/50 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="font-manrope font-bold text-sm">key2brand360@gmail.com</p>
                  </div>
                </a>

                <a href="https://key2brand.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white group bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors sm:col-span-2">
                  <div className="w-12 h-12 rounded-xl bg-[#EC4899]/20 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#EC4899]" />
                  </div>
                  <div>
                    <p className="font-dm text-xs text-white/50 uppercase tracking-widest mb-1">Visit Website</p>
                    <p className="font-manrope font-bold text-lg">key2brand.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Content - Premium Contact Form */}
            <div className="bg-[#0B1324] border border-white/10 rounded-[32px] p-8 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden transition-transform duration-300 ease-out" style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}>
              
              {/* Gifting Ribbon */}
              <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-tr-[32px] pointer-events-none z-0">
                <div className="absolute top-6 -right-10 w-40 h-8 bg-gradient-to-r from-[#FF7A00] to-[#D6A354] flex items-center justify-center font-sora text-[10px] font-extrabold text-white uppercase tracking-widest shadow-lg transform rotate-45">
                  Gifting
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="font-sora font-bold text-3xl text-white mb-2">Request a Quote</h3>
                <p className="font-dm text-white/50 text-sm mb-8">Share your requirements and our gifting experts will connect with you.</p>
                
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-dm text-xs font-bold uppercase tracking-widest text-white/70">Full Name</label>
                      <input type="text" id="name" name="name" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 font-dm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00] transition-all" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="font-dm text-xs font-bold uppercase tracking-widest text-white/70">Phone Number</label>
                      <input type="tel" id="phone" name="phone" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 font-dm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00] transition-all" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-dm text-xs font-bold uppercase tracking-widest text-white/70">Work Email</label>
                    <input type="email" id="email" name="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 font-dm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00] transition-all" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="font-dm text-xs font-bold uppercase tracking-widest text-white/70">Company Name</label>
                    <input type="text" id="company" name="company" placeholder="Company Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 font-dm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00] transition-all" required />
                  </div>

                  {cart.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <label className="font-dm text-xs font-bold uppercase tracking-widest text-white/70">Selected Items ({cart.length})</label>
                      <div className="flex flex-wrap gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl max-h-32 overflow-y-auto custom-scrollbar">
                          {cart.map((p) => (
                            <span key={p.name} className="inline-flex items-center gap-2 bg-[#0B1324] border border-white/10 text-white/80 text-xs px-3 py-2 rounded-xl shadow-sm">
                              {p.name}
                              <button type="button" onClick={() => removeFromCart(p.name)} className="text-white/40 hover:text-red-400 transition-colors">
                                <X className="w-3 h-3" />
                              </button>
                            </span>
                          ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label htmlFor="message" className="font-dm text-xs font-bold uppercase tracking-widest text-white/70">Your Requirements</label>
                    <textarea id="message" name="message" rows={3} placeholder="Tell us about your gifting needs, quantity, and budget..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 font-dm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00] transition-all resize-none" required></textarea>
                  </div>

                  <button type="submit" className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF7A00] to-[#E66A00] text-white font-manrope font-bold rounded-2xl py-4 mt-4 hover:shadow-[0_10px_30px_rgba(255,122,0,0.3)] transition-all duration-300 hover:-translate-y-1 group">
                    Submit Enquiry <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  );
}
