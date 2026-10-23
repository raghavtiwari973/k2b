import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Customization from './components/Customization';
import WhyK2B from './components/WhyK2B';
import CTA from './components/CTA';
import { CartProvider } from './components/CartContext';
import FloatingQuoteButton from './components/FloatingQuoteButton';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Customization />
          <WhyK2B />
          <CTA />
        </main>
        <Chatbot />
        <FloatingQuoteButton />
      </div>
    </CartProvider>
  );
}
