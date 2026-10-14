import React from 'react';
import { Calendar, MapPin, Users, Navigation, Sparkles } from 'lucide-react';

interface EventInfoProps {
  onOpenVenue: () => void;
}

export const EventInfo: React.FC<EventInfoProps> = ({ onOpenVenue }) => {
  return (
    <section id="event-info" className="py-24 bg-navy-900 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-2">
            Summit Specification
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Event <span className="text-gold-gradient">Information</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Essential details for delegates, diplomatic missions, and media partners.
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* Theme Banner Box */}
        <div className="mb-12 p-8 bg-gradient-to-r from-navy-950 via-navy-850 to-navy-950 border border-gold-500/40 rounded-2xl shadow-navy-deep text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles className="w-32 h-32 text-gold-400" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-2">
            Official Summit Theme 2026
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-4xl mx-auto leading-tight mb-4">
            "National Strategic Dialogue on Diplomacy, State Media Diplomacy and Global Influence"
          </h3>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Addressing Nigeria’s evolving foreign policy posture, strategic broadcasting, digital public diplomacy, and soft power projection across Africa and the Global South.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Date */}
          <div className="p-8 bg-navy-950 border border-navy-800 hover:border-gold-500/40 rounded-2xl transition-all">
            <div className="p-3 bg-gold-500/10 border border-gold-500/30 rounded-xl w-fit text-gold-400 mb-6">
              <Calendar className="w-7 h-7" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-1">Official Date</span>
            <h4 className="font-serif text-2xl font-bold text-white mb-2">20 November 2026</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Friday · 08:30 AM WAT Delegate Accreditation · 09:00 AM WAT Opening Session Prompt.
            </p>
          </div>

          {/* Card 2: Venue */}
          <div className="p-8 bg-navy-950 border border-navy-800 hover:border-gold-500/40 rounded-2xl transition-all flex flex-col justify-between">
            <div>
              <div className="p-3 bg-gold-500/10 border border-gold-500/30 rounded-xl w-fit text-gold-400 mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-1">Host Venue</span>
              <h4 className="font-serif text-2xl font-bold text-white mb-2">Shehu Musa Yar'Adua Centre</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                One Memorial Drive, Central Business District, Abuja, FCT, Nigeria.
              </p>
            </div>
            <button
              onClick={onOpenVenue}
              className="px-4 py-2 bg-navy-900 hover:bg-navy-800 border border-gold-500/30 text-gold-400 font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors w-full"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Venue Guide & Map</span>
            </button>
          </div>

          {/* Card 3: Audience */}
          <div className="p-8 bg-navy-950 border border-navy-800 hover:border-gold-500/40 rounded-2xl transition-all">
            <div className="p-3 bg-gold-500/10 border border-gold-500/30 rounded-xl w-fit text-gold-400 mb-6">
              <Users className="w-7 h-7" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-1">Target Delegation</span>
            <h4 className="font-serif text-2xl font-bold text-white mb-2">500+ High-Level Leaders</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ministers, Ambassadors, High Commissioners, Academic Deans, Media Executives & Corporate CEOs.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
