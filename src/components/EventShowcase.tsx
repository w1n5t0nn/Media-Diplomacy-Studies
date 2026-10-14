import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { Hero } from './Hero';
import { AboutEvent } from './AboutEvent';
import { AboutAmbassador } from './AboutAmbassador';
import { EventInfo } from './EventInfo';
import { WhyAttend } from './WhyAttend';
import { Speakers } from './Speakers';
import { Programme } from './Programme';
import { RegistrationComingSoon } from './RegistrationComingSoon';
import { PartnersSponsors } from './PartnersSponsors';
import { FAQs } from './FAQs';

interface EventShowcaseProps {
  onOpenNotify: () => void;
  onOpenShare: () => void;
  onOpenVenue: () => void;
  isAuditMode: boolean;
}

export const EventShowcase: React.FC<EventShowcaseProps> = ({
  onOpenNotify,
  onOpenShare,
  onOpenVenue,
  isAuditMode,
}) => {
  return (
    <section id="diplomacy-day" className="relative bg-navy-950 border-t-4 border-gold-500">
      
      {/* Flagship Section Header Bar (Hostinger Bulletin Editorial Banner) */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border-b border-gold-500/40 py-8 px-4 sm:px-6 lg:px-8 shadow-navy-deep">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold-gradient p-0.5 shadow-gold-glow flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center text-gold-400">
                <Award className="w-6 h-6" />
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block font-mono">
                Flagship Organizational Initiative
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Ambassador Matthew Tawo Mbu Annual Diplomacy Day
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gold-400" />
              20 November 2026 · Abuja
            </span>
            <button
              onClick={onOpenNotify}
              className="px-5 py-2.5 bg-gold-gradient hover:bg-gold-gradient-hover text-navy-950 font-bold text-xs rounded-xl shadow-lg transition-all"
            >
              Registration Notice
            </button>
          </div>

        </div>
      </div>

      {/* Flagship Event Hero & Countdown */}
      <Hero
        onOpenNotify={onOpenNotify}
        onOpenShare={onOpenShare}
        onOpenVenue={onOpenVenue}
        isAuditMode={isAuditMode}
      />

      {/* Flagship Event Sub-Sections */}
      <AboutEvent />
      <AboutAmbassador isAuditMode={isAuditMode} />
      <EventInfo onOpenVenue={onOpenVenue} />
      <WhyAttend />
      <Speakers isAuditMode={isAuditMode} />
      <Programme />
      <RegistrationComingSoon onOpenNotify={onOpenNotify} />
      <PartnersSponsors onOpenNotify={onOpenNotify} isAuditMode={isAuditMode} />
      <FAQs />

    </section>
  );
};
