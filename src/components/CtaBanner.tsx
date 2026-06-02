import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
          alt="Clean home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-800/90 to-brand-700/80" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-sage-400 rounded-full animate-pulse" />
          Available 7 Days a Week
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
          Get Your Space Cleaned Today{' '}
          <span className="text-brand-200">with HaveItMaid</span>
        </h2>

        <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of happy customers who trust HaveItMaid for their home and office cleaning needs. Book in minutes, enjoy a spotless space today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-700 font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-white/30 transition-all duration-300 group text-base"
          >
            Book Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/15551234567?text=Hi!%20I%27d%20like%20to%20get%20a%20free%20quote%20from%20HaveItMaid."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm">
          {['No hidden fees', 'Free cancellation', '30-min confirmation', 'Satisfaction guaranteed'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-sage-400 rounded-full" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
