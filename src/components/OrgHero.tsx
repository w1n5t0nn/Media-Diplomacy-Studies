import React from 'react';
import { Globe, Calendar, ArrowRight, Sparkles, Award } from 'lucide-react';

interface OrgHeroProps {
  onOpenNotify: () => void;
  isAuditMode: boolean;
}

export const OrgHero: React.FC<OrgHeroProps> = ({ onOpenNotify, isAuditMode }) => {
  return (
    <section id="org-hero" className={`relative pt-32 pb-16 bg-navy-950 overflow-hidden border-b border-navy-800 ${isAuditMode ? 'placeholder-highlighted' : ''}`}>
      {/* Editorial Background Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gold-500/20 via-navy-900/60 to-navy-950" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Top Domain Badge */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-navy-800/60 text-xs">
          <div className="inline-flex items-center gap-2 text-gold-400 font-mono">
            <Globe className="w-3.5 h-3.5" />
            <span>mediadiplomacy.org.ng</span>
          </div>
          <span className="text-slate-400 font-mono hidden sm:inline">Media Consulting & Public Diplomacy</span>
        </div>

        {/* Main Grid: 7 cols main headline + 5 cols Flagship Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Organization Headline */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Advancing <span className="text-gold-gradient">Public Diplomacy</span> & Strategic Media Influence
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              High-level media advisory, state media strategy, and policy dialogue for governments, foreign envoys, and international organizations.
            </p>

            {/* Concise Practice Pills */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-300 font-medium">
              <span className="px-3 py-1 bg-navy-900 border border-navy-800 rounded-md">State Media Advisory</span>
              <span className="px-3 py-1 bg-navy-900 border border-navy-800 rounded-md">Reputation & Perception</span>
              <span className="px-3 py-1 bg-navy-900 border border-navy-800 rounded-md">Policy Dialogue</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#consulting"
                className="px-5 py-3 bg-gold-gradient hover:bg-gold-gradient-hover text-navy-950 font-bold rounded-xl text-xs flex items-center gap-2 transition-all shadow-md"
              >
                <span>View Practice Areas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#diplomacy-day"
                className="px-5 py-3 bg-navy-900 hover:bg-navy-800 text-gold-300 font-semibold rounded-xl text-xs border border-gold-500/30 flex items-center gap-2 transition-all"
              >
                <Award className="w-3.5 h-3.5 text-gold-400" />
                <span>Flagship Summit 2026</span>
              </a>
            </div>

          </div>

          {/* Right Column: Flagship Event Highlight Box */}
          <div className="lg:col-span-5">
            <div className="p-6 bg-navy-900/90 border border-gold-500/40 rounded-2xl shadow-navy-deep space-y-4">
              
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-0.5 bg-gold-500/10 border border-gold-500/30 text-gold-400 font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Flagship Initiative
                </span>
                <span className="font-mono text-slate-400 text-[11px]">20 Nov 2026</span>
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                  Amb. M. T. Mbu <br />
                  <span className="text-gold-gradient">Annual Diplomacy Day</span>
                </h3>
                <p className="text-xs text-slate-300 mt-2">
                  National strategic dialogue convening diplomats, ministers, and media leaders at the Shehu Musa Yar'Adua Centre, Abuja.
                </p>
              </div>

              <button
                onClick={onOpenNotify}
                className="w-full py-2.5 bg-gold-gradient hover:bg-gold-gradient-hover text-navy-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Registration Coming Soon</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
