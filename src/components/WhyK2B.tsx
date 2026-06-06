import { Package, Palette, Truck, Building2 } from 'lucide-react';

const reasons = [
  {
    icon: Package,
    title: 'Curated Product Selection',
    desc: 'Carefully selected premium products across hundreds of categories, reviewed and quality-tested for every gifting tier.',
    stat: '500+',
    statLabel: 'Products',
    color: 'from-orange-500 to-orange-600',
    bg: 'from-orange-50 to-amber-50',
  },
  {
    icon: Palette,
    title: 'Custom Branding',
    desc: 'Brand-aligned gifting solutions with full customization — logos, colors, packaging, and personalized messaging.',
    stat: '100%',
    statLabel: 'Brand Aligned',
    color: 'from-blue-500 to-blue-600',
    bg: 'from-blue-50 to-sky-50',
  },
  {
    icon: Truck,
    title: 'End-to-End Execution',
    desc: 'From concept and selection to branding, packaging, and Pan India delivery — we handle everything seamlessly.',
    stat: 'Pan India',
    statLabel: 'Delivery',
    color: 'from-emerald-500 to-emerald-600',
    bg: 'from-emerald-50 to-teal-50',
  },
  {
    icon: Building2,
    title: 'Corporate Expertise',
    desc: 'Years of experience crafting gifting solutions specifically for organizations — from SMEs to large enterprises.',
    stat: '200+',
    statLabel: 'Clients Served',
    color: 'from-slate-700 to-slate-800',
    bg: 'from-slate-50 to-gray-50',
  },
];

export default function WhyK2B() {
  return (
    <section id="why-k2b" className="section-beige py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-5">
            <span className="font-manrope text-sm font-semibold text-orange-600">
              Why Choose Us
            </span>
          </div>
          <h2 className="font-sora font-extrabold text-4xl lg:text-5xl text-slate-900 mb-4">
            Why Businesses
            <br />
            Choose <span className="text-gradient-orange">K2B</span>
          </h2>
          <p className="font-dm text-lg text-slate-500">
            We go beyond gifting — we build meaningful brand connections.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className={`relative bg-gradient-to-br ${r.bg} rounded-[24px] p-7 border border-gray-100 card-hover overflow-hidden`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${r.color} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Stat */}
                <div className="mb-4">
                  <p className={`font-sora font-extrabold text-2xl bg-gradient-to-br ${r.color} bg-clip-text text-transparent`}>
                    {r.stat}
                  </p>
                  <p className="font-dm text-xs text-slate-400 font-medium">{r.statLabel}</p>
                </div>

                {/* Content */}
                <h3 className="font-sora font-extrabold text-slate-900 text-base mb-3">{r.title}</h3>
                <p className="font-dm text-slate-500 text-sm leading-relaxed">{r.desc}</p>

                {/* Bg circle */}
                <div
                  className={`absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-gradient-to-br ${r.color} opacity-10`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
