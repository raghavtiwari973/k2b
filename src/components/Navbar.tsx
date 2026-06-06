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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg border-b border-gray-100' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-none">
              <span className="font-sora font-800 text-base font-extrabold text-slate-900 tracking-tight">K2B Gifting</span>
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
            <a href="#contact" className="btn-secondary text-sm py-2.5 px-5">
              Contact Us
            </a>
            <a href="#collections" className="btn-primary text-sm py-2.5 px-5">
              Explore Collections
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
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-xl">
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
            <div className="flex flex-col gap-3 pt-2 border-t border-gray-100">
              <a href="#contact" className="btn-secondary text-sm text-center">Contact Us</a>
              <a href="#collections" className="btn-primary text-sm text-center">Explore Collections</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
