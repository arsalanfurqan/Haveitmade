import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'Excellent service — my house looks brand new! The team was thorough, professional, and paid attention to every little detail. I\'ve tried other services before but HaveItMaid is on a completely different level.',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    name: 'Michael Torres',
    role: 'Office Manager',
    location: 'San Francisco, CA',
    rating: 5,
    text: 'Very professional and on time. Highly recommended! They transformed our office space and everyone at work noticed the difference immediately. We\'ve been using them weekly ever since.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    name: 'Emily Chen',
    role: 'Busy Mom',
    location: 'Austin, TX',
    rating: 5,
    text: 'As a mother of three, I don\'t have time to deep clean. HaveItMaid has been a lifesaver! The cleaners are wonderful with kids around and use safe, eco-friendly products. Absolutely love them.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    name: 'David Park',
    role: 'Real Estate Agent',
    location: 'Seattle, WA',
    rating: 5,
    text: 'I use HaveItMaid for all my move-out cleans and they never disappoint. Properties look showroom-ready every time, which helps me get top dollar for my clients. Fast, reliable, and worth every penny.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    name: 'Linda Ramirez',
    role: 'Condo Owner',
    location: 'Miami, FL',
    rating: 5,
    text: 'I was skeptical at first but after my first deep clean I was blown away. My kitchen and bathrooms have never looked so spotless. Booked a recurring weekly clean and couldn\'t be happier!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    name: 'James Wilson',
    role: 'Small Business Owner',
    location: 'Chicago, IL',
    rating: 5,
    text: 'Outstanding results every single time. The team is punctual, thorough, and respectful of our space. Our customers always compliment how clean our store looks. Truly the best cleaning service around.',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 text-sm font-semibold px-4 py-2 rounded-full mb-5">
            Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800 mb-4">
            What Our Customers{' '}
            <span className="text-brand-500">Say About Us</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Don't take our word for it — here's what real customers have to say about their HaveItMaid experience.
          </p>

          {/* Aggregate rating */}
          <div className="mt-8 inline-flex items-center gap-4 bg-slate-50 rounded-2xl px-8 py-4 border border-slate-100">
            <div className="text-4xl font-serif font-bold text-slate-800">4.9</div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-sm text-slate-500">Based on 800+ verified reviews</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, location, rating, text, image }) => (
            <div
              key={name}
              className="bg-slate-50 hover:bg-brand-50 rounded-2xl p-6 border border-slate-100 hover:border-brand-100 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-brand-200 group-hover:text-brand-300 transition-colors" />
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{text}"</p>

              <div className="flex items-center gap-3">
                <img
                  src={image}
                  alt={name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-sm"
                />
                <div>
                  <div className="font-semibold text-slate-800 text-sm">{name}</div>
                  <div className="text-xs text-slate-500">{role} · {location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
