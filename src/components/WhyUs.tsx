import { ShieldCheck, DollarSign, Clock, Leaf, ThumbsUp, Star } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Trained & Trusted Cleaners',
    description: 'Every team member is background-checked, trained, and fully insured for your peace of mind.',
    color: 'text-brand-500',
    bg: 'bg-brand-50',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Transparent, competitive rates with no hidden fees. Get a free quote before committing.',
    color: 'text-sage-600',
    bg: 'bg-sage-50',
  },
  {
    icon: Clock,
    title: 'On-Time Service',
    description: 'We respect your schedule. Our cleaners arrive on time, every time — guaranteed.',
    color: 'text-sky-500',
    bg: 'bg-sky-50',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description: 'We use non-toxic, environmentally safe cleaning products that are safe for kids and pets.',
    color: 'text-sage-500',
    bg: 'bg-sage-50',
  },
  {
    icon: ThumbsUp,
    title: '100% Satisfaction Guarantee',
    description: 'Not satisfied? We\'ll come back and re-clean at no extra charge. Your happiness is our priority.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Star,
    title: '5-Star Rated Service',
    description: 'Consistently rated 5 stars by hundreds of verified customers across platforms.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=700&h=800&fit=crop"
                alt="Professional cleaning team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Fully Insured & Bonded</div>
                      <div className="text-sm text-slate-500 mt-0.5">Every clean is covered by our comprehensive insurance policy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -top-6 -right-4 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
              <div className="text-3xl font-serif font-bold text-slate-800">98%</div>
              <div className="text-sm text-slate-500 mt-1">Customer retention rate</div>
            </div>
          </div>

          {/* Right: Reasons */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800 mb-4 leading-tight">
              The HaveItMaid{' '}
              <span className="text-brand-500">Difference</span>
            </h2>
            <p className="text-slate-500 text-lg mb-10">
              We go beyond a basic clean — we deliver an experience that makes your space feel truly cared for.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {reasons.map(({ icon: Icon, title, description, color, bg }) => (
                <div
                  key={title}
                  className="group flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200 border border-transparent hover:border-slate-100"
                >
                  <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm mb-1">{title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
