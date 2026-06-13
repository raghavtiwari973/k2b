import { ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';

export default function FloatingQuoteButton() {
  const { cart } = useCart();

  if (cart.length === 0) return null;

  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('close-modals'));
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-[100000] bg-slate-900 text-white p-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-110 hover:bg-slate-800 transition-all duration-300 flex items-center justify-center group animate-fade-in-up"
      title="View Selected Items"
    >
      <div className="relative">
        <ShoppingCart className="w-6 h-6" />
        <span className="absolute -top-3 -right-3 bg-orange-500 text-white text-[11px] font-extrabold w-[22px] h-[22px] flex items-center justify-center rounded-full shadow-sm border-2 border-slate-900">
          {cart.length}
        </span>
      </div>
    </button>
  );
}