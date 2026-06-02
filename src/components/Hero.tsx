import { ArrowRight, CalendarCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4107278/pexels-photo-4107278.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Clean modern home interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-brand-900/40" />
      </div>

      {/* Floating badge */}
      <div className="absolute top-1/4 right-8 hidden lg:block animate-float">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 max-w-[160px]">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-sage-400 rounded-full" />
            <span className="text-xs font-semibold text-slate-700">Eco-Friendly</span>
          </div>
          <p className="text-xs text-slate-500">100% safe & green products</p>
        </div>
      </div>

      <div className="absolute bottom-1/3 right-16 hidden lg:block" style={{ animationDelay: '1.5s' }}>
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 max-w-[160px] animate-float">
          <div className="text-2xl font-bold font-serif text-brand-600">500+</div>
          <p className="text-xs text-slate-500 mt-0.5">Happy clients this month</p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 text-center lg:text-left">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-sage-400 rounded-full animate-pulse" />
            Trusted by 2,000+ homeowners
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Professional Cleaning{' '}
            <span className="text-brand-300">Services</span>{' '}
            You Can Trust
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            HaveItMaid provides reliable home and office cleaning services tailored to your needs. Book in minutes, relax always.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-brand-500/30 transition-all duration-300 group"
            >
              <CalendarCheck className="w-5 h-5" />
              Book a Cleaning
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Get a Free Quote
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {[
                'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop',
                'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop',
                'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Happy customer"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/70 text-sm">4.9/5 from 800+ reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
