import { Home, Building2, Layers, Truck, Wind, Bath } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Home Cleaning',
    description: 'Thorough top-to-bottom cleaning for your entire home. Dusting, vacuuming, mopping, and sanitizing included.',
    color: 'text-brand-500',
    bg: 'bg-brand-50',
    hoverBg: 'hover:bg-brand-500',
    image: 'https://images.pexels.com/photos/4107278/pexels-photo-4107278.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  },
  {
    icon: Building2,
    title: 'Office Cleaning',
    description: 'Keep your workplace clean, healthy, and productive. Flexible scheduling to minimize disruption.',
    color: 'text-sage-600',
    bg: 'bg-sage-50',
    hoverBg: 'hover:bg-sage-500',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  },
  {
    icon: Layers,
    title: 'Deep Cleaning',
    description: 'An intensive clean that reaches every corner. Perfect for seasonal refreshes or first-time services.',
    color: 'text-sky-500',
    bg: 'bg-sky-50',
    hoverBg: 'hover:bg-sky-500',
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  },
  {
    icon: Truck,
    title: 'Move-In / Move-Out',
    description: 'Leave your old place spotless or arrive to a pristine new home. We handle every detail.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    hoverBg: 'hover:bg-amber-500',
    image: 'https://images.pexels.com/photos/6197114/pexels-photo-6197114.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  },
  {
    icon: Wind,
    title: 'Carpet Cleaning',
    description: 'Professional steam cleaning restores carpet freshness, removes stains and allergens.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    hoverBg: 'hover:bg-rose-500',
    image: 'https://images.pexels.com/photos/4700405/pexels-photo-4700405.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  },
  {
    icon: Bath,
    title: 'Bathroom & Kitchen',
    description: 'Targeted scrubbing, disinfecting, and degreasing for your home\'s most-used areas.',
    color: 'text-teal-500',
    bg: 'bg-teal-50',
    hoverBg: 'hover:bg-teal-500',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 text-sm font-semibold px-4 py-2 rounded-full mb-5">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800 mb-4">
            Everything You Need for a{' '}
            <span className="text-brand-500">Spotless Space</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From routine home cleans to specialized deep-cleaning services, we have you covered with professional results guaranteed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, color, bg, hoverBg, image }) => (
            <div
              key={title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>
                <a
                  href="#booking"
                  className={`inline-flex items-center gap-1 text-sm font-semibold ${color} hover:gap-2 transition-all duration-200`}
                >
                  Book This Service
                  <span className="text-lg leading-none">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
