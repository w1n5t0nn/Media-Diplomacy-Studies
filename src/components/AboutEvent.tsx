import React from 'react';
import { Landmark, Globe2, MessageSquare, Users, Compass, ChevronRight } from 'lucide-react';

export const AboutEvent: React.FC = () => {
  const pillars = [
    {
      icon: <Globe2 className="w-6 h-6 text-gold-400" />,
      title: 'Global Narrative & Perception',
      description: 'Nations no longer compete solely on military or economic power. Soft power, global reputation, and strategic narratives dictate international standing and economic influence.'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-gold-400" />,
      title: 'State Media Diplomacy',
      description: 'Examining how modern state broadcasting, digital communications, and institutional media serve as frontline diplomatic channels to project national values.'
    },
    {
      icon: <Users className="w-6 h-6 text-gold-400" />,
      title: 'Cross-Sectoral Confluence',
      description: 'Bringing together career diplomats, government ministers, academic scholars, media executives, and corporate leaders for unified strategic dialogue.'
    },
    {
      icon: <Compass className="w-6 h-6 text-gold-400" />,
      title: 'A New National Tradition',
      description: 'Establishing an annual institutional platform on 20 November to evaluate Nigeria’s diplomatic trajectory and elevate public diplomacy benchmarks.'
    }
  ];

  return (
    <section id="about-event" className="py-24 bg-navy-900 border-t border-b border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-2">
            Institutional Purpose
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-6">
            About the <span className="text-gold-gradient">Annual Diplomacy Day</span>
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mb-8" />
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base md:text-lg">
            <div className="p-6 bg-navy-950/80 border-l-4 border-gold-500 rounded-r-xl">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2">
                A New National Tradition Begins on 20 November 2026
              </h3>
              <p className="text-slate-300 text-sm md:text-base">
                On 20 November 2026, Nigeria marks the inaugural edition of the Ambassador Matthew Tawo Mbu Annual Diplomacy Day — a high-level national institution convened to advance public diplomacy, strategic communication, and international influence.
              </p>
            </div>

            <p>
              The event convenes a distinguished audience of diplomats, ministers, academic scholars, business leaders, media directors, and international policy analysts. Together, delegates examine the evolving mechanics of statecraft in an era where global perception directly shapes economic prosperity and sovereign dignity.
            </p>

            <p>
              By honoring the timeless legacy of Ambassador M. T. Mbu — Nigeria’s pioneer Minister of State for Foreign Affairs and premier High Commissioner to the United Kingdom — the summit anchors future-forward diplomatic strategies in the rock-solid foundation of Nigeria’s founding statecraft.
            </p>
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-8 rounded-2xl border border-gold-500/30 shadow-navy-deep space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white border-b border-navy-800 pb-3 flex items-center gap-2">
              <Landmark className="w-6 h-6 text-gold-400" />
              <span>Core Summit Objectives</span>
            </h3>

            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span><strong>Formulate Strategic Frameworks</strong> for Nigeria’s state media and public diplomacy projection.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span><strong>Bridge Sectoral Silos</strong> between career diplomats, media practitioners, and academic thought leaders.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span><strong>Honour Statesmanship</strong> by commemorating Ambassador Mbu’s historic contributions to international law and diplomacy.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span><strong>Publish the Annual Abuja Communique</strong> on State Media & Soft Power in Africa.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 4 Pillars Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 bg-navy-950/70 border border-navy-800 hover:border-gold-500/40 rounded-xl transition-all hover:-translate-y-1 group"
            >
              <div className="p-3 bg-gold-500/10 border border-gold-500/20 rounded-lg w-fit mb-4 group-hover:bg-gold-500/20 transition-colors">
                {pillar.icon}
              </div>
              <h4 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
