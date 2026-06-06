import React from 'react';
import { Mail, Phone, Send, X } from 'lucide-react';
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

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600 rounded-[32px] overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white opacity-5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white opacity-5 translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white opacity-[0.03]" />

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Content */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-8">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="font-manrope text-sm font-semibold text-white">
                    Let's Create Something Special
                  </span>
                </div>

                {/* Heading */}
                <h2 className="font-sora font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                  Connect With
                  <br />
                  Us For Your Gifting Needs
                </h2>

                {/* Subtext */}
                <p className="font-dm text-orange-100 text-lg leading-relaxed mb-10 max-w-xl">
                  Premium, customized corporate gifting solutions made simple.
                </p>

                {/* Use case chips */}
                <div className="flex flex-wrap gap-2 mb-12">
                  {['Custom Branding', 'Premium Quality', 'Pan India Delivery'].map((item) => (
                    <span key={item} className="font-dm text-sm text-white bg-white/15 border border-white/25 rounded-full px-4 py-1.5 font-medium backdrop-blur-sm">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Direct Contact Info */}
                <div className="flex flex-wrap gap-6">
                  <a href="tel:8959817421" className="flex items-center gap-3 text-white group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-dm text-xs text-orange-200 mb-0.5">Call Us Directly</p>
                      <p className="font-manrope font-bold">+91 8959817421</p>
                    </div>
                  </a>
                  <a href="mailto:key2brand360@gmail.com" className="flex items-center gap-3 text-white group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-dm text-xs text-orange-200 mb-0.5">Email Us</p>
                      <p className="font-manrope font-bold">key2brand360@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Content - Contact Form */}
              <div className="bg-white rounded-[24px] p-6 sm:p-8 shadow-2xl">
                <h3 className="font-sora font-bold text-2xl text-slate-900 mb-2">Get a Quote</h3>
                <p className="font-dm text-sm text-slate-500 mb-6">Fill out the form below and our gifting experts will get back to you shortly.</p>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="font-dm text-xs font-semibold text-slate-700 ml-1">Full Name</label>
                      <input type="text" id="name" name="name" placeholder="full name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all" required />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="font-dm text-xs font-semibold text-slate-700 ml-1">Phone Number</label>
                      <input type="tel" id="phone" name="phone" placeholder="phone number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all" required />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="font-dm text-xs font-semibold text-slate-700 ml-1">Work Email</label>
                    <input type="email" id="email" name="email" placeholder="work email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all" required />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="company" className="font-dm text-xs font-semibold text-slate-700 ml-1">Company Name</label>
                    <input type="text" id="company" name="company" placeholder="company name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all" required />
                  </div>

                  {cart.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <label className="font-dm text-xs font-semibold text-slate-700 ml-1">Selected Products ({cart.length})</label>
                      <div className="flex flex-wrap gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl max-h-32 overflow-y-auto custom-scrollbar">
                        {cart.map((p) => (
                          <span key={p.name} className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-600 text-xs px-2.5 py-1.5 rounded-lg shadow-sm">
                            {p.name}
                            <button type="button" onClick={() => removeFromCart(p.name)} className="text-slate-400 hover:text-red-500 transition-colors">
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="font-dm text-xs font-semibold text-slate-700 ml-1">Your Requirements</label>
                    <textarea id="message" name="message" rows={3} placeholder="Tell us about your gifting needs, quantity, and budget..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all resize-none" required></textarea>
                  </div>

                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-manrope font-bold rounded-xl py-3.5 mt-2 hover:bg-orange-500 transition-colors duration-300">
                    Send Enquiry <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
