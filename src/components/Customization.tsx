const customizationFeatures = [
  {
    icon: '🏷️',
    title: 'Logo Branding',
    desc: 'Custom logo printing and branding on every gift item.',
    color: '#FEF3C7',
    accent: '#F59E0B',
  },
  {
    icon: '✏️',
    title: 'Laser Engraving',
    desc: 'Premium personalization solutions for lasting impressions.',
    color: '#DBEAFE',
    accent: '#3B82F6',
  },
  {
    icon: '📦',
    title: 'Custom Packaging',
    desc: 'Branded packaging experiences tailored to your identity.',
    color: '#D1FAE5',
    accent: '#10B981',
  },
  {
    icon: '💌',
    title: 'Personalized Message Cards',
    desc: 'Thoughtful gifting with a personal touch and warm message.',
    color: '#FCE7F3',
    accent: '#EC4899',
  },
  {
    icon: '🎪',
    title: 'Event-Specific Concepts',
    desc: 'Unique gifting experiences curated for specific events.',
    color: '#EDE9FE',
    accent: '#8B5CF6',
  },
  {
    icon: '🎄',
    title: 'Festive Collections',
    desc: 'Seasonal and celebration gifting for every occasion.',
    color: '#FEE2E2',
    accent: '#EF4444',
  },
];

export default function Customization() {
  return (
    <section id="customization" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-5">
            <span className="font-manrope text-sm font-semibold text-orange-600">
              Full Customization
            </span>
          </div>
          <h2 className="font-sora font-extrabold text-4xl lg:text-5xl text-slate-900 mb-4">
            Your Brand.{' '}
            <span className="text-gradient-orange">Your Identity.</span>
          </h2>
          <p className="font-dm text-lg text-slate-500">
            Every gift we create is an extension of your brand. We make it uniquely yours.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {customizationFeatures.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm card-hover"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: f.color }}
                >
                  {f.icon}
                </div>
                <h3 className="font-manrope font-extrabold text-slate-900 text-base mb-2">
                  {f.title}
                </h3>
                <p className="font-dm text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
