import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const footerLinks = {
  Services: ['Home Cleaning', 'Office Cleaning', 'Deep Cleaning', 'Move-In / Move-Out', 'Carpet Cleaning', 'Bathroom & Kitchen'],
  Company: ['About Us', 'Our Team', 'Careers', 'Blog', 'Press'],
  Support: ['FAQ', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Sitemap'],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-brand-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif font-bold text-xl text-white">HaveItMaid</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Professional cleaning services that make your home and office sparkle. Trusted by thousands of customers nationwide.
            </p>
            <div className="space-y-3">
              <a href="tel:+15551234567" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-brand-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                +1 (555) 123-4567
              </a>
              <a href="mailto:hello@haveitmaid.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-brand-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                hello@haveitmaid.com
              </a>
              <div className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                123 Clean Street, Los Angeles, CA 90001
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} HaveItMaid. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Twitter, label: 'Twitter' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 bg-slate-800 hover:bg-brand-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4 text-slate-400 hover:text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
