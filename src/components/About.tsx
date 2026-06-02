import { Award, Users, Clock, Leaf } from 'lucide-react';

const stats = [
  { icon: Users, value: '2,000+', label: 'Happy Clients' },
  { icon: Award, value: '8 Years', label: 'In Business' },
  { icon: Clock, value: '15,000+', label: 'Cleanings Done' },
  { icon: Leaf, value: '100%', label: 'Eco-Friendly' },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop"
                alt="Professional cleaner at work"
                className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="flex flex-col gap-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/6197114/pexels-photo-6197114.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Clean kitchen"
                  className="w-full h-40 lg:h-48 object-cover rounded-2xl shadow-lg"
                />
                <div className="bg-brand-500 rounded-2xl p-5 text-white text-center shadow-lg">
                  <div className="text-3xl font-serif font-bold">8+</div>
                  <div className="text-sm font-medium text-brand-100 mt-1">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-4 bg-white rounded-xl shadow-xl p-4 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Eco Certified</div>
                  <div className="text-xs text-slate-500">Green cleaning products</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-8 lg:pt-0">
            <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              About HaveItMaid
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800 mb-6 leading-tight">
              Dedicated to Making Your Space{' '}
              <span className="text-brand-500">Spotless & Fresh</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              HaveItMaid is a professional cleaning service dedicated to making your spaces spotless, fresh, and healthy. Founded with a passion for cleanliness and a commitment to excellence, we've been transforming homes and offices for over 8 years.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our team of trained, background-checked cleaners uses eco-friendly products to deliver outstanding results every time. We understand that your home is your sanctuary — that's why we treat every space with the same care we'd give our own.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {['Licensed & Insured', 'Background Checked', 'Same-Day Booking', 'Satisfaction Guarantee'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-sage-400 rounded-full" />
                  {item}
                </span>
              ))}
            </div>

            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Book Your Clean Today
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-slate-50 rounded-2xl p-6 text-center hover:bg-brand-50 hover:border-brand-100 border border-transparent transition-all duration-300 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-brand-100 transition-colors">
                <Icon className="w-6 h-6 text-brand-500" />
              </div>
              <div className="text-2xl font-serif font-bold text-slate-800 mb-1">{value}</div>
              <div className="text-sm text-slate-500 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
