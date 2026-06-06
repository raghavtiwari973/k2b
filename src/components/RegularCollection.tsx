import { 
  ArrowRight, 
  PenTool, 
  Book, 
  BookOpen, 
  MousePointerClick, 
  CalendarDays, 
  Smartphone, 
  Users, 
  Briefcase, 
  Tags,
  CheckCircle2
} from 'lucide-react';

const regularProducts = [
  { name: 'Branded Pens', icon: PenTool },
  { name: 'Corporate Diaries', icon: Book },
  { name: 'Notebooks', icon: BookOpen },
  { name: 'Mouse Pads', icon: MousePointerClick },
  { name: 'Desk Calendars', icon: CalendarDays },
  { name: 'Mobile Holders', icon: Smartphone },
  { name: 'Conference Kits', icon: Users },
  { name: 'Welcome Kits', icon: Briefcase },
  { name: 'Promo Merch', icon: Tags },
];

export default function RegularCollection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-emerald-100 shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="font-dm text-sm font-semibold text-slate-700">Volume & Event Gifting</span>
          </div>
          <h2 className="font-sora font-extrabold text-4xl lg:text-5xl text-slate-900 mb-6 leading-tight">
            Smart Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Scale</span>
          </h2>
          <p className="font-dm text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Reliable, high-quality gifting solutions engineered perfectly for conferences, massive employee engagement programs, and wide-scale promotional campaigns.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Product Grid (Spans 8 columns) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {regularProducts.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.name}
                    className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(16,185,129,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-14 h-14 rounded-full bg-slate-50 text-slate-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span className="font-sora font-semibold text-slate-900 text-sm group-hover:text-emerald-600 transition-colors">
                      {p.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Stats & Info Panel (Spans 4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Scale card */}
            <div className="relative bg-slate-900 rounded-[32px] p-8 text-white shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/30 transition-colors duration-500" />
              
              <div className="relative z-10">
                <p className="font-manrope font-bold text-emerald-400 text-sm tracking-wide uppercase mb-6">
                  Volume Optimized
                </p>
                <div
                  className="grid grid-cols-2 gap-x-4 gap-y-6"
                >
                  {[
                    { value: '50+', label: 'Min. Order' },
                    { value: 'Unlimited', label: 'Max. Units' },
                    { value: '72hr', label: 'Lead Time' },
                    { value: '100%', label: 'Customized' },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="font-sora font-extrabold text-2xl text-white mb-1">{s.value}</p>
                      <p className="font-dm text-slate-400 text-xs font-medium">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Use cases */}
            <div className="bg-[#F8FAFC] rounded-[32px] p-8 border border-slate-100">
              <p className="font-sora font-bold text-slate-900 text-lg mb-5">Ideal Use Cases</p>
              <ul className="space-y-3.5">
                {[
                  'Annual Conferences',
                  'New Employee Onboarding',
                  'Seminar & Training Programs',
                  'Festive Giveaways',
                ].map((uc) => (
                  <li key={uc} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="font-dm text-slate-700 text-sm font-medium">{uc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="w-full flex items-center justify-center gap-2 rounded-full py-4 font-manrope font-bold text-white bg-emerald-600 shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all duration-300 hover:-translate-y-1"
            >
              Discuss Bulk Orders
              <ArrowRight className="w-4 h-4" />
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}
