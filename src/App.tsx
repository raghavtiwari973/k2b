import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PremiumCollection from './components/PremiumCollection';
import StandardCollection from './components/StandardCollection';
import RegularCollection from './components/RegularCollection';
import Customization from './components/Customization';
import WhyK2B from './components/WhyK2B';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import { CartProvider } from './components/CartContext';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <PremiumCollection />
          <StandardCollection />
          <RegularCollection />
          <Customization />
          <WhyK2B />
          <Testimonials />
          <CTA />
        </main>
      </div>
    </CartProvider>
  );
}
