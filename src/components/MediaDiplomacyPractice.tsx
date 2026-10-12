import React from 'react';
import { Globe, Compass, Landmark, Award } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface MediaDiplomacyPracticeProps {
  isAuditMode: boolean;
}

export const MediaDiplomacyPractice: React.FC<MediaDiplomacyPracticeProps> = ({ isAuditMode }) => {
  const pillars = [
    { title: 'State Media & Soft Power Projection', desc: 'Leveraging public broadcasting to advance foreign policy and soft power.', icon: <Globe className="w-5 h-5 text-gold-400" /> },
    { title: 'Cross-Border Narrative Design', desc: 'Structuring sovereign narratives for bilateral and international summit forums.', icon: <Compass className="w-5 h-5 text-gold-400" /> },
    { title: 'Diplomatic Press & Envoys Briefing', desc: 'Structuring press engagements between foreign ambassadors and host nation media.', icon: <Landmark className="w-5 h-5 text-gold-400" /> },
    { title: 'Public Diplomacy Policy Dialogue', desc: 'Convening high-level diplomatic dialogues anchored by landmark national events.', icon: <Award className="w-5 h-5 text-gold-400" /> },
  ];

  return (
    <section id="media-diplomacy" className="py-16 bg-navy-900 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 block mb-1 font-mono">
            Practice Area II
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Media <span className="text-gold-gradient">Diplomacy Practice</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-gradient mx-auto rounded-full mt-3" />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 bg-navy-950 border border-navy-800 rounded-2xl hover:border-gold-500/30 transition-all flex items-start gap-4 ${
                isAuditMode ? 'placeholder-highlighted' : ''
              }`}
            >
              <div className="p-2.5 bg-gold-500/10 border border-gold-500/30 rounded-xl text-gold-400 shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300">{item.desc}</p>
                <div className="pt-2">
                  <PlaceholderBadge label="Framework Module" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
