import React from 'react';
import { Twitter, Linkedin, Facebook, Youtube, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const hashtags = [
    '#MediaDiplomacy',
    '#PublicDiplomacy',
    '#StateMediaDiplomacy',
    '#StrategicCommunication',
    '#SoftPower',
    '#GlobalInfluence',
    '#MbuDiplomacyDay',
    '#Nigeria',
    '#Leadership',
    '#InternationalRelations'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white border-t border-gold-500/30 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-gradient p-0.5 shadow-gold-glow flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-navy-950 rounded-[7px] flex items-center justify-center text-gold-400 font-serif font-bold text-lg">
                  MDC
                </div>
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-tight text-white">
                  Media Diplomacy & Consulting
                </span>
                <span className="block text-xs font-mono font-semibold uppercase tracking-widest text-gold-400">
                  http://mediadiplomacy.org.ng/
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              A professional media consulting and public diplomacy organization dedicated to strategic communication, state media advisory, and global influence. Host secretariat for the flagship Ambassador Matthew Tawo Mbu Annual Diplomacy Day.
            </p>

            {/* Social Icons Placeholders */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 bg-navy-900 border border-navy-800 hover:border-gold-500/40 text-slate-300 hover:text-gold-400 rounded-lg transition-colors" title="Twitter / X Placeholder">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-navy-900 border border-navy-800 hover:border-gold-500/40 text-slate-300 hover:text-gold-400 rounded-lg transition-colors" title="LinkedIn Placeholder">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-navy-900 border border-navy-800 hover:border-gold-500/40 text-slate-300 hover:text-gold-400 rounded-lg transition-colors" title="Facebook Placeholder">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-navy-900 border border-navy-800 hover:border-gold-500/40 text-slate-300 hover:text-gold-400 rounded-lg transition-colors" title="YouTube Placeholder">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-gold-400 uppercase tracking-wider">
              Organization Practices
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#org-hero" className="hover:text-gold-300 transition-colors">Home & Overview</a></li>
              <li><a href="#about-org" className="hover:text-gold-300 transition-colors">About the Organization</a></li>
              <li><a href="#consulting" className="hover:text-gold-300 transition-colors">Media Consulting Advisory</a></li>
              <li><a href="#media-diplomacy" className="hover:text-gold-300 transition-colors">Media Diplomacy Practice</a></li>
              <li><a href="#strategic-comm" className="hover:text-gold-300 transition-colors">Strategic Communication</a></li>
              <li><a href="#audience" className="hover:text-gold-300 transition-colors">Target Stakeholders</a></li>
            </ul>
          </div>

          {/* Flagship Initiative & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-gold-400 uppercase tracking-wider">
              Flagship Initiative & Contact
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#diplomacy-day" className="hover:text-gold-300 transition-colors font-semibold text-gold-300">Amb. M. T. Mbu Diplomacy Day 2026</a></li>
              <li><a href="#hero" className="hover:text-gold-300 transition-colors">Summit Countdown & Overview</a></li>
              <li><a href="#ambassador-mbu" className="hover:text-gold-300 transition-colors">Ambassador M. T. Mbu Legacy</a></li>
              <li><a href="#insights" className="hover:text-gold-300 transition-colors">Insights & Editorial Bulletins</a></li>
              <li><a href="#faqs" className="hover:text-gold-300 transition-colors">Summit FAQs</a></li>
              <li><a href="#contact" className="hover:text-gold-300 transition-colors">Contact Secretariat</a></li>
            </ul>
          </div>

        </div>

        {/* Event Hashtags Cloud */}
        <div className="border-t border-navy-900 pt-6 pb-8">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 block mb-3 font-mono">
            Official Organization Hashtags
          </span>
          <div className="flex flex-wrap gap-2">
            {hashtags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-navy-900 border border-navy-800 text-gold-400/90 text-[11px] font-mono rounded-md hover:border-gold-500/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Closing Line & Copyright Bar */}
        <div className="border-t border-navy-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-serif text-base md:text-lg font-bold text-gold-300 uppercase tracking-wider mb-1">
              Connecting Governments, Media & International Stakeholders.
            </p>
            <p className="text-[11px] text-slate-500">
              © 2026 Media Diplomacy & Consulting Secretariat (mediadiplomacy.org.ng). All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-navy-900 hover:bg-navy-800 border border-gold-500/30 text-gold-400 rounded-xl transition-all hover:-translate-y-1 shrink-0"
            title="Scroll to Top"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
