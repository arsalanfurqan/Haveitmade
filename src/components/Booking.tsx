import { useState } from 'react';
import { supabase, type Booking } from '../lib/supabase';
import { CalendarCheck, MessageCircle, CheckCircle, Loader2 } from 'lucide-react';

const services = [
  'Home Cleaning',
  'Office Cleaning',
  'Deep Cleaning',
  'Move-In / Move-Out Cleaning',
  'Carpet Cleaning',
  'Bathroom & Kitchen Cleaning',
];

const times = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
];

const initialForm: Omit<Booking, 'id' | 'status' | 'created_at'> = {
  name: '',
  phone: '',
  address: '',
  service_type: '',
  preferred_date: '',
  preferred_time: '',
};

export default function Booking() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const { error: dbError } = await supabase.from('bookings').insert([form]);

    if (dbError) {
      setError('Something went wrong. Please try again or contact us via WhatsApp.');
    } else {
      setSuccess(true);
      setForm(initialForm);
    }
    setSubmitting(false);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Book a Cleaning
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800 mb-4 leading-tight">
              Ready for a{' '}
              <span className="text-brand-500">Sparkling Clean</span>{' '}
              Space?
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Book your cleaning in under 2 minutes. We'll confirm your appointment within 30 minutes.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { step: '1', title: 'Fill the form', desc: 'Tell us your details and preferred time' },
                { step: '2', title: 'Get confirmed', desc: 'We confirm within 30 minutes via phone' },
                { step: '3', title: 'Enjoy the clean', desc: 'Sit back while we handle everything' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                    {step}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{title}</div>
                    <div className="text-sm text-slate-500 mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Chat on WhatsApp</div>
                  <div className="text-sm text-slate-500">Get an instant quote</div>
                </div>
              </div>
              <a
                href="https://wa.me/15551234567?text=Hi!%20I%27d%20like%20to%20book%20a%20cleaning%20with%20HaveItMaid."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors shadow-sm hover:shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Message Us on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
            {success ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-sage-500" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">Booking Received!</h3>
                <p className="text-slate-500 mb-8">
                  Thank you! We'll call you within 30 minutes to confirm your appointment.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
                >
                  Book Another Clean
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center">
                    <CalendarCheck className="w-5 h-5 text-brand-500" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-800">Schedule Your Clean</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-slate-800 placeholder:text-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-slate-800 placeholder:text-slate-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Address *</label>
                    <textarea
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      required
                      rows={2}
                      placeholder="123 Main St, City, State, ZIP"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-slate-800 placeholder:text-slate-400 transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Type *</label>
                    <select
                      name="service_type"
                      value={form.service_type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-slate-800 transition-all bg-white appearance-none"
                    >
                      <option value="" disabled>Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Date *</label>
                      <input
                        type="date"
                        name="preferred_date"
                        value={form.preferred_date}
                        onChange={handleChange}
                        required
                        min={today}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-slate-800 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Time *</label>
                      <select
                        name="preferred_time"
                        value={form.preferred_time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-slate-800 transition-all bg-white appearance-none"
                      >
                        <option value="" disabled>Select a time...</option>
                        {times.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 disabled:bg-brand-300 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-lg text-base mt-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Booking...
                      </>
                    ) : (
                      <>
                        <CalendarCheck className="w-5 h-5" />
                        Book Now
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
