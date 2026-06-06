import { ArrowRight } from 'lucide-react';

const standardProducts = [
  { name: 'Customized Pen Stands', icon: '✏️', color: '#DBEAFE' },
  { name: 'Desk Organizers', icon: '🗃️', color: '#D1FAE5' },
  { name: 'Branded USB Drives', icon: '💾', color: '#FEF3C7' },
  { name: 'Digital Alarm Clocks', icon: '⏰', color: '#FCE7F3' },
  { name: 'Corporate Desk Kits', icon: '🧰', color: '#E0E7FF' },
  { name: 'Eco Stationery', icon: '🌿', color: '#ECFDF5' },
  { name: 'Wooden USB Drives', icon: '🪵', color: '#FEF9C3' },
  { name: 'Personalized Accessories', icon: '🎨', color: '#FEE2E2' },
];

export default function StandardCollection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 mb-6">
              <span className="font-manrope text-sm font-semibold text-slate-700">Standard Tier</span>
            </div>
            <h2 className="font-sora font-extrabold text-4xl lg:text-5xl text-slate-900 mb-3 leading-tight">
              Standard
              <br />
              <span className="text-slate-600">Collection</span>
            </h2>
            <p className="font-sora font-bold text-xl text-orange-500 mb-5">
              Practical. Elegant. Memorable.
            </p>
            <p className="font-dm text-slate-500 text-lg leading-relaxed mb-10">
              Thoughtfully designed for managers, associates, and event participants. Functional gifts
              that make a lasting impression in every workplace setting.
            </p>

            {/* Product tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              {standardProducts.map((p) => (
                <span
                  key={p.name}
                  className="inline-flex items-center gap-2 font-dm text-sm font-medium text-slate-700 rounded-full px-3 py-1.5 border border-gray-200 bg-gray-50 hover:border-slate-400 hover:bg-white transition-all duration-200 cursor-default"
                >
                  <span>{p.icon}</span>
                  {p.name}
                </span>
              ))}
            </div>

            <button 
              onClick={() => {
                const el = document.getElementById('collections');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                window.dispatchEvent(new CustomEvent('open-category', { detail: 'Standard Collection' }));
              }}
              className="btn-secondary inline-flex items-center gap-2 border-slate-300 hover:border-slate-900 hover:text-slate-900"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right – Product Showcase */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-[30px] p-8 border border-gray-200 shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-sora font-extrabold text-slate-900 text-xl">Standard Series</h3>
                  <p className="font-dm text-slate-500 text-sm">150+ curated products</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">💼</span>
                </div>
              </div>

              {/* Products grid */}
              <div className="grid grid-cols-2 gap-3">
                {standardProducts.map((p) => (
                  <div
                    key={p.name}
                    className="bg-white rounded-[16px] p-4 flex items-center gap-3 border border-gray-100 shadow-sm card-hover"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: p.color }}
                    >
                      {p.icon}
                    </div>
                    <p className="font-manrope font-semibold text-slate-700 text-xs leading-tight">
                      {p.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mt-5">
                {[
                  { value: '150+', label: 'Products' },
                  { value: '100%', label: 'Branded' },
                  { value: '48hr', label: 'Turnaround' },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-[14px] p-3 text-center border border-gray-100">
                    <p className="font-sora font-extrabold text-slate-900 text-lg">{s.value}</p>
                    <p className="font-dm text-slate-400 text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
