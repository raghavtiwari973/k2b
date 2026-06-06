import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Head of HR, TechCorp India',
    company: 'TechCorp India',
    initials: 'RS',
    color: 'from-orange-500 to-orange-600',
    review:
      "K2B delivered exceptional quality gifting solutions for our annual employee awards. The premium packaging and branding exceeded every expectation. Our team was absolutely delighted with the personalized gift boxes.",
    tags: ['Premium Quality', 'Timely Delivery'],
  },
  {
    name: 'Priya Nair',
    role: 'Marketing Director, FinEdge Solutions',
    company: 'FinEdge Solutions',
    initials: 'PN',
    color: 'from-blue-500 to-blue-600',
    review:
      "We partnered with K2B for our client appreciation event and the results were phenomenal. The custom branding was flawless, and every client specifically called out the premium feel of the gifts. Highly professional team.",
    tags: ['Branding Excellence', 'Professional Service'],
  },
  {
    name: 'Anil Mehta',
    role: 'CEO, GreenBuild Ventures',
    company: 'GreenBuild Ventures',
    initials: 'AM',
    color: 'from-emerald-500 to-emerald-600',
    review:
      "K2B's eco-friendly collection for our Diwali gifting was a massive hit. The sustainable packaging aligned perfectly with our brand values, and delivery across 15 cities was smooth and on time. Outstanding service!",
    tags: ['Eco-Friendly', 'Pan India Delivery'],
  },
];

export default function Testimonials() {
  return (
    <section className="section-beige py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-5">
            <span className="font-manrope text-sm font-semibold text-orange-600">Client Stories</span>
          </div>
          <h2 className="font-sora font-extrabold text-4xl lg:text-5xl text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="font-dm text-lg text-slate-500">
            Real stories from businesses that trust K2B for corporate gifting.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-[28px] p-8 border border-gray-100 shadow-lg card-hover flex flex-col"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-orange-500" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-orange-400 fill-orange-400" />
                ))}
              </div>

              {/* Review */}
              <p className="font-dm text-slate-600 text-sm leading-relaxed flex-1 mb-6">
                "{t.review}"
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-dm text-xs font-medium text-orange-600 bg-orange-50 rounded-full px-3 py-1 border border-orange-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-sora font-extrabold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-manrope font-extrabold text-slate-900 text-sm">{t.name}</p>
                  <p className="font-dm text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '200+', label: 'Happy Clients' },
            { value: '10,000+', label: 'Gifts Delivered' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '100%', label: 'On-Time Delivery' },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-[20px] p-6 text-center border border-gray-100 shadow-sm card-hover"
            >
              <p className="font-sora font-extrabold text-3xl text-orange-500 mb-1">{s.value}</p>
              <p className="font-dm text-slate-500 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
