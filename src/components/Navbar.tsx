import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Customization', href: '#customization' },
  { label: 'About', href: '#why-k2b' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-7xl transition-all duration-500 ease-in-out ${
          scrolled ? '-translate-y-[150%] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="bg-white/60 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-full px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-none">
              <span className="font-sora font-800 text-base font-extrabold text-slate-900 tracking-tight">Key2Brand</span>
              <span className="font-dm text-xs text-orange-500 font-semibold tracking-wide">SOLUTION</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-manrope font-semibold text-sm text-slate-600 hover:text-orange-500 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="bg-gradient-to-r from-[#FF7A00] to-[#EC4899] text-white font-bold text-sm py-2.5 px-6 rounded-full shadow-md hover:shadow-[0_4px_15px_rgba(255,122,0,0.4)] hover:scale-105 transition-all duration-300">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[24px] px-6 py-5 shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-manrope font-semibold text-slate-700 hover:text-orange-500 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-slate-200/60">
              <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-gradient-to-r from-[#FF7A00] to-[#EC4899] text-white font-bold text-sm text-center py-3 rounded-full shadow-md hover:shadow-[0_4px_15px_rgba(255,122,0,0.4)] transition-all duration-300">Contact Us</a>
            </div>
          </div>
        </div>
      )}
      </nav>
    </div>
  );
}
